
import React from 'react';
import { Target, Utensils, Zap, Brain } from 'lucide-react';

const OfferItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="flex gap-6 p-8 rounded-3xl border border-gray-100 hover:border-[#AF630B]/20 hover:shadow-xl hover:shadow-[#AF630B]/5 transition-all duration-300">
    <div className="bg-[#EDEFF7] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[#AF630B]">
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-[#151819]">{title}</h3>
      <p className="text-gray-500 leading-[1.6] tracking-normal">{description}</p>
    </div>
  </div>
);

const Offer: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#151819] leading-[1.2] tracking-[-0.01em]">More Than Just A Workout Plan.</h2>
          <p className="text-[#BCBFCC] text-lg font-light leading-[1.6] tracking-normal">The pillars of a luxury transformation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OfferItem 
            icon={<Target className="w-7 h-7" />}
            title="Bespoke Training Structure"
            description="No cookie-cutter PDFs. A personalized roadmap designed for your body and your schedule to achieve peak physical fitness."
          />
          <OfferItem 
            icon={<Utensils className="w-7 h-7" />}
            title="Purpose-Driven Nutrition"
            description="Learn to eat with purpose, heart, and discipline. Sustainable change that fits your lifestyle, not just a diet."
          />
          <OfferItem 
            icon={<Zap className="w-7 h-7" />}
            title="Unwavering Accountability"
            description="Weekly check-ins and support. I am committed to fostering a supportive community where your journey is celebrated."
          />
          <OfferItem 
            icon={<Brain className="w-7 h-7" />}
            title="Mindset Calibration"
            description="We sculpt empowered mindsets, not just bodies. We build the discipline required to succeed in every aspect of your life."
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
