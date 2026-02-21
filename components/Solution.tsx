
import React from 'react';
import { Quote } from 'lucide-react';

const Solution: React.FC = () => {
  const videoUrl = "/1201.mp4";
  const photoUrl = "/ivan-photo.jpeg";

  return (
    <section className="bg-[#EDEFF7] py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
        <div className="relative group order-2 lg:order-1 space-y-6">
          {/* Mobile Only Photo - Above Video */}
          <div className="block lg:hidden relative flex justify-center">
            <div className="w-36 h-36 sm:w-48 sm:h-48 bg-gray-200 rounded-full overflow-hidden shadow-2xl border-4 border-white shrink-0">
              <img 
                src={photoUrl}
                alt="Ivan Con Ganas Coaching"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-full"></div>
            </div>
          </div>
          
          {/* Video Container */}
          <div className="aspect-[4/5] bg-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-700">
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
          
          {/* Quote Card - Inline on mobile, floating on desktop */}
          <div className="mt-6 md:mt-0 md:absolute md:-bottom-6 md:-right-6 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-[280px] md:max-w-[280px] z-10">
            <Quote className="text-[#AF630B] w-8 h-8 mb-4 fill-[#AF630B]/10" />
            <p className="text-sm text-[#151819] font-semibold leading-[1.6] tracking-normal">
              Structure creates results. Discipline creates change. You bring commitment. We bring the system.
            </p>
            <p className="text-[10px] text-[#BCBFCC] mt-2 uppercase tracking-widest font-black">— Ivan, Founder</p>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-[#AF630B] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px]">The Method</h3>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#151819] leading-[1.2] tracking-[-0.02em]">
              Hi, I'm Ivan. <br />
              <span className="text-[#AF630B] italic">The Con Ganas Method.</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-base md:text-lg text-[#151819]/80 leading-[1.6] tracking-normal">
              <strong className="text-[#AF630B] font-black uppercase tracking-[0.1em]">Con Ganas</strong> is a 16-week performance coaching system built on structure, not hope.
            </p>
            
            <p className="text-base md:text-lg text-[#151819]/80 leading-[1.6] tracking-normal font-light">
              Strength as foundation. Measurable progress. Selective intake. Professional standards. Results are inevitable when the system is applied with commitment.
            </p>
            
            <p className="text-base md:text-lg text-[#151819]/80 leading-[1.6] tracking-normal font-light">
              Both delivery options — online or 1:1 in West Hollywood — follow the same 16-week system. Both require application approval. No exceptions.
            </p>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-200">
             <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12 flex-wrap">
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#151819]">16</p>
                  <p className="text-[9px] text-[#BCBFCC] uppercase font-black tracking-[0.2em]">Weeks</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#151819]">3</p>
                  <p className="text-[9px] text-[#BCBFCC] uppercase font-black tracking-[0.2em]">Pillars</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#151819]">1</p>
                  <p className="text-[9px] text-[#BCBFCC] uppercase font-black tracking-[0.2em]">System</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
