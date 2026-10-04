export type ProfileType =
  | 'Professional'
  | 'Student'
  | 'Freelancer'
  | 'Consultant'
  | 'Lawyer'
  | 'Creator'
  | 'Other';

export type ProfileStatus =
  | 'New'
  | 'In Progress'
  | 'Preview'
  | 'Paid'
  | 'Delivered';

export interface ProfileRecord {
  id: string;
  name: string;
  slug: string;
  profession: string;
  profile_type: ProfileType;
  photo_url?: string;
  bio: string;
  experience: string;
  education: string;
  skills: string[];
  services?: string[];
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  resume_url?: string;
  template?: string;
  price?: number;
  status: ProfileStatus;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ProfileFormData {
  fullName: string;
  profession: string;
  phone: string;
  email: string;
  agreedToContact: boolean;
  profileType?: ProfileType;
  bio?: string;
  location?: string;
  experience?: string;
  education?: string;
  skills?: string;
  services?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  profilePhotoFile?: File | null;
  resumeFile?: File | null;
  additionalNotes?: string;
}

export interface DemoProfileItem {
  slug: string;
  name: string;
  profession: string;
  tagline: string;
  location: string;
  avatarInitials: string;
  accentColor: string;
  bio: string;
  aboutStory: string[];
  skills: string[];
  experiences: {
    role: string;
    company: string;
    period: string;
    description: string;
    tags?: string[];
  }[];
  selectedWork: {
    title: string;
    category: string;
    description: string;
    outcome?: string;
    link?: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  services?: string[];
  socials: {
    email: string;
    phone?: string;
    whatsappText: string;
    linkedin?: string;
    website?: string;
    instagram?: string;
  };
}
