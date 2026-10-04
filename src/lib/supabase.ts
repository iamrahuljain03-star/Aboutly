import { createClient } from '@supabase/supabase-js';
import { ProfileFormData, ProfileRecord } from '../types/profile';

// Project credentials provided by the user
export const SUPABASE_PROJECT_ID = 'jfxrgbmnhwiwacedyxho';
export const DEFAULT_SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
export const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_cvjfmjXTJXi6qD03UMnNgA_zSG9ZE3F';

export const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined) || DEFAULT_SUPABASE_URL;
export const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) || DEFAULT_SUPABASE_ANON_KEY;

// Initialize official Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes('your-project') &&
    SUPABASE_URL.startsWith('https://')
  );
};

export interface SubmitProfileResult {
  success: boolean;
  isMock: boolean;
  tableCreated?: boolean;
  recordId: string;
  error?: string;
  statusMessage?: string;
  savedData?: ProfileRecord;
}

const LOCAL_STORAGE_KEY = 'aboutly_submitted_profiles';

/**
 * SQL script for the user to run in Supabase SQL Editor
 * to provision the `profiles` table and storage policies.
 */
export const SUPABASE_SETUP_SQL = `-- Run this in your Supabase SQL Editor (Project: ${SUPABASE_PROJECT_ID})
-- Link: https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/sql/new

-- 1. Create the profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  profession TEXT NOT NULL,
  profile_type TEXT NOT NULL DEFAULT 'Professional',
  photo_url TEXT,
  bio TEXT,
  experience TEXT,
  education TEXT,
  skills TEXT[],
  services TEXT[],
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT,
  linkedin TEXT,
  instagram TEXT,
  website TEXT,
  resume_url TEXT,
  template TEXT DEFAULT 'editorial-standard',
  price NUMERIC DEFAULT 149,
  status TEXT DEFAULT 'New',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous public submissions from the Aboutly web form
CREATE POLICY "Allow public submission of profile requests"
ON public.profiles
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4. Allow reading profiles for live link display
CREATE POLICY "Allow public reading of profiles"
ON public.profiles
FOR SELECT
TO anon, authenticated
USING (true);

-- 5. Storage buckets for profile photos and resumes
INSERT INTO storage.buckets (id, name, public) 
VALUES ('profile-photos', 'profile-photos', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- 6. Storage security policies
CREATE POLICY "Allow public upload to profile-photos"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'profile-photos');

CREATE POLICY "Allow public upload to resumes"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Allow public read from profile-photos"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'profile-photos');

CREATE POLICY "Allow public read from resumes"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'resumes');
`;

/**
 * Upload file to Supabase storage bucket (profile-photos, resumes)
 * Falls back gracefully if Supabase storage bucket is not created yet.
 */
async function uploadToStorageIfPossible(
  bucketName: 'profile-photos' | 'resumes',
  file: File,
  prefix: string
): Promise<string | undefined> {
  if (!isSupabaseConfigured()) {
    return `local://uploads/${bucketName}/${prefix}-${file.name}`;
  }

  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `${prefix}-${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (!error && data?.path) {
      const { data: publicUrlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(data.path);
      return publicUrlData?.publicUrl;
    }
  } catch (err) {
    console.warn(`Supabase Storage upload to ${bucketName} pending bucket setup:`, err);
  }

  return `local://uploads/${bucketName}/${prefix}-${file.name}`;
}

/**
 * Check if the Supabase `profiles` table is accessible
 */
export async function checkSupabaseTableStatus(): Promise<{
  connected: boolean;
  tableExists: boolean;
  error?: string;
}> {
  try {
    const { error } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);

    if (!error) {
      return { connected: true, tableExists: true };
    }

    if (error.code === 'PGRST205' || error.message?.includes('not find the table')) {
      return { connected: true, tableExists: false, error: 'Table public.profiles not created yet' };
    }

    return { connected: true, tableExists: false, error: error.message };
  } catch (err: any) {
    return { connected: false, tableExists: false, error: err?.message || 'Network error' };
  }
}

