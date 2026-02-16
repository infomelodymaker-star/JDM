
import React from 'react';
import { Menu, Search, User, ShoppingBag } from 'lucide-react';
import logo from '.../BackgroundEraser_20260215_220037726.png'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-sm transform rotate-45"></div>
              <img src={logo} alt=""/>
              {/* <span className="text-2xl font-black tracking-tighter text-white">JDM<span className="text-red-600">ELITE</span></span> */}
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">INVENTORY</a>
              <a href="#" className="hover:text-white transition-colors">AUCTIONS</a>
              <a href="#" className="hover:text-white transition-colors">LOGISTICS</a>
              <a href="#" className="hover:text-white transition-colors">ABOUT</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-400 hover:text-white"><Search size={20} /></button>
            <button className="p-2 text-zinc-400 hover:text-white"><User size={20} /></button>
            <button className="hidden sm:flex p-2 text-zinc-400 hover:text-white"><ShoppingBag size={20} /></button>
            <button className="md:hidden p-2 text-zinc-400 hover:text-white"><Menu size={24} /></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
