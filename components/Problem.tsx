
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#151819] leading-[1.2] tracking-[-0.01em]">The Problem with January 1st</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-8 rounded-2xl bg-[#EDEFF7]/50 hover:bg-[#EDEFF7] transition-colors border border-transparent hover:border-[#BCBFCC]/30">
            <span className="text-4xl font-bold text-[#AF630B]/20">01</span>
            <p className="text-[#151819] font-medium leading-[1.6] tracking-normal">
              Every year, millions of busy professionals pledge to change. They buy the membership.
            </p>
          </div>
          <div className="space-y-4 p-8 rounded-2xl bg-[#EDEFF7]/50 hover:bg-[#EDEFF7] transition-colors border border-transparent hover:border-[#BCBFCC]/30">
            <span className="text-4xl font-bold text-[#AF630B]/20">02</span>
            <p className="text-[#151819] font-medium leading-[1.6] tracking-normal">
              They starve themselves for two weeks. But by February, life gets in the way. 
            </p>
          </div>
          <div className="space-y-4 p-8 rounded-2xl bg-[#EDEFF7]/50 hover:bg-[#EDEFF7] transition-colors border border-transparent hover:border-[#BCBFCC]/30">
            <span className="text-4xl font-bold text-[#AF630B]/20">03</span>
            <p className="text-[#151819] font-medium leading-[1.6] tracking-normal">
              The energy fades. The structure collapses. Resolutions are just wishes without a core.
            </p>
          </div>
        </div>

        <div className="pt-8 max-w-2xl mx-auto">
          <p className="text-xl text-[#151819]/70 leading-[1.6] tracking-normal italic">
            "Why? Because they chased a 'fitness plan' without the mindset. They sought a quick fix rather than sustainable change."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
