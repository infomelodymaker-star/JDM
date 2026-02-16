
import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { MAKES, MODELS, PRICE_RANGES } from '../constants';

const SearchFilter: React.FC = () => {
  return (
    <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 lg:p-6 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Make</label>
            <div className="relative">
              <select className="w-full bg-[#1a1a1a] border border-white/5 text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all">
                {MAKES.map(make => <option key={make} value={make}>{make}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Model</label>
            <div className="relative">
              <select className="w-full bg-[#1a1a1a] border border-white/5 text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all">
                {MODELS.map(model => <option key={model} value={model}>{model}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Min Price</label>
            <div className="relative">
              <select className="w-full bg-[#1a1a1a] border border-white/5 text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all">
                {PRICE_RANGES.map(price => <option key={price} value={price}>{price}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Max Price</label>
            <div className="relative">
              <select className="w-full bg-[#1a1a1a] border border-white/5 text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all">
                {PRICE_RANGES.map(price => <option key={price} value={price}>{price}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Filter size={18} />
              Apply Filters
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
