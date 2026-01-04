import React, { useEffect } from 'react';
import { ArrowLeft, Scale, AlertCircle, FileCheck, CheckCircle } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
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
              <Scale className="w-8 h-8 text-[#AF630B]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.02em]">
                Terms of Service
              </h1>
              <p className="text-white/60 mt-2 text-sm font-medium">Last Updated: January 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 fade-in slide-in-from-bottom" style={{ animationDelay: '150ms' }}>
          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <FileCheck className="w-6 h-6 text-[#AF630B] shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white">Agreement to Terms</h2>
                <p className="text-white/70 leading-[1.6] tracking-normal">
                  By accessing or using Con Ganas Coaching's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle className="w-6 h-6 text-[#AF630B] shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white">Services Description</h2>
                <p className="text-white/70 leading-[1.6] tracking-normal mb-4">
                  Con Ganas Coaching provides personalized fitness coaching services, including:
                </p>
                <ul className="space-y-2 text-white/70 leading-[1.6] tracking-normal list-disc list-inside">
                  <li>Bespoke training programs tailored to individual needs</li>
                  <li>Nutrition guidance and meal planning</li>
                  <li>Mindset coaching and accountability support</li>
                  <li>24/7 communication and support</li>
                </ul>
                <p className="text-white/70 leading-[1.6] tracking-normal mt-4">
                  Services are provided on a one-on-one basis and are subject to availability.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Application and Acceptance Process</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                Submission of an application does not guarantee acceptance into our coaching program. We reserve the right to accept or decline applications at our sole discretion. Only 5 spots are available per intake period.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-[#AF630B] shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white">Health and Safety Disclaimer</h2>
                <p className="text-white/70 leading-[1.6] tracking-normal mb-4">
                  <strong className="text-white">IMPORTANT:</strong> Before beginning any fitness program, you must:
                </p>
                <ul className="space-y-2 text-white/70 leading-[1.6] tracking-normal list-disc list-inside">
                  <li>Consult with a qualified healthcare provider</li>
                  <li>Obtain medical clearance for physical activity</li>
                  <li>Disclose any medical conditions, injuries, or limitations</li>
                  <li>Follow all safety guidelines and instructions provided</li>
                </ul>
                <p className="text-white/70 leading-[1.6] tracking-normal mt-4">
                  You acknowledge that participation in fitness activities involves inherent risks of injury. Con Ganas Coaching is not responsible for any injuries that may occur during or as a result of participation in our programs.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Payment Terms</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                Payment terms and pricing will be discussed and agreed upon during the application process. All fees are non-refundable unless otherwise specified in a written agreement. Payment is due according to the schedule agreed upon between you and Con Ganas Coaching.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Client Responsibilities</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal mb-4">
                As a client, you agree to:
              </p>
              <ul className="space-y-2 text-white/70 leading-[1.6] tracking-normal list-disc list-inside">
                <li>Provide accurate and complete information about your health and fitness goals</li>
                <li>Follow the training and nutrition plans provided</li>
                <li>Communicate openly and honestly about your progress and challenges</li>
                <li>Respect scheduled appointment times and provide adequate notice for cancellations</li>
                <li>Maintain confidentiality of any proprietary information shared during coaching</li>
              </ul>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Intellectual Property</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                All content, including training programs, nutrition plans, materials, and methodologies provided by Con Ganas Coaching, are proprietary and protected by intellectual property laws. You may not reproduce, distribute, or share these materials without explicit written permission.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Limitation of Liability</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                To the maximum extent permitted by law, Con Ganas Coaching shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Termination</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                Either party may terminate the coaching relationship at any time with written notice. Upon termination, all outstanding fees remain due. Con Ganas Coaching reserves the right to terminate services immediately in cases of breach of these terms, non-payment, or behavior that is harmful, disruptive, or inappropriate.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Governing Law</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Los Angeles County, California.
              </p>
            </div>
          </section>

          <section className="bg-[#151819]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#AF630B]/20 transition-all duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Changes to Terms</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal">
                We reserve the right to modify these Terms of Service at any time. We will notify clients of any material changes. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          <section className="bg-[#AF630B]/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#AF630B]/30">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Contact Information</h2>
              <p className="text-white/70 leading-[1.6] tracking-normal mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

export default Terms;

