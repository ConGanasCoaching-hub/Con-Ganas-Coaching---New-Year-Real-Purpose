
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  { id: '1', url: 'https://lh3.googleusercontent.com/d/18RqpmT4afKvGoyCH4U7GuU2b6bdlvmrV', tag: 'DEDICATION' },
  { id: '2', url: 'https://lh3.googleusercontent.com/d/1ZV-pSNWs_RyIcQkTsowLOisq95Tw0TOF', tag: 'TRANSFORMATION' },
  { id: 'new-1', url: 'https://lh3.googleusercontent.com/d/1t8jASPftaDw-jHeBnr1AmhpN5f8lPW4W', tag: 'ELEVATED' },
  { id: '3', url: 'https://lh3.googleusercontent.com/d/1w744F9O4IpkSdlsRr894o56MH1ndDMOL', tag: 'DISCIPLINE' },
  { id: '4', url: 'https://lh3.googleusercontent.com/d/1IR8tdGP_hxb2wsrS8g6nr_8FCgks2mR5', tag: 'PURPOSE' },
  { id: '5', url: 'https://lh3.googleusercontent.com/d/1q1zkM2WfB0Or1epf-r50QtajKdnxa-K2', tag: 'RECLAIMED' },
  { id: '6', url: 'https://lh3.googleusercontent.com/d/1CHF1IC6EU9Pb9wzA1vO08ROhQxFauYxc', tag: 'GRIT' },
  { id: '7', url: 'https://lh3.googleusercontent.com/d/175ixRL10MMglGWrvNq0JcLTQ39oyNr56', tag: 'STRENGTH' },
];

const ClientCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= clients.length - visibleCount ? 0 : prev + 1));
  }, [visibleCount]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? clients.length - visibleCount : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-[#AF630B]/10 rounded-md">
            <span className="text-[#AF630B] text-[10px] font-black tracking-widest uppercase">The Results</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#151819] leading-[1.2] tracking-[-0.01em]">The Proof of Purpose.</h2>
          <p className="text-[#BCBFCC] max-w-md mx-auto md:mx-0 font-light italic leading-[1.6] tracking-normal">Real people, the same mission: To transform with Con Ganas.</p>
        </div>
        
        <div className="flex gap-4 justify-center md:justify-end">
          <button 
            onClick={prevSlide}
            className="p-3 md:p-4 rounded-full border border-gray-200 hover:bg-[#151819] hover:text-white transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 md:p-4 rounded-full border border-gray-200 hover:bg-[#151819] hover:text-white transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      <div className="relative group px-4 overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out gap-4 md:gap-6" 
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="flex-shrink-0 relative overflow-hidden rounded-3xl group/card shadow-lg bg-gray-100 aspect-[3/4]"
              style={{ width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)` }}
            >
              <img 
                src={client.url} 
                alt="Client Transformation" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover/card:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white text-[9px] font-black tracking-[0.4em] uppercase">
                  {client.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
