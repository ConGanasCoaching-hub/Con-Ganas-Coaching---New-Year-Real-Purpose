
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApply }) => {
  const logoId = '18tgSvGF9RBWWiF1o9_PGSujE8RHrSRT7';
  const logoUrl = `https://lh3.googleusercontent.com/d/${logoId}`;
  const coachImageUrl = "https://lh3.googleusercontent.com/d/1ZsFqhvE08HU1cBb5qRR6iIrTcSK2hn7c";

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[#0f1112] px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-[#AF630B] opacity-[0.05] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-[#AF630B] opacity-[0.05] blur-[120px] rounded-full"></div>
      </div>

      <nav className="relative z-20 w-full max-w-7xl mx-auto py-6 md:py-8 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          <img 
            src={logoUrl} 
            alt="Con Ganas Logo" 
            className="h-8 md:h-14 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={onApply}
            className="hidden sm:block text-white/50 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-all"
          >
            Programs
          </button>
          <button 
            onClick={onApply}
            className="border border-[#AF630B]/40 hover:border-[#AF630B] px-4 md:px-6 py-2 rounded-full text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] transition-all bg-[#AF630B]/5 backdrop-blur-sm"
          >
            Apply Now
          </button>
        </div>
      </nav>

      <div className="flex-1 flex items-center relative z-10 py-12 md:py-0">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#AF630B]/10 border border-[#AF630B]/20 rounded-full mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-[#AF630B] animate-pulse"></span>
              <span className="text-[#AF630B] text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">2026 Winter Intake Now Open</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                80% FAIL <br />
                <span className="text-[#AF630B] italic">BY FEB.</span>
              </h1>
              <div className="w-16 md:w-24 h-1.5 bg-[#AF630B] mx-auto lg:mx-0"></div>
            </div>
            
            <p className="text-lg md:text-2xl text-white/60 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Most resolutions are built on a fragile "why". We build a foundation of <span className="text-white font-bold italic">Con Ganas</span>—discipline and heart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 items-center justify-center lg:justify-start">
              <button 
                onClick={onApply}
                className="w-full sm:w-auto bg-[#AF630B] hover:bg-[#925309] text-white px-8 md:px-12 py-5 md:py-6 rounded-sm font-black text-base md:text-lg transition-all flex items-center justify-center gap-4 group shadow-xl"
              >
                SECURE YOUR SPOT
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-6 py-3 border-l border-white/10 hidden md:flex">
                <div className="text-right">
                  <p className="text-white font-black text-xl leading-none">04</p>
                  <p className="text-[#AF630B] text-[8px] font-black uppercase tracking-widest mt-1">Spots Left</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block relative">
             <div className="relative aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src={coachImageUrl} 
                  alt="Ivan - Con Ganas Coaching" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Founder & Head Coach</p>
                   <h3 className="text-4xl font-black text-white italic uppercase leading-none">Ivan G.</h3>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto py-8 md:py-10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] gap-4 md:gap-0">
        <div className="flex gap-6 md:gap-10">
          <span>Integrity</span>
          <span>Discipline</span>
          <span>Results</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 md:w-12 h-[1px] bg-white/10"></div>
          <span>West Hollywood, CA</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
