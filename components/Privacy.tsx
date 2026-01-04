import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyProps {
  onBack: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1112] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[100%] h-[100%] top-[calc(50%-50%)] left-[calc(50%-50%)] opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(175, 99, 11, 0.2) 0%, rgba(175, 99, 11, 0) 50%)',
            mixBlendMode: 'screen',
            filter: 'blur(80px)',
            animation: 'moveVertical 40s ease infinite'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12 space-y-6 fade-in slide-in-from-top">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group mb-8"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Site</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-[#AF630B]/20 border border-[#AF630B]/40">
              <Shield className="w-8 h-8 text-[#AF630B]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.02em]">
                Privacy Policy
              </h1>
              <p className="text-white/60 mt-2 text-sm font-medium">Last Updated: January 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 fade-in slide-in-from-bottom" style={{ animationDelay: '150ms' }}>
          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-6 h-6 text-[#AF630B] shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white">Introduction</h2>
                <p className="text-white/70 leading-[1.6] tracking-normal">
                  Con Ganas Coaching ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <Eye className="w-6 h-6 text-[#AF630B] shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white">Information We Collect</h2>
                <div className="space-y-3 text-white/70 leading-[1.6] tracking-normal">
                  <p><strong className="text-white">Personal Information:</strong> When you apply for coaching services, we collect your name, email address, phone number, and any other information you voluntarily provide in your application.</p>
                  <p><strong className="text-white">Usage Data:</strong> We may collect information about how you access and use our website, including your IP address, browser type, and pages visited.</p>
                  <p><strong className="text-white">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-6 h-6 text-[#AF630B] shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white">How We Use Your Information</h2>
                <ul className="space-y-2 text-white/70 leading-[1.6] tracking-normal list-disc list-inside">
                  <li>To process and respond to your coaching applications</li>
                  <li>To communicate with you about our services</li>
                  <li>To provide personalized coaching programs and support</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Data Protection</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Third-Party Services</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                We may use third-party services (such as email providers) to facilitate our services. These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Your Rights</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-white/70 leading-[1.6] tracking-normal list-disc list-inside">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
              </ul>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Data Retention</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Children's Privacy</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Changes to This Privacy Policy</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </section>

          <section className="bg-[#AF630B]/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#AF630B]/30">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Contact Us</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-white/90">
                <p className="font-bold">Con Ganas Coaching</p>
                <p>Email: <a href="mailto:conganascoaching@gmail.com" className="text-[#AF630B] hover:text-white transition-colors underline">conganascoaching@gmail.com</a></p>
                <p>Location: 7819 Beverly Blvd, Los Angeles, CA 90036</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <button
            onClick={onBack}
            className="w-full sm:w-auto bg-[#AF630B] hover:bg-[#925309] text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

