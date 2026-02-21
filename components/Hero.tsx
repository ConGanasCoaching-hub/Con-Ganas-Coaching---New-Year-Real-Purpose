
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApply }) => {
  const logoUrl = "/logo-all-white.png";
  const coachImageUrl = "https://lh3.googleusercontent.com/d/1ZsFqhvE08HU1cBb5qRR6iIrTcSK2hn7c";

  return (
    <section className="relative min-h-[100dvh] min-h-[100svh] flex flex-col bg-[#0f1112] px-4 sm:px-6 pb-[env(safe-area-inset-bottom)] overflow-hidden">
      <style>{`
        @keyframes moveVertical {
          0% { transform: translateY(-50%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }

        @keyframes moveHorizontal {
          0% { transform: translateX(-50%) translateY(-10%); }
          50% { transform: translateX(50%) translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }

        @keyframes moveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[100%] h-[100%] top-[calc(50%-50%)] left-[calc(50%-50%)] opacity-60"
          style={{
            background: 'radial-gradient(circle at center, rgba(175, 99, 11, 0.4) 0%, rgba(175, 99, 11, 0) 50%)',
            mixBlendMode: 'screen',
            transformOrigin: 'center center',
            filter: 'blur(60px)',
            animation: 'moveVertical 30s ease infinite'
          }}
        ></div>
        
        <div 
          className="absolute w-[100%] h-[100%] top-[calc(50%-50%)] left-[calc(50%-50%)] opacity-50"
          style={{
            background: 'radial-gradient(circle at center, rgba(175, 99, 11, 0.35) 0%, rgba(175, 99, 11, 0) 50%)',
            mixBlendMode: 'screen',
            transformOrigin: 'calc(50% - 400px)',
            filter: 'blur(60px)',
            animation: 'moveInCircle 20s reverse infinite'
          }}
        ></div>
        
        <div 
          className="absolute w-[100%] h-[100%] top-[calc(50%-50%)] left-[calc(50%-50%)] opacity-55"
          style={{
            background: 'radial-gradient(circle at center, rgba(146, 83, 9, 0.4) 0%, rgba(146, 83, 9, 0) 50%)',
            mixBlendMode: 'screen',
            transformOrigin: 'calc(50% + 400px)',
            filter: 'blur(60px)',
            animation: 'moveInCircle 40s linear infinite'
          }}
        ></div>
        
        <div 
          className="absolute w-[100%] h-[100%] top-[calc(50%-50%)] left-[calc(50%-50%)] opacity-45"
          style={{
            background: 'radial-gradient(circle at center, rgba(175, 99, 11, 0.3) 0%, rgba(175, 99, 11, 0) 50%)',
            mixBlendMode: 'screen',
            transformOrigin: 'calc(50% - 200px)',
            filter: 'blur(60px)',
            animation: 'moveHorizontal 40s ease infinite'
          }}
        ></div>
        
        <div 
          className="absolute w-[100%] h-[100%] top-[calc(50%-50%)] left-[calc(50%-50%)] opacity-50"
          style={{
            background: 'radial-gradient(circle at center, rgba(146, 83, 9, 0.35) 0%, rgba(146, 83, 9, 0) 50%)',
            mixBlendMode: 'screen',
            transformOrigin: 'center center',
            filter: 'blur(60px)',
            animation: 'moveInCircle 20s ease infinite'
          }}
        ></div>
      </div>

      <nav className="relative z-20 w-full max-w-7xl mx-auto py-5 sm:py-6 md:py-8 flex items-center justify-between px-0">
        <div className="flex items-center group cursor-pointer">
          <img 
            src={logoUrl} 
            alt="Con Ganas Logo" 
            className="h-7 sm:h-8 md:h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 max-w-[140px] sm:max-w-none"
          />
        </div>
        <button 
          onClick={onApply}
          className="border border-[#AF630B]/40 hover:border-[#AF630B] active:scale-95 px-5 py-3 sm:px-6 sm:py-2.5 md:px-6 rounded-full text-white text-[10px] sm:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] transition-all bg-[#AF630B]/5 backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          Apply
        </button>
      </nav>

      <div className="flex-1 flex items-center relative z-10 py-8 sm:py-12 md:py-0">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#AF630B]/10 border border-[#AF630B]/20 rounded-full mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-[#AF630B] animate-pulse"></span>
              <span className="text-[#AF630B] text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">Application-Only Intake</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-[1.1] tracking-[-0.02em]">
                PERFORMANCE <br />
                <span className="text-[#AF630B] italic">REQUIRES COMMITMENT.</span>
              </h1>
              <div className="w-16 md:w-24 h-1.5 bg-[#AF630B] mx-auto lg:mx-0"></div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-xl mx-auto lg:mx-0 font-light leading-[1.6] tracking-normal">
              High-performance coaching for serious professionals. Available online or 1:1 in West Hollywood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 items-center justify-center lg:justify-start">
              <button 
                onClick={onApply}
                className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] bg-[#AF630B] hover:bg-[#925309] active:scale-[0.98] text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-sm font-black text-base md:text-lg transition-all flex items-center justify-center gap-3 sm:gap-4 group shadow-xl"
              >
                Apply For Coaching
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-6 py-3 border-l border-white/10 hidden md:flex">
                <div className="text-right">
                  <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.3em]">Limited client intake per cycle</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block relative">
             <div className="relative aspect-[4/5] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src={coachImageUrl} 
                  alt="Ivan Con Ganas Coaching" 
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

      <div className="relative z-20 w-full max-w-7xl mx-auto py-6 sm:py-8 md:py-10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] gap-3 sm:gap-4 md:gap-0">
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
