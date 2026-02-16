
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Vehicle3D from './Vehicle3D';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-44 min-h-[90vh] flex items-center bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="z-10 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-6">
              YOUR DREAM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">JDM AWAITS</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Experience the pinnacle of Japanese automotive engineering. Hand-selected, meticulously inspected, and delivered worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all group">
                Browse Inventory
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all">
                Learn More
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">450+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Cars Sold</span>
              </div>
              <div className="w-px h-8 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">15</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Countries Served</span>
              </div>
              <div className="w-px h-8 bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">4.9/5</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Customer Rating</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] cursor-grab active:cursor-grabbing">
            <Vehicle3D />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
