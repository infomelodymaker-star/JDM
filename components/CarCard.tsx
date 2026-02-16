
import React from 'react';
import { ShieldCheck, Gauge, Zap } from 'lucide-react';
import { Vehicle } from '../types';

interface CarCardProps {
  car: Vehicle;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.imageUrl} 
          alt={car.model}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-green-500" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Grade {car.grade}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">{car.year}</p>
            <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
              {car.make} {car.model}
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="flex items-center gap-2 text-zinc-500">
            <Gauge size={16} />
            <span className="text-sm">{car.mileage.toLocaleString()} KM</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Zap size={16} />
            <span className="text-sm truncate">{car.engine}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-widest block">Price</span>
            <span className="text-2xl font-black text-white">${car.price.toLocaleString()}</span>
          </div>
          <button className="bg-white/5 hover:bg-white text-white hover:text-black font-bold px-4 py-2 rounded-lg text-sm transition-all border border-white/10">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
