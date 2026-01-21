
import React from 'react';
import { Search, Crown } from 'lucide-react';

interface HeaderProps {
  onProClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onProClick }) => {
  return (
    <header className="px-6 pt-12 pb-6 sticky top-0 z-20 glass-effect rounded-b-3xl -mx-4 mb-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Parallel <span className="text-[#00F2FF] neon-text-blue">Space</span>
          </h1>
          <button 
            onClick={onProClick}
            className="bg-gradient-to-tr from-[#f4c025] to-[#FFD700] p-1.5 rounded-lg shadow-lg shadow-[#f4c025]/20 animate-pulse active:scale-90 transition-transform"
          >
            <Crown size={14} className="text-black" fill="black" />
          </button>
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
          <img 
            src="https://picsum.photos/seed/profile/100/100" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-zinc-500 group-focus-within:text-[#00F2FF] transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search clones or tools..."
          className="w-full bg-zinc-900/50 border border-zinc-800 text-sm rounded-2xl py-3 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#00F2FF]/50 focus:border-[#00F2FF]/50 transition-all placeholder:text-zinc-600"
        />
      </div>
    </header>
  );
};
