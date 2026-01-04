
import React, { useState } from 'react';
import { X, Loader2, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { generateMindsetInsight } from '../services/geminiService';
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
    category: 'Busy Professional needing structure',
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

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a production environment, this data would be sent to a backend
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  const inputClasses = "w-full p-4 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AF630B] focus:border-transparent outline-none transition-all text-white placeholder:text-white/20";
  const labelClasses = "text-[10px] font-black uppercase tracking-[0.2em] text-white/40";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-[#151819] w-full max-w-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/30 hover:text-white transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto custom-scrollbar flex-1">
          <div className="p-8 md:p-12">
            {step === 'assessment' && (
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-[#AF630B] bg-[#AF630B]/10 border border-[#AF630B]/20 px-3 py-1 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Step 1: Mindset Calibration</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">Apply for 1:1 Coaching with Ivan</h3>
                  <p className="text-white/40 font-medium italic">"Only 5 Spots Available for January. Serious Inquiries Only."</p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <p className="text-sm text-white/60 leading-relaxed">
                    Con Ganas Coaching provides a bespoke and luxury experience focused on real transformation. We work with individuals ready to train, eat, and live with purpose and heart.
                  </p>
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
                    className="w-full bg-[#AF630B] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 disabled:opacity-50 transition-all shadow-xl shadow-[#AF630B]/20 hover:scale-[1.01] active:scale-[0.98]"
                  >
                    {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Continue to Final Application'}
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
                          <option className="bg-[#151819]">Busy Professional needing structure</option>
                          <option className="bg-[#151819]">Bride/Groom preparing for the big day</option>
                          <option className="bg-[#151819]">Looking to reclaim energy and confidence</option>
                          <option className="bg-[#151819]">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-white/5">
                       <div className="space-y-3">
                        <label className="text-sm font-bold text-white/80 block">
                          What is your #1 frustration with your health or energy?
                        </label>
                        <textarea 
                          required
                          value={formData.frustration}
                          onChange={(e) => setFormData({...formData, frustration: e.target.value})}
                          placeholder="Be specific. Is it lack of time? Lack of knowledge? Lack of motivation?"
                          className={`${inputClasses} h-32 resize-none`}
                        />
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
                      className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 mt-4 disabled:opacity-70 shadow-2xl transition-all hover:bg-[#AF630B] hover:text-white active:scale-[0.98]"
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
                    <p className="text-center text-[10px] text-white/20 font-black uppercase tracking-widest">I will reach out personally within 24 hours.</p>
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
                      Thanks, {formData.name.split(' ')[0]}. Your application has been sent directly to <span className="text-[#AF630B] font-black underline decoration-2 underline-offset-4">IvanG@conganascoaching.com</span>.
                    </p>
                    <p className="text-white/40 font-medium italic">
                      "I review every application personally. If it looks like we are a good fit, I will reach out to schedule a strategy call."
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
