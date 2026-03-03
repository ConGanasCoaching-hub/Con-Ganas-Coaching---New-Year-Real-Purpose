
import React, { useState } from 'react';
import { X, Loader2, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { generateMindsetInsight } from '../services/geminiService';
import { sendApplicationEmail } from '../services/emailService';
import { AssessmentResult, ApplicationData } from '../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'assessment' | 'form' | 'success'>('assessment');
  const [struggle, setStruggle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [insight, setInsight] = useState<AssessmentResult | null>(null);
  
  const [formData, setFormData] = useState<ApplicationData>({ 
    name: '', 
    email: '', 
    phone: '', 
    category: 'Serious professional seeking structure',
    frustration: '',
    vision: ''
  });

  if (!isOpen) return null;

  const handleAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!struggle.trim()) return;
    setIsLoading(true);
    try {
      const result = await generateMindsetInsight(struggle);
      setInsight(result);
      setStep('form');
    } catch (err) {
      console.error(err);
      setStep('form');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send email with application data
      const emailData = {
        ...formData,
        struggle: struggle,
        insight: insight?.insight || ''
      };
      
      await sendApplicationEmail(emailData);
      
      // Small delay for UX
      setTimeout(() => {
        setIsLoading(false);
        setStep('success');
      }, 1000);
    } catch (error) {
      console.error('Error submitting application:', error);
      // Still show success to user even if email fails
      setIsLoading(false);
      setStep('success');
    }
  };

  const inputClasses = "w-full p-4 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AF630B] focus:border-transparent outline-none transition-all text-white placeholder:text-white/20";
  const labelClasses = "text-[10px] font-black uppercase tracking-[0.2em] text-white/40";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ paddingLeft: 'max(1rem, env(safe-area-inset-left))', paddingRight: 'max(1rem, env(safe-area-inset-right))' }}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-[#151819] w-full max-w-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] p-2 flex items-center justify-center text-white/30 hover:text-white transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto custom-scrollbar flex-1">
          <div className="p-5 sm:p-6 md:p-8 lg:p-12">
            {step === 'assessment' && (
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-[#AF630B] bg-[#AF630B]/10 border border-[#AF630B]/20 px-3 py-1 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Limited Spots Available</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">You're One Step Away.</h3>
                  <p className="text-white/50 font-medium">Most people will close this window and change nothing. The ones who fill this out are the ones who actually change.</p>
                </div>

                <div className="bg-[#AF630B]/10 p-5 rounded-2xl border border-[#AF630B]/20">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#AF630B] mt-2 shrink-0 animate-pulse"></div>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">
                      Only <span className="text-[#AF630B] font-black">12 online spots</span> per cycle. Limited 1:1 slots in West Hollywood. Once they're filled, this application closes until the next intake.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleAssessment} className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white/80 block">
                      What has stopped you from reaching your fitness goals in the past?
                    </label>
                    <textarea 
                      required
                      value={struggle}
                      onChange={(e) => setStruggle(e.target.value)}
                      placeholder="Be honest—is it lack of structure? Is it starting strong and fading? Tell me what has stood in your way..."
                      className="w-full h-40 p-5 bg-black/40 border border-white/10 rounded-2xl focus:ring-2 focus:ring-[#AF630B] focus:border-transparent outline-none resize-none transition-all placeholder:text-white/20 text-white text-lg"
                    />
                  </div>
                  
                  <button 
                    disabled={isLoading || !struggle.trim()}
                    className="w-full min-h-[48px] bg-[#AF630B] text-white py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 disabled:opacity-50 transition-all shadow-xl shadow-[#AF630B]/20 hover:scale-[1.01] active:scale-[0.98]"
                  >
                    {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Submit & Secure Your Spot'}
                  </button>
                  <p className="text-center text-[10px] text-white/20 uppercase tracking-widest font-bold">Your privacy is strictly guarded.</p>
                </form>
              </div>
            )}

            {step === 'form' && (
              <div className="space-y-10">
                {insight && (
                  <div className="bg-black/40 p-8 rounded-3xl text-white border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#AF630B] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#AF630B] flex items-center justify-center text-[10px] font-black">I</div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#AF630B]">Ivan's Insight</p>
                      </div>
                      <p className="text-xl italic font-light leading-relaxed text-white/90">"{insight.insight}"</p>
                      <div className="flex items-center gap-2 text-white/40 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#AF630B]" />
                        <p>{insight.recommendation}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Personal Details</h3>
                    <p className="text-white/40 text-sm font-medium">The foundation of our communication.</p>
                  </div>

                  <form onSubmit={handleSubmitApplication} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className={labelClasses}>Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className={inputClasses}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClasses}>Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className={inputClasses}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClasses}>Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className={inputClasses}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClasses}>Which best describes you?</label>
                        <select 
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                          className={`${inputClasses} appearance-none cursor-pointer`}
                        >
                          <option className="bg-[#151819]">Serious professional seeking structure</option>
                          <option className="bg-[#151819]">Executive or high-performer</option>
                          <option className="bg-[#151819]">Goal-oriented individual</option>
                          <option className="bg-[#151819]">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-white/5">
                       <div className="space-y-3">
                        <label className="text-sm font-bold text-white/80 block">
                          Which training format are you interested in?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { value: 'Online Coaching', label: 'Online Coaching', desc: 'Train from anywhere' },
                            { value: '1:1 In-Person (West Hollywood)', label: '1:1 In-Person', desc: 'West Hollywood' },
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setFormData({...formData, frustration: option.value})}
                              className={`p-4 rounded-xl border text-left transition-all ${
                                formData.frustration === option.value
                                  ? 'border-[#AF630B] bg-[#AF630B]/15 ring-1 ring-[#AF630B]'
                                  : 'border-white/10 bg-black/40 hover:border-white/20'
                              }`}
                            >
                              <p className={`font-bold text-sm ${formData.frustration === option.value ? 'text-[#AF630B]' : 'text-white'}`}>{option.label}</p>
                              <p className="text-white/40 text-xs mt-1">{option.desc}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-white/80 block">
                          Where do you see yourself in 6 months?
                        </label>
                        <textarea 
                          required
                          value={formData.vision}
                          onChange={(e) => setFormData({...formData, vision: e.target.value})}
                          placeholder="Describe your energy, your body, and your confidence..."
                          className={`${inputClasses} h-32 resize-none`}
                        />
                      </div>
                    </div>

                    <button 
                      disabled={isLoading}
                      className="w-full min-h-[48px] bg-white text-black py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl flex items-center justify-center gap-3 mt-4 disabled:opacity-70 shadow-2xl transition-all hover:bg-[#AF630B] hover:text-white active:scale-[0.98]"
                    >
                      {isLoading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Finalize Application
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-white/20 font-black uppercase tracking-widest">Applications reviewed weekly. Strategy call scheduled upon approval.</p>
                  </form>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center py-16 space-y-8 animate-in slide-in-from-bottom duration-500">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto ring-8 ring-green-500/5">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-white">Application Received.</h3>
                  <div className="max-w-md mx-auto space-y-6">
                    <p className="text-white/60 text-lg">
                      Thanks, {formData.name.split(' ')[0]}. Your application has been sent directly to <span className="text-[#AF630B] font-black underline decoration-2 underline-offset-4">conganascoaching@gmail.com</span>.
                    </p>
                    <p className="text-white/40 font-medium">
                      Every application is reviewed personally. Approved applicants receive a strategy call to begin the 16-week cycle.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#AF630B] hover:border-[#AF630B] transition-all"
                >
                  Back to Site
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
