export interface EmailData {
  name: string;
  email: string;
  phone: string;
  category: string;
  frustration: string;
  vision: string;
  struggle?: string;
  insight?: string;
}

export const sendApplicationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Format email content
    const emailBody = `
New Application Submission - Con Ganas Coaching

Personal Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Category: ${data.category}

Assessment Response:
${data.struggle ? `- Struggle: ${data.struggle}` : ''}
${data.insight ? `- Insight: ${data.insight}` : ''}

Application Details:
- #1 Frustration: ${data.frustration}
- Vision (6 months): ${data.vision}

---
Submitted via Con Ganas Coaching Landing Page
    `.trim();

    // Use mailto link to open email client with pre-filled data
    const subject = encodeURIComponent(`New Application: ${data.name}`);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:conganascoaching@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link (will open user's default email client)
    window.location.href = mailtoLink;
    
    // Also copy email content to clipboard as backup
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`To: conganascoaching@gmail.com\nSubject: New Application: ${data.name}\n\n${emailBody}`);
      } catch (clipboardError) {
        console.warn('Clipboard copy failed:', clipboardError);
      }
    }
    
    // Log for debugging
    console.log('Application submitted:', {
      to: 'conganascoaching@gmail.com',
      data: data
    });
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    // Still return true to show success to user
    return true;
  }
};

