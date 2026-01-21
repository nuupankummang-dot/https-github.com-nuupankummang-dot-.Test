
import React from 'react';

interface SupportProps {
  onBack: () => void;
}

export const Support: React.FC<SupportProps> = ({ onBack }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto overflow-hidden bg-[#181611] font-['Inter']">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-[#FF007F]/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#f4c025]/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="sticky top-0 z-50 glass-panel border-b border-white/5">
        <div className="flex items-center p-4 justify-between">
          <button 
            onClick={onBack}
            className="text-white/80 hover:text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Support Us</h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 pt-6 pb-24 z-10 space-y-6">
        {/* Hero Icon */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#FF007F]/30 blur-xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative flex items-center justify-center size-20 bg-gradient-to-br from-[#2a261c] to-[#181611] rounded-full border border-white/10 shadow-lg">
            <span className="material-symbols-outlined text-[#FF007F] animate-pulse" style={{ fontSize: '40px', fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>favorite</span>
          </div>
        </div>

        {/* The Ask Card */}
        <div className="w-full glass-panel rounded-2xl p-0 overflow-hidden shadow-lg border border-white/5">
          <div 
            className="relative h-[180px] w-full bg-cover bg-center" 
            style={{ 
              backgroundImage: 'linear-gradient(0deg, rgba(24, 22, 17, 1) 0%, rgba(24, 22, 17, 0.4) 50%, rgba(24, 22, 17, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxZafIUCRXp8CqXT5vb9PfeLyCrrgdqIup03S_khu34Awxe8RSMViHKRjkt2u2PiwbdZZlEmPo1PBvaqPvf_MVkEa9Ii8TtZDmXI8WShhqiWbVppWR4Sj7YTZlipDRuT_XIpGp1oCA_fiSsav65BcaRyecpyppXZ986nxmA51xQZi2XFUf3Iy2F64U_tqWN7xZdzx23M6v45f1eF5f6KiZLr1lg671XHMhh_dY3zk5xHqNorNMmieKDgm5hgs5rcB6k8zVI3dnJ1g")' 
            }}
          >
            <div className="absolute bottom-0 left-0 w-full p-5 pt-12">
              <h1 className="text-white text-2xl font-bold leading-tight mb-2">Keep it free for everyone</h1>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                Love our app? Help us cover server costs by watching a quick video ad. Every view counts!
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full">
          <button className="group relative w-full flex items-center justify-center gap-3 h-14 bg-[#f4c025] hover:bg-[#ffcd38] active:scale-[0.98] transition-all duration-200 rounded-xl shadow-[0_0_20px_rgba(244,192,37,0.3)] overflow-hidden">
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
            <span className="material-symbols-outlined text-[#181611] z-20" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            <span className="text-[#181611] text-lg font-bold tracking-wide z-20">Watch Ad to Support</span>
          </button>
          <p className="text-center text-xs text-white/40 mt-3 font-medium uppercase tracking-widest">Takes ~30 Seconds</p>
        </div>

        {/* Community Tracker */}
        <div className="w-full glass-panel rounded-xl p-5 border border-white/5">
          <div className="flex justify-between items-end mb-3">
            <div className="flex flex-col">
              <span className="text-white font-semibold text-base">Community Goal</span>
              <span className="text-xs text-white/50">Help us reach 1.5M views!</span>
            </div>
            <span className="text-[#f4c025] font-bold text-lg font-mono">1.2M</span>
          </div>
          <div className="relative h-3 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 bg-[#f4c025] h-full rounded-full flex items-center" style={{ width: '85%' }}>
              <div className="w-full h-full opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.2) 5px, rgba(0,0,0,0.2) 10px)' }}></div>
            </div>
            <div className="absolute top-0 bottom-0 w-2 bg-white/50 blur-[4px]" style={{ left: 'calc(85% - 4px)' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-white/30 uppercase font-bold tracking-wider">
            <span>0</span>
            <span>Target: 1.5M</span>
          </div>
        </div>

        {/* Perks */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-[#f4c025]" style={{ fontSize: '18px' }}>stars</span>
            <h3 className="text-white/90 text-sm font-bold uppercase tracking-wider">Supporter Perks</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors cursor-default border border-white/5">
              <div className="size-10 rounded-full bg-gradient-to-tr from-[#FF007F] to-purple-600 flex items-center justify-center shadow-lg mb-1">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>military_tech</span>
              </div>
              <h4 className="text-white text-sm font-bold">Supporter Badge</h4>
              <p className="text-[10px] text-white/50 leading-tight">Show off your support on your profile.</p>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 transition-colors cursor-default border border-white/5">
              <div className="size-10 rounded-full bg-gradient-to-tr from-[#f4c025] to-orange-500 flex items-center justify-center shadow-lg mb-1">
                <span className="material-symbols-outlined text-[#181611]" style={{ fontSize: '20px' }}>rocket_launch</span>
              </div>
              <h4 className="text-white text-sm font-bold">Early Access</h4>
              <p className="text-[10px] text-white/50 leading-tight">Test new cloning features first.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
