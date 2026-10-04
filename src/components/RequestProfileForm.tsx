import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Loader2,
  User,
  Briefcase,
  Phone,
  Mail,
} from 'lucide-react';
import { ProfileFormData } from '../types/profile';
import { submitProfileRequest } from '../lib/supabase';
import { getWhatsAppUrl, WHATSAPP_PRESETS } from '../config/whatsapp';

export const RequestProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: '',
    profession: '',
    phone: '',
    email: '',
    agreedToContact: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submittedName, setSubmittedName] = useState<string>('');
  const [submittedProfession, setSubmittedProfession] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreedToContact: e.target.checked }));
    if (errors.agreedToContact) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.agreedToContact;
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }
    if (!formData.profession.trim()) {
      errs.profession = 'Please enter your profession';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'WhatsApp or phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.agreedToContact) {
      errs.agreedToContact = 'Please confirm you agree to be contacted';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.getElementsByName(firstErrorKey)[0];
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitProfileRequest(formData);
      if (result.success) {
        setSubmittedName(formData.fullName);
        setSubmittedProfession(formData.profession);
        setSubmissionSuccess(true);
      } else {
        setErrors({ form: 'An unexpected issue occurred. Please reach out to us on WhatsApp directly.' });
      }
    } catch (err) {
      setErrors({ form: 'Could not submit your request. Please try again or message us on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      profession: '',
      phone: '',
      email: '',
      agreedToContact: false,
    });
    setSubmissionSuccess(false);
  };

  return (
    <section id="request-form" className="py-16 md:py-24 bg-[#FAF9F5] border-t border-stone-200/60 scroll-mt-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2">
            Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Ready to have your own profile?
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Tell us a little about yourself. We'll take care of the rest.
          </p>
        </div>

        {/* Success State */}
        {submissionSuccess ? (
          <div className="bg-white border border-stone-300 rounded-3xl p-8 sm:p-12 shadow-sm text-center max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              You're on the list.
            </h3>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-8">
              Thanks! We've received your details. We'll contact you on WhatsApp shortly.
            </p>

            {/* WhatsApp action */}
            <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 mb-8 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Fast Track
                  </div>
                  <div className="text-sm font-semibold text-stone-900 mt-0.5">
                    Need help? WhatsApp us.
                  </div>
                  <div className="text-xs text-stone-500">
                    Connect directly with our team.
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(WHATSAPP_PRESETS.afterSubmission(submittedName, submittedProfession))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#128C7E] hover:bg-[#0E7064] rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetForm}
              className="text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              Submit another profile request
            </button>
          </div>
        ) : (
          /* Streamlined Form (Name, Profession, Contact Details) */
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.03)] space-y-6"
          >
            {/* General form error notice */}
            {errors.form && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{errors.form}</span>
              </div>
            )}

            {/* 1. Full Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Ayush Sharma"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all ${
                    errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-stone-200 bg-stone-50/40'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* 2. Profession */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Profession / Job Title <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  placeholder="e.g. Product Designer, Corporate Lawyer, Consultant"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all ${
                    errors.profession ? 'border-red-400 bg-red-50/20' : 'border-stone-200 bg-stone-50/40'
                  }`}
                />
              </div>
              {errors.profession && (
                <p className="mt-1 text-xs text-red-600">{errors.profession}</p>
              )}
            </div>

            {/* 3. Contact Details */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-100 pb-2">
                Contact Details
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    WhatsApp / Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-stone-200 bg-stone-50/40'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-stone-200 bg-stone-50/40'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Agreement & Submit */}
            <div className="pt-4 border-t border-stone-100 space-y-5">
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.agreedToContact}
                    onChange={handleCheckboxChange}
                    className="mt-0.5 w-4 h-4 rounded text-stone-900 border-stone-300 focus:ring-stone-900 cursor-pointer"
                  />
                  <span className="text-xs text-stone-600 leading-snug">
                    I agree to be contacted regarding my Aboutly profile via WhatsApp and email.
                  </span>
                </label>
                {errors.agreedToContact && (
                  <p className="mt-1 text-xs text-red-600">{errors.agreedToContact}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  <span>Starting at ₹149</span> · <span>We'll message you on WhatsApp</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Create My Profile</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
