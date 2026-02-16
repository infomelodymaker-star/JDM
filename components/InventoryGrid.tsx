
import React from 'react';
import CarCard from './CarCard';
import { INVENTORY } from '../constants';

const InventoryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-sm block mb-2">Current Stock</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">LATEST ARRIVALS</h2>
          </div>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span>Showing 6 of 124 Vehicles</span>
            <div className="w-12 h-px bg-zinc-800"></div>
            <a href="#" className="text-white font-bold hover:text-red-600 transition-colors">VIEW ALL</a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INVENTORY.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-12 py-5 border border-zinc-800 text-zinc-400 font-bold rounded-xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-sm">
            Load More Vehicles
          </button>
        </div>
      </div>
    </section>
  );
};

export default InventoryGrid;
