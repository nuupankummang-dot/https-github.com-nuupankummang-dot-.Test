
import React from 'react';

interface LockScreenProps {
  onBack: () => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({ onBack }) => {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden font-['Inter'] select-none">
      {/* Background Wallpaper */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvGrtOi2SxUEPwJPNYoOSEpEkQhAJVv0rLfkzlvfoKFlLNRYLaEljU7ZTtNeeK9EisovXiSJBlXjJgBs_MKvd8WbVTbAn9n4h084T9oMuIpx43bO0wwRnwTwM7OpQLpxthzp83-k5g6SXHG4DIdfUcQnQ8eHCKGdy3YPVX1Kx-Sb2PYc6g5cBdeKkxwjq47UeRgAcBWi206M4pMNL_ctxSksBT2ukWZA2P38BB1R_c_BphhDd8tb7w3slutRICv9OkH2F_h2wUnEw')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-md mx-auto" onClick={onBack}>
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 py-2 pt-10 text-xs font-medium tracking-wide text-white">
          <span className="text-shadow-sm">09:41</span>
          <div className="flex items-center gap-1.5 drop-shadow-md">
            <span className="material-symbols-outlined text-[18px]">signal_cellular_alt</span>
            <span className="material-symbols-outlined text-[18px]">wifi</span>
            <span className="material-symbols-outlined text-[18px]">battery_full</span>
          </div>
        </div>

        {/* Lock Symbol */}
        <div className="flex justify-center mt-2 opacity-80 drop-shadow-md">
          <span className="material-symbols-outlined text-[20px]">lock</span>
        </div>

        {/* Clock & Date Header */}
        <div className="flex flex-col items-center mt-4 mb-2 text-white">
          <h2 className="text-xl font-medium tracking-wide mb-0 text-shadow-sm opacity-90">Tuesday, September 12</h2>
          <h1 className="text-[5.5rem] leading-[1] font-bold tracking-tight text-white/95 text-shadow-lg">09:41</h1>
        </div>

        {/* Notification Stack Area */}
        <div className="flex-1 flex flex-col justify-end px-3 pb-6 space-y-2 overflow-y-auto no-scrollbar">
          {/* Notification Card 3: Facebook */}
          <div className="glass-panel rounded-2xl p-3.5 transform scale-[0.94] translate-y-2 opacity-60 transition-all duration-300 origin-bottom">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <div className="w-full h-full bg-[#1877F2] rounded-[5px] flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-[14px] leading-none lowercase">f</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1.5 bg-blue-300 text-blue-900 border border-black/20 text-[7px] font-bold h-3.5 min-w-[14px] px-0.5 rounded-full flex items-center justify-center shadow-sm z-10">W</div>
                </div>
                <span className="text-[13px] font-medium text-white/90">Facebook</span>
              </div>
              <span className="text-[11px] text-white/60">15m ago</span>
            </div>
            <div className="pl-0">
              <p className="text-[14px] font-semibold text-white/95 leading-tight mb-0.5">New message from Boss</p>
              <p className="text-[14px] text-white/80 leading-tight">Hey, did you finish the Q3 cloning report? Need it ASAP.</p>
            </div>
          </div>

          {/* Notification Card 2: Genshin Alt */}
          <div className="glass-panel rounded-2xl p-3.5 transform scale-[0.97] translate-y-1 opacity-80 transition-all duration-300 origin-bottom">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <div className="w-full h-full rounded-[5px] overflow-hidden bg-white">
                    <img className="w-full h-full object-cover" src="https://picsum.photos/seed/genshin/50/50" alt="Icon" />
                  </div>
                  <div className="absolute -bottom-1 -right-1.5 bg-gray-300 text-gray-900 border border-black/20 text-[7px] font-bold h-3.5 min-w-[14px] px-0.5 rounded-full flex items-center justify-center shadow-sm z-10">2</div>
                </div>
                <span className="text-[13px] font-medium text-white/90">Genshin Impact</span>
              </div>
              <span className="text-[11px] text-white/60">2m ago</span>
            </div>
            <div className="pl-0">
              <p className="text-[14px] font-semibold text-white/95 leading-tight mb-0.5">Daily commissions reset</p>
              <p className="text-[14px] text-white/80 leading-tight">Your daily commissions are ready! Claim your Primogems now.</p>
            </div>
          </div>

          {/* Notification Card 1: Genshin Main */}
          <div className="glass-panel rounded-2xl p-3.5 shadow-lg relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#06f906]/60 blur-[2px]"></div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <div className="w-full h-full rounded-[5px] overflow-hidden bg-white shadow-sm">
                    <img className="w-full h-full object-cover" src="https://picsum.photos/seed/genshin/50/50" alt="Icon" />
                  </div>
                  <div className="absolute -bottom-1 -right-1.5 bg-[#06f906] text-black border border-black/20 text-[7px] font-bold h-3.5 min-w-[14px] px-0.5 rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(6,249,6,0.5)] z-10">1</div>
                </div>
                <span className="text-[13px] font-medium text-white/90">Genshin Impact</span>
              </div>
              <span className="text-[11px] text-white/60">now</span>
            </div>
            <div className="pl-0">
              <p className="text-[14px] font-semibold text-white/95 leading-tight mb-0.5">Your resin is full!</p>
              <p className="text-[14px] text-white/80 leading-tight">Traveler, your resin is capped at 160/160. Log in to Main Account to spend it.</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mb-6 px-8 flex justify-between items-end w-full relative z-20">
          <button className="w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/30 transition shadow-lg">
            <span className="material-symbols-outlined text-[26px]">flashlight_on</span>
          </button>
          <div className="flex flex-col items-center justify-end h-[50px] pb-1">
            <p className="text-[13px] font-medium text-white/70 mb-3 tracking-wide animate-pulse">Swipe up to open</p>
            <div className="w-[130px] h-[5px] bg-white rounded-full shadow-md"></div>
          </div>
          <button className="w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/30 transition shadow-lg">
            <span className="material-symbols-outlined text-[26px]">photo_camera</span>
          </button>
        </div>
      </div>
    </div>
  );
};
