
import React from 'react';
import { Quote } from 'lucide-react';

const Solution: React.FC = () => {
  const videoUrl = "/1201.mp4";
  const photoUrl = "/ivan-photo.jpeg";

  return (
    <section className="bg-[#EDEFF7] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative group order-2 lg:order-1 space-y-6">
          {/* Mobile Only Photo - Above Video */}
          <div className="block lg:hidden relative flex justify-center">
            <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={photoUrl}
                alt="Ivan Con Ganas Coaching"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-full"></div>
            </div>
          </div>
          
          {/* Video Container */}
          <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
            <video 
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
            />
            
            {/* Soft Overlay for the 'Luxury' Graded Look */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
          
          {/* Floating Aesthetic Quote Card - Hidden on small mobile */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[280px] hidden md:block z-10">
            <Quote className="text-[#AF630B] w-8 h-8 mb-4 fill-[#AF630B]/10" />
            <p className="text-sm text-[#151819] font-semibold leading-[1.6] tracking-normal">
              "My objective is to help you reclaim your energy, structure, and confidence."
            </p>
            <p className="text-[10px] text-[#BCBFCC] mt-2 uppercase tracking-widest font-black">— Ivan, Founder</p>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-[#AF630B] font-black uppercase tracking-[0.4em] text-[10px]">The Ethos</h3>
            <h2 className="text-3xl md:text-5xl font-black text-[#151819] leading-[1.2] tracking-[-0.01em]">
              Hi, I'm Ivan. <br />
              <span className="text-[#AF630B] italic">Welcome to Con Ganas.</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-base md:text-lg text-[#151819]/80 leading-[1.6] tracking-normal">
              <strong className="text-[#AF630B] font-black uppercase tracking-[0.1em]">Con Ganas</strong> means "with desire," "with zeal," and "with intention".
            </p>
            
            <p className="text-base md:text-lg text-[#151819]/80 leading-[1.6] tracking-normal font-light">
              I don't just count your reps. I created Con Ganas Coaching to offer a holistic, mindset-driven approach to fitness. We prioritize accountability and real transformation.
            </p>
            
            <p className="text-base md:text-lg text-[#151819]/80 leading-[1.6] tracking-normal font-light">
              Whether you are a bride to be, a groom, or a busy professional, my objective is to help you reclaim your energy, structure, and confidence through elite discipline.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
             <div className="flex justify-center lg:justify-start gap-8 md:gap-12">
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#151819]">100%</p>
                  <p className="text-[9px] text-[#BCBFCC] uppercase font-black tracking-[0.2em]">Bespoke</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#151819]">24/7</p>
                  <p className="text-[9px] text-[#BCBFCC] uppercase font-black tracking-[0.2em]">Support</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#151819]">1-1</p>
                  <p className="text-[9px] text-[#BCBFCC] uppercase font-black tracking-[0.2em]">Focus</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
