
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "/logo-all-white.png";

  return (
    <footer className="relative bg-[#151819] text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background Decorative Elements (Static Luxury) */}
      <div className="absolute inset-0 z-0">
        {/* Top-down gradient for smooth section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#151819] via-transparent to-black"></div>
        {/* Subtle bronze glow for luxury feel */}
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-[#AF630B] opacity-[0.05] blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-14 md:space-y-16 relative z-10">
        <div className="space-y-5 sm:space-y-8 flex flex-col items-center">
          <img 
            src={logoUrl} 
            alt="Con Ganas Logo" 
            className="h-20 sm:h-24 md:h-36 w-auto object-contain opacity-90 transition-opacity max-w-[80%] sm:max-w-none"
          />
          <div className="w-20 h-1 bg-[#AF630B] mx-auto rounded-full shadow-[0_0_25px_rgba(175,99,11,0.4)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24 w-full max-w-4xl">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="p-1 rounded-full bg-gradient-to-r from-white/10 to-transparent">
              <div className="px-6 py-4 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 group hover:border-[#AF630B]/50 transition-all duration-500 shadow-2xl">
                <a 
                  href="mailto:IvanG@conganascoaching.com" 
                  className="flex items-center gap-3 sm:gap-4 text-[#AF630B] hover:text-white transition-colors text-center sm:text-left break-all"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300 shrink-0" />
                  <span className="text-base sm:text-lg md:text-xl font-black leading-[1.2] tracking-[-0.01em]">IvanG@conganascoaching.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-[#AF630B]/20 backdrop-blur-xl border border-[#AF630B]/40 shadow-xl mt-1">
                <MapPin className="w-7 h-7 text-[#AF630B] shrink-0" />
              </div>
              <div className="space-y-1">
                <p className="font-black text-[#AF630B] uppercase tracking-[0.3em] text-[10px] mb-2">Location</p>
                <p className="text-2xl font-black text-white leading-[1.2] tracking-[-0.01em] mb-1">HVY Industry</p>
                <div className="text-white/80 font-bold text-lg leading-[1.6] tracking-normal">
                  <p>7819 Beverly Blvd</p>
                  <p>Los Angeles, CA 90036</p>
                  <p className="tracking-[0.4em] opacity-40 uppercase text-[9px] mt-3 font-black">United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-14 pt-8 sm:pt-10">
          {['Discipline', 'Structure', 'Results', 'Accountability', 'Commitment'].map((word) => (
            <span key={word} className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black text-white/40 hover:text-[#AF630B] transition-all duration-700 cursor-default hover:tracking-[0.5em] drop-shadow-md">
              {word}
            </span>
          ))}
        </div>

        <div className="pt-12 sm:pt-16 md:pt-20 border-t border-white/10 w-full text-white/30 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
          <p className="drop-shadow-sm">© 2026 CON GANAS COACHING / ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-10">
             <a href="#privacy" className="hover:text-[#AF630B] transition-colors">Privacy</a>
             <a href="#terms" className="hover:text-[#AF630B] transition-colors">Terms</a>
             <a 
               href="https://www.instagram.com/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-[#AF630B] hover:text-white transition-all flex items-center gap-2 font-black border-b border-[#AF630B]/20 pb-0.5"
             >
               Instagram
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
