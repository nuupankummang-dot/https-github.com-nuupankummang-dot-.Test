
import React, { useState } from 'react';

interface SecuritySettingsProps {
  onBack: () => void;
}

interface LockState {
  appLock: boolean;
  pubg: boolean;
  roblox: boolean;
  instagram: boolean;
}

export const SecuritySettings: React.FC<SecuritySettingsProps> = ({ onBack }) => {
  const [locks, setLocks] = useState<LockState>({
    appLock: true,
    pubg: true,
    roblox: false,
    instagram: true,
  });

  const toggleLock = (key: keyof LockState) => {
    setLocks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 w-full flex flex-col bg-[#101622] text-white font-['Space_Grotesk'] antialiased min-h-screen">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 flex items-center bg-[#101622]/80 backdrop-blur-md p-4 pt-12 pb-2 justify-between border-b border-white/5">
        <button 
          onClick={onBack}
          className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/5 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Security Settings</h2>
        <button onClick={onBack} className="flex w-12 items-center justify-center active:scale-95 transition-transform">
          <p className="text-[#135bec] text-base font-bold leading-normal tracking-wide shrink-0">Done</p>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar">
        {/* Hero / Face ID Visual */}
        <div className="flex flex-col items-center justify-center pt-8 pb-8 px-6">
          <div className="relative flex items-center justify-center size-32 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 shadow-2xl overflow-hidden group">
            {/* Scan line visual */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-[#135bec] shadow-[0_0_15px_3px_rgba(19,91,236,0.6)] z-10 opacity-80 animate-pulse"></div>
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#135bec]/20 to-transparent z-0"></div>
            <span className="material-symbols-outlined text-6xl text-white/90 z-0">face_unlock</span>
            
            {/* Tech accents */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-[#135bec] rounded-tl-sm"></div>
            <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-[#135bec] rounded-tr-sm"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-[#135bec] rounded-bl-sm"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-[#135bec] rounded-br-sm"></div>
          </div>
          <p className="mt-6 text-slate-400 text-sm font-medium text-center max-w-xs font-['Noto_Sans']">
            Face ID is active and monitoring app access requests.
          </p>
        </div>

        {/* Global Security Section */}
        <div className="px-4 mb-2">
          <div className="bg-[#1C222F] rounded-xl overflow-hidden shadow-sm border border-white/5">
            <div className="flex items-center gap-4 px-4 py-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#135bec]/10 text-[#135bec] flex items-center justify-center rounded-lg shrink-0 size-10">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-semibold leading-normal">App Lock</p>
                  <p className="text-slate-400 text-xs font-normal leading-normal font-['Noto_Sans']">Require Face ID to open the cloner.</p>
                </div>
              </div>
              <div className="shrink-0">
                <label className="relative flex h-[30px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-700 p-0.5 transition-colors duration-200" style={{ backgroundColor: locks.appLock ? '#135bec' : '#334155' }}>
                  <div 
                    className={`h-[26px] w-[26px] rounded-full bg-white shadow-sm transform transition-transform duration-200 ${locks.appLock ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={locks.appLock} 
                    onChange={() => toggleLock('appLock')} 
                  />
                </label>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-xs font-normal leading-normal pt-2 px-1 font-['Noto_Sans']">
            Secure your cloned accounts using biometric authentication.
          </p>
        </div>

        {/* Section Header */}
        <div className="mt-6 px-4 pb-2">
          <h3 className="text-white text-sm font-bold uppercase tracking-wider opacity-80">Protect Specific Clones</h3>
        </div>

        {/* Cloned Apps List */}
        <div className="px-4 pb-8 space-y-3">
          {/* PUBG Item */}
          <div className="bg-[#1C222F]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-white/5">
            <div className="flex items-center gap-4 px-4 py-3 justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-cover bg-center shrink-0 border border-white/10" style={{backgroundImage: 'url("https://picsum.photos/seed/pubg/100/100")'}}></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal">PUBG Mobile</p>
                  <p className="text-slate-400 text-xs font-normal font-['Noto_Sans']">Clone 1 • ID: 882910</p>
                </div>
              </div>
              <div className="shrink-0">
                <label className="relative flex h-[30px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-700 p-0.5 transition-colors duration-200" style={{ backgroundColor: locks.pubg ? '#135bec' : '#334155' }}>
                  <div className={`h-[26px] w-[26px] rounded-full bg-white shadow-sm transform transition-transform duration-200 ${locks.pubg ? 'translate-x-5' : 'translate-x-0'}`} />
                  <input type="checkbox" className="sr-only" checked={locks.pubg} onChange={() => toggleLock('pubg')} />
                </label>
              </div>
            </div>
          </div>

          {/* Roblox Item */}
          <div className="bg-[#1C222F]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-white/5">
            <div className="flex items-center gap-4 px-4 py-3 justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-cover bg-center shrink-0 border border-white/10" style={{backgroundImage: 'url("https://picsum.photos/seed/roblox/100/100")'}}></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal">Roblox (Alt)</p>
                  <p className="text-slate-400 text-xs font-normal font-['Noto_Sans']">Clone 2 • Europe Server</p>
                </div>
              </div>
              <div className="shrink-0">
                <label className="relative flex h-[30px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-700 p-0.5 transition-colors duration-200" style={{ backgroundColor: locks.roblox ? '#135bec' : '#334155' }}>
                  <div className={`h-[26px] w-[26px] rounded-full bg-white shadow-sm transform transition-transform duration-200 ${locks.roblox ? 'translate-x-5' : 'translate-x-0'}`} />
                  <input type="checkbox" className="sr-only" checked={locks.roblox} onChange={() => toggleLock('roblox')} />
                </label>
              </div>
            </div>
          </div>

          {/* Instagram Item */}
          <div className="bg-[#1C222F]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-white/5">
            <div className="flex items-center gap-4 px-4 py-3 justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-cover bg-center shrink-0 border border-white/10" style={{backgroundImage: 'url("https://picsum.photos/seed/instagram/100/100")'}}></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal">Instagram</p>
                  <p className="text-slate-400 text-xs font-normal font-['Noto_Sans']">Business • @store_official</p>
                </div>
              </div>
              <div className="shrink-0">
                <label className="relative flex h-[30px] w-[50px] cursor-pointer items-center rounded-full border-none bg-slate-700 p-0.5 transition-colors duration-200" style={{ backgroundColor: locks.instagram ? '#135bec' : '#334155' }}>
                  <div className={`h-[26px] w-[26px] rounded-full bg-white shadow-sm transform transition-transform duration-200 ${locks.instagram ? 'translate-x-5' : 'translate-x-0'}`} />
                  <input type="checkbox" className="sr-only" checked={locks.instagram} onChange={() => toggleLock('instagram')} />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-auto pb-8 px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-2">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span className="text-xs font-medium uppercase tracking-wide">Privacy Protected</span>
          </div>
          <p className="text-[10px] text-slate-600 leading-relaxed max-w-xs mx-auto font-['Noto_Sans']">
            Biometric data is processed locally by iOS Secure Enclave and is never shared with the cloned applications.
          </p>
        </div>
      </main>
    </div>
  );
};
