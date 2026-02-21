
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#151819] leading-[1.2] tracking-[-0.02em]">The Real Problem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          <div className="space-y-3 sm:space-y-4 p-5 sm:p-6 md:p-8 rounded-2xl bg-[#EDEFF7]/50 hover:bg-[#EDEFF7] transition-colors border border-transparent hover:border-[#BCBFCC]/30">
            <span className="text-4xl font-bold text-[#AF630B]/20">01</span>
            <p className="text-[#151819] font-medium leading-[1.6] tracking-normal">
              Random workouts with no clear progression. No plan. No measurable outcomes.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4 p-5 sm:p-6 md:p-8 rounded-2xl bg-[#EDEFF7]/50 hover:bg-[#EDEFF7] transition-colors border border-transparent hover:border-[#BCBFCC]/30">
            <span className="text-4xl font-bold text-[#AF630B]/20">02</span>
            <p className="text-[#151819] font-medium leading-[1.6] tracking-normal">
              Inconsistent nutrition. No system. No accountability to keep you on track.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4 p-5 sm:p-6 md:p-8 rounded-2xl bg-[#EDEFF7]/50 hover:bg-[#EDEFF7] transition-colors border border-transparent hover:border-[#BCBFCC]/30">
            <span className="text-4xl font-bold text-[#AF630B]/20">03</span>
            <p className="text-[#151819] font-medium leading-[1.6] tracking-normal">
              No accountability. No structure. Results require discipline. Structure is the solution.
            </p>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 max-w-2xl mx-auto px-2 sm:px-0">
          <p className="text-base sm:text-lg md:text-xl text-[#151819]/70 leading-[1.6] tracking-normal font-medium">
            Most professionals stay stuck because they lack structure. Discipline over motivation. Systems over randomness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
