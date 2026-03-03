
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-[-0.02em]">This Isn't for Everyone.<br className="hidden sm:block" /> And That's the Point.</h2>
          <div className="space-y-4 text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-[1.6] tracking-normal px-1 sm:px-0">
            <p>Most people will read this page, think about it, and go back to doing nothing. That's fine — this program wasn't built for most people.</p>
            <p>It was built for the person who's done talking about change and is ready to <span className="text-white font-black">prove it.</span></p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">16 Weeks. No Shortcuts.</h3>
          <div className="space-y-4 text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-[1.6] tracking-normal">
            <p>Every client commits to a full 16-week coaching cycle. There is no month-to-month option. No "try it for a week" plan.</p>
            <p>Why? Because <span className="text-white font-black">real transformation doesn't happen in 30 days.</span> It happens when you stop giving yourself an exit and finally go all in.</p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">What You Walk Away With</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "A body you actually respect when you look in the mirror",
              "Strength you can feel — not just see",
              "A nutrition system you can maintain for LIFE",
              "Discipline that bleeds into your career, relationships, and identity",
              "The confidence that comes from doing something hard and finishing it",
              "A version of yourself you didn't think was possible 16 weeks ago"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-black/15 rounded-xl p-4">
                <span className="text-white font-black text-lg leading-none mt-0.5">+</span>
                <p className="text-white/90 text-sm font-medium leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Limited Intake. Application-Only.</h3>
          <div className="space-y-4 text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-[1.6]">
            <p>Online coaching is capped at <span className="text-white font-black">12 active clients per cycle.</span> 1:1 West Hollywood has limited private slots.</p>
            <p>Applications are reviewed weekly. Not all applicants are accepted. If you get in, it's because we believe you're ready — and we're putting our reputation behind your results.</p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">The Commitment Guarantee</h3>
          <div className="space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-[1.6] text-left px-2 sm:px-0">
            <p>Show up. Do the work. Follow the system. If within the first 14 days you complete your sessions, attend your check-ins, communicate consistently, and genuinely feel this isn't right for you — <span className="text-white font-black">you get your money back. All of it.</span></p>
            <p>We don't guarantee results without effort. We guarantee that if you bring commitment, we'll bring the structure, the accountability, and the coaching to get you there.</p>
            <p className="font-black text-white text-lg sm:text-xl">You bring the fight. We bring the system.</p>
          </div>
        </div>

        <div className="text-center space-y-5 sm:space-y-6 border-t border-white/20 pt-8 sm:pt-10 md:pt-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Process</h3>
          <div className="max-w-md mx-auto space-y-0">
            {[
              { step: "01", text: "Submit your application" },
              { step: "02", text: "We review and reach out" },
              { step: "03", text: "Strategy call to discuss fit & investment" },
              { step: "04", text: "Begin your 16-week transformation" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-4 border-b border-white/10 last:border-b-0">
                <span className="text-white/30 text-2xl font-black w-10">{item.step}</span>
                <span className="text-white font-bold text-base sm:text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center pt-6 sm:pt-8 border-t border-white/20 space-y-6">
          <div className="space-y-3">
            <p className="text-white/80 text-base sm:text-lg font-medium max-w-lg mx-auto">The next intake is filling up. If this page is live, there are still spots open — but not for long.</p>
          </div>
          <button 
            onClick={onApply}
            className="w-full sm:w-auto min-h-[48px] bg-black hover:bg-neutral-900 active:scale-[0.98] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-md font-black text-base sm:text-lg uppercase tracking-wider transition-all shadow-2xl"
          >
            Apply For Coaching
          </button>
          <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Applications reviewed weekly. Not all are accepted.</p>
        </div>
      </div>
    </section>
  );
};

export default Scarcity;
