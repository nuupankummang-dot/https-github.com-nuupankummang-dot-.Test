
import React from 'react';
import { CLONED_APPS } from '../constants.tsx';
import { ClonedApp } from '../types';

interface AppItemProps {
  app: ClonedApp;
}

const AppItem: React.FC<AppItemProps> = ({ app }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer active:scale-95 transition-all">
      <div className="relative w-full aspect-square bg-zinc-900 rounded-[2rem] p-4 border border-zinc-800 mb-3 shadow-lg group-hover:border-zinc-700 transition-colors">
        {/* Glow effect */}
        <div 
          className="absolute inset-4 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: app.themeColor }}
        />
        
        <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/5">
          <img 
            src={app.icon} 
            alt={app.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-2 right-2 flex items-center space-x-1">
          <span 
            className="w-2 h-2 rounded-full animate-pulse shadow-sm"
            style={{ backgroundColor: app.id === '2' || app.id === '1' ? '#39FF14' : '#555', boxShadow: app.id === '2' || app.id === '1' ? '0 0 6px #39FF14' : 'none' }}
          />
        </div>

        {/* Label Badge */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-zinc-800 min-w-[60px] text-center shadow-xl">
          <span className="text-[10px] font-bold text-white uppercase tracking-tight whitespace-nowrap">{app.label}</span>
        </div>
      </div>
      <h4 className="text-white text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">{app.name}</h4>
    </div>
  );
};

export const AppGrid: React.FC = () => {
  return (
    <div className="pb-32">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <span>My Clones</span>
          <span className="text-[10px] bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full">{CLONED_APPS.length}</span>
        </h2>
        <button className="text-[#00F2FF] text-xs font-semibold hover:opacity-80 transition-opacity">Manage All</button>
      </div>
      
      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
        {CLONED_APPS.map((app) => (
          <AppItem key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};
