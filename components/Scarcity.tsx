
import React from 'react';

interface ScarcityProps {
  onApply: () => void;
}

const Scarcity: React.FC<ScarcityProps> = ({ onApply }) => {
  return (
    <section className="bg-[#AF630B] py-24 px-6 text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase">
          Final Availability Notice
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold leading-[1.2] tracking-[-0.01em]">I Am Only Taking 5 New Clients for January.</h2>
        
        <div className="space-y-6 text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-[1.6] tracking-normal">
          <p>
            Because I provide a luxury, bespoke experience, I cannot take on everyone. I pour my energy into every single client to ensure they reclaim their confidence.
          </p>
          <p className="font-semibold italic">
            If you want to start 2026 with Con Ganas with true intention and zeal, you need to secure your spot now. 
          </p>
        </div>
        
        <div className="pt-6">
          <button 
            onClick={onApply}
            className="bg-black hover:bg-neutral-900 text-white px-12 py-5 rounded-md font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Claim Your Spot Now
          </button>
          <p className="text-white/60 text-sm mt-6 uppercase tracking-widest font-bold">Once these spots are filled, the waitlist begins.</p>
        </div>
      </div>
    </section>
  );
};

export default Scarcity;
