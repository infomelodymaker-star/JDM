
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import InventoryGrid from './components/InventoryGrid';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <SearchFilter />
        <InventoryGrid />
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-600/5 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-[#121212] border border-white/10 p-12 lg:p-20 rounded-[3rem] text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                CAN'T FIND WHAT <br />
                <span className="text-red-600">YOU'RE LOOKING FOR?</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
                Our network in Japan allows us to source specific vehicles directly from auction or private collectors. Let us find your perfect JDM machine.
              </p>
              <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-red-600 hover:text-white transition-all">
                Request Custom Search
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-sm transform rotate-45"></div>
                <span className="text-2xl font-black tracking-tighter text-white">JDM<span className="text-red-600">ELITE</span></span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-8">
                The world's premier destination for high-grade Japanese imports. Quality without compromise, from the ports of Yokohama to your driveway.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">QUICK LINKS</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-red-600 transition-colors">Showroom</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">How to Import</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Auction Grade Guide</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">FOLLOW US</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-red-600 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
            <p className="text-zinc-600 text-xs">© 2024 JDM Elite Imports. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-zinc-600">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
