
import React from 'react';
import { Play } from 'lucide-react';

interface AdBannerProps {
  onSupportClick?: () => void;
}

export const AdBanner: React.FC<AdBannerProps> = ({ onSupportClick }) => {
  return (
    <div 
      onClick={onSupportClick}
      className="relative w-full h-24 rounded-2xl overflow-hidden mb-8 border border-zinc-800 group cursor-pointer transition-transform active:scale-[0.98]"
    >
      <img 
        src="https://picsum.photos/seed/gamead/600/200" 
        alt="Ad" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.5] transition-all"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-6 justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded-full w-fit mb-1 border border-zinc-700 uppercase tracking-tighter">Sponsored</span>
          <h3 className="text-white font-bold text-sm">Boost Rewards x2</h3>
          <p className="text-zinc-400 text-xs">Watch a short video to support development</p>
        </div>
        <button 
          className="bg-[#00F2FF] text-black px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-lg shadow-[#00F2FF]/30 active:translate-y-0.5 transition-all"
        >
          <Play size={12} fill="black" />
          <span>Watch</span>
        </button>
      </div>
    </div>
  );
};