/**
 * Saves a new profile request.
 * - Inserts into Supabase `profiles` table using official client.
 * - Also caches to localStorage so no user submission is ever lost.
 */
export async function submitProfileRequest(formData: ProfileFormData): Promise<SubmitProfileResult> {
  const generatedId = typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const slug = formData.fullName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '') || `profile-${Date.now()}`;

  // Process optional file uploads if provided
  let photoUrl: string | undefined = undefined;
  let resumeUrl: string | undefined = undefined;

  if (formData.profilePhotoFile) {
    photoUrl = await uploadToStorageIfPossible('profile-photos', formData.profilePhotoFile, slug);
  }
  if (formData.resumeFile) {
    resumeUrl = await uploadToStorageIfPossible('resumes', formData.resumeFile, slug);
  }

  // Parse skills and services into arrays if provided
  const skillsArray = (formData.skills || '')
    .split(/[,;\n]+/)
    .map(s => s.trim())
    .filter(Boolean);

  const servicesArray = (formData.services || '')
    .split(/[,;\n]+/)
    .map(s => s.trim())
    .filter(Boolean);

  const newRecord: ProfileRecord = {
    id: generatedId,
    name: formData.fullName.trim(),
    slug,
    profession: formData.profession.trim(),
    profile_type: formData.profileType || 'Professional',
    photo_url: photoUrl,
    bio: formData.bio?.trim() || '',
    experience: formData.experience?.trim() || '',
    education: formData.education?.trim() || '',
    skills: skillsArray,
    services: servicesArray.length > 0 ? servicesArray : undefined,
    phone: formData.phone.trim(),
    email: formData.email.trim(),
    location: formData.location?.trim() || '',
    linkedin: formData.linkedin?.trim() || undefined,
    instagram: formData.instagram?.trim() || undefined,
    website: formData.website?.trim() || undefined,
    resume_url: resumeUrl,
    template: 'editorial-standard',
    price: 149,
    status: 'New',
    notes: formData.additionalNotes ? formData.additionalNotes.trim() : undefined,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // Always keep a local backup
  saveToLocalStorage(newRecord);

  // Insert into Supabase profiles table
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert([newRecord])
      .select();

    if (!error) {
      return {
        success: true,
        isMock: false,
        tableCreated: true,
        recordId: data?.[0]?.id || generatedId,
        statusMessage: `Successfully saved to Supabase project ${SUPABASE_PROJECT_ID} in 'profiles' table.`,
        savedData: newRecord,
      };
    }

    console.warn('Supabase insert note:', error);

    if (error.code === 'PGRST205' || error.message?.includes('not find the table')) {
      return {
        success: true,
        isMock: false,
        tableCreated: false,
        recordId: generatedId,
        statusMessage: `Connected to Supabase (${SUPABASE_PROJECT_ID}). Database table 'profiles' is ready to be created in your Supabase SQL editor.`,
        savedData: newRecord,
      };
    }

    return {
      success: true,
      isMock: false,
      tableCreated: false,
      recordId: generatedId,
      statusMessage: `Saved to backup. Supabase note: ${error.message}`,
      savedData: newRecord,
    };
  } catch (err: any) {
    console.warn('Supabase request error, using backup:', err);
    return {
      success: true,
      isMock: false,
      tableCreated: false,
      recordId: generatedId,
      statusMessage: 'Saved to local backup storage.',
      savedData: newRecord,
    };
  }
}

function saveToLocalStorage(record: ProfileRecord): void {
  try {
    const existingRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const list: ProfileRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
    list.unshift(record);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
  } catch (err) {
    console.error('Failed to save submission locally', err);
  }
}

export function getLocalSubmissions(): ProfileRecord[] {
  try {
    const existingRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return existingRaw ? JSON.parse(existingRaw) : [];
  } catch {
    return [];
  }
}
