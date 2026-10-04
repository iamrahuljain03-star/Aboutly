/**
 * Reusable WhatsApp integration configuration for Aboutly.
 *
 * NOTE: Replace YOUR_WHATSAPP_NUMBER with your registered WhatsApp Business number
 * in international format without '+' or special characters (e.g., '919876543210').
 */
export const WHATSAPP_NUMBER = 'YOUR_WHATSAPP_NUMBER';

/**
 * Builds a direct wa.me link with pre-filled message text.
 */
export function getWhatsAppUrl(message: string = 'Hi Aboutly, I want to create my professional profile.'): string {
  // If user hasn't replaced the placeholder yet, wa.me/YOUR_WHATSAPP_NUMBER will open WhatsApp with the text
  const cleanNumber = WHATSAPP_NUMBER.trim();
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export const WHATSAPP_PRESETS = {
  generalInquiry: 'Hi Aboutly, I want to create my professional profile.',
  pricingInquiry: 'Hi Aboutly, I have a question about the ₹149 professional profile setup.',
  supportInquiry: 'Hi Aboutly team, I need help regarding my profile.',
  afterSubmission: (name: string, profession: string) =>
    `Hi Aboutly, I just submitted my profile details for ${name} (${profession}). Looking forward to setting this up!`,
  connectWithProfessional: (proName: string, role: string) =>
    `Hi ${proName}, I came across your Aboutly profile (${role}) and would love to connect!`,
};
