
import React from 'react';

interface ScarcityProps {
  onApply: () => void;
}

const Scarcity: React.FC<ScarcityProps> = ({ onApply }) => {
  return (
    <section className="bg-[#AF630B] py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
        <div className="text-center space-y-5 sm:space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-[-0.02em]">16-Week Minimum. No Exceptions.</h2>
          <div className="space-y-4 text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-[1.6] tracking-normal px-1 sm:px-0">
            <p>All clients commit to a structured 16-week coaching cycle. There is no month-to-month option.</p>
            <p>Real results require time. Strength requires consistency. Commitment creates change.</p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 text-left">
            <div className="bg-black/20 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-2">Online Coaching</p>
              <p className="text-xl font-black mb-4">$3,500 for the full 16-week program</p>
              <p className="text-white/80 text-sm font-medium">$3,500 paid in full or 4 payments of $975.</p>
            </div>
            <div className="bg-black/20 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-2">1:1 West Hollywood</p>
              <p className="text-xl font-black mb-4">$150/session. Minimum 2x per week for 16 weeks</p>
              <p className="text-white/80 text-sm font-medium">32 sessions minimum. Private gym. Application-only.</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Limited Intake. Application-Only.</h3>
          <div className="space-y-4 text-lg text-white/90 font-medium max-w-2xl mx-auto leading-[1.6]">
            <p>Online coaching: capped at 12 active clients per cycle. 1:1 West Hollywood: limited private slots.</p>
            <p>Applications are reviewed weekly. Not all applicants are accepted.</p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">The Commitment Guarantee</h3>
          <div className="space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-[1.6] text-left px-2 sm:px-0">
            <p>If within the first 14 days you complete your first 4 sessions, follow your structure, attend check-ins, communicate consistently, and genuinely feel this system is not right for you — we will refund your investment.</p>
            <p>We do not guarantee results without effort. We guarantee structure, accountability, and professional coaching.</p>
            <p className="font-black text-white">You bring commitment. We bring the system.</p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Who This Is For</h3>
          <div className="space-y-6 text-base text-white/90 font-medium max-w-2xl mx-auto leading-[1.6]">
            <p>Serious professionals ready to commit. This is not for price shoppers, uncommitted individuals, or those seeking quick fixes.</p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Process</h3>
          <ol className="space-y-3 text-lg font-medium max-w-md mx-auto text-left list-decimal list-inside">
            <li>Submit application</li>
            <li>Application review</li>
            <li>Strategy call</li>
            <li>Begin 16-week cycle</li>
          </ol>
        </div>
        
        <div className="text-center pt-6 sm:pt-8 border-t border-white/20">
          <button 
            onClick={onApply}
            className="w-full sm:w-auto min-h-[48px] bg-black hover:bg-neutral-900 active:scale-[0.98] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-md font-black text-base sm:text-lg uppercase tracking-wider transition-all shadow-2xl"
          >
            Apply For Coaching
          </button>
          <p className="text-white/60 text-sm mt-6 uppercase tracking-widest font-bold">Applications reviewed weekly. Not all are accepted.</p>
        </div>
      </div>
    </section>
  );
};

export default Scarcity;
