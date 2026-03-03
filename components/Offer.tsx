
import React from 'react';
import { Target, Utensils, Zap, CheckCircle, TrendingUp, Clock, Users, Dumbbell } from 'lucide-react';

const OfferItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="flex gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-[#AF630B]/20 hover:shadow-xl hover:shadow-[#AF630B]/5 transition-all duration-300">
    <div className="bg-[#EDEFF7] w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 text-[#AF630B]">
      {icon}
    </div>
    <div className="space-y-1 sm:space-y-2 min-w-0">
      <h3 className="text-lg sm:text-xl font-bold text-[#151819]">{title}</h3>
      <p className="text-gray-500 text-sm sm:text-base leading-[1.6] tracking-normal">{description}</p>
    </div>
  </div>
);

const ValueItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-[#AF630B] shrink-0 mt-0.5" />
    <p className="text-gray-600 text-sm sm:text-base leading-[1.6]">{text}</p>
  </div>
);

const Offer: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#151819] leading-[1.2] tracking-[-0.02em]">The Con Ganas Method</h2>
          <p className="text-[#BCBFCC] text-lg font-light leading-[1.6] tracking-normal">Three pillars. One system. Results through structure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          <OfferItem 
            icon={<Target className="w-7 h-7" />}
            title="Strategic Strength Programming"
            description="Strength as foundation. Progressive programming designed for measurable outcomes and sustainable performance."
          />
          <OfferItem 
            icon={<Utensils className="w-7 h-7" />}
            title="High-Compliance Nutrition"
            description="Structure over restriction. A system built for adherence. Sustainable nutrition that fits your life and delivers results."
          />
          <OfferItem 
            icon={<Zap className="w-7 h-7" />}
            title="Accountability & Measurable Performance Tracking"
            description="Weekly check-ins. Clear benchmarks. Progress is tracked. No guessing. No excuses. Results are measurable."
          />
        </div>

        <div className="pt-8 sm:pt-12 border-t border-gray-100">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 mb-10 sm:mb-14">
            <p className="text-[#AF630B] text-xs sm:text-sm font-black uppercase tracking-[0.3em]">Here's Everything You Get</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#151819] tracking-[-0.01em] leading-[1.2]">16 Weeks of Complete<br className="hidden sm:block" /> Transformation Coaching</h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <ValueItem text="Fully customized strength training program — rebuilt every phase based on your progress" />
            <ValueItem text="Personalized nutrition structure designed around YOUR life, YOUR schedule, YOUR preferences" />
            <ValueItem text="Weekly 1-on-1 accountability check-ins — you never drift off track" />
            <ValueItem text="Direct access to your coach — not a chatbot, not a generic template. A real human who knows your name" />
            <ValueItem text="Progressive performance tracking so you can SEE yourself getting stronger every single week" />
            <ValueItem text="Mindset and habit coaching — because the body follows the mind" />
            <ValueItem text="Full program adjustments as you progress — your plan evolves as YOU evolve" />
          </div>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-gray-100">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#151819] tracking-[-0.01em]">Choose Your Delivery</h3>
            <p className="text-[#BCBFCC] text-base font-light max-w-2xl mx-auto">Both options follow the same 16-week system. Both require application approval.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-[#AF630B]/20 hover:shadow-xl hover:shadow-[#AF630B]/5 transition-all duration-300">
              <span className="text-[#AF630B] text-[10px] font-black uppercase tracking-[0.3em]">Option 1</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#151819]">16-Week Online Performance Coaching</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-[1.6] tracking-normal">Remote coaching with full programming, weekly check-ins, accountability, and measurable tracking. Everything you need — from anywhere in the world.</p>
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                <TrendingUp className="w-4 h-4 text-[#AF630B]" />
                <span className="text-xs font-bold text-[#AF630B] uppercase tracking-wider">Investment discussed on strategy call</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-[#AF630B]/20 hover:shadow-xl hover:shadow-[#AF630B]/5 transition-all duration-300">
              <span className="text-[#AF630B] text-[10px] font-black uppercase tracking-[0.3em]">Option 2</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#151819]">16-Week Private 1:1 Training — West Hollywood</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-[1.6] tracking-normal">In-person training at a private gym. Hands-on coaching, structured progression, and direct accountability. The highest level of the Con Ganas experience.</p>
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                <Dumbbell className="w-4 h-4 text-[#AF630B]" />
                <span className="text-xs font-bold text-[#AF630B] uppercase tracking-wider">Limited private slots available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
