
import React from 'react';

interface DailyLimitReachedProps {
  onBack: () => void;
}

export const DailyLimitReached: React.FC<DailyLimitReachedProps> = ({ onBack }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between bg-[#0f230f] text-white font-['Inter'] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-[#06f906]/10 via-transparent to-transparent pointer-events-none opacity-50"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#06f906]/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-end p-6">
        <button 
          onClick={onBack}
          className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/80"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-6 w-full max-w-md mx-auto">
        {/* Hero Visual */}
        <div className="relative mb-8 group">
          {/* Glowing Ring */}
          <div className="relative flex size-40 items-center justify-center rounded-full border-4 border-[#06f906]/30 bg-[#0f230f]/80 animate-pulse-glow-green">
            {/* Inner Content */}
            <div className="flex flex-col items-center justify-center gap-1 z-10">
              <span className="material-symbols-outlined text-[#06f906] text-[64px] animate-draw" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>check_circle</span>
              <span className="text-3xl font-bold text-white tracking-tight">3<span className="text-white/50">/</span>3</span>
            </div>
            {/* Progress Ring Overlay (100%) */}
            <svg className="absolute inset-0 -rotate-90 size-full" viewBox="0 0 100 100">
              <circle className="text-transparent" cx="50" cy="50" fill="transparent" r="46" strokeWidth="4"></circle>
              <circle className="text-[#06f906] drop-shadow-[0_0_8px_rgba(6,249,6,0.8)]" cx="50" cy="50" fill="transparent" r="46" strokeDasharray="289" strokeDashoffset="0" strokeLinecap="round" strokeWidth="4"></circle>
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 leading-tight">
          Today's Goal<br/><span className="text-[#06f906]">Reached!</span>
        </h1>

        {/* Body Text */}
        <p className="text-zinc-400 text-center text-base leading-relaxed max-w-[320px] mb-8">
          You've watched all 3 daily ads and unlocked full access to your cloned apps until tomorrow.
        </p>

        {/* Progress Bar Section */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-end mb-2 px-1">
            <span className="text-sm font-medium text-white">Daily Progress</span>
            <span className="text-sm font-bold text-[#06f906]">100%</span>
          </div>
          <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#06f906] rounded-full shadow-[0_0_12px_rgba(6,249,6,0.5)] w-full"></div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="glass-panel w-full rounded-xl p-4 flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06f906] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06f906]"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Current Status</span>
              <span className="text-sm font-bold text-white">All Clones Active</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#06f906]" style={{ fontSize: '20px' }}>verified_user</span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="relative z-10 w-full px-6 pb-8 pt-4 bg-gradient-to-t from-[#0f230f] via-[#0f230f] to-transparent">
        <button 
          onClick={onBack}
          className="w-full h-14 bg-[#06f906] hover:bg-[#05d905] active:scale-[0.98] transition-all rounded-xl flex items-center justify-center gap-2 mb-4 group shadow-[0_0_20px_rgba(6,249,6,0.15)] hover:shadow-[0_0_30px_rgba(6,249,6,0.3)]"
        >
          <span className="material-symbols-outlined text-black group-hover:-translate-x-1 transition-transform" style={{ fontSize: '24px' }}>arrow_back</span>
          <span className="text-black font-bold text-lg">Back to Dashboard</span>
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 group">
          <span className="material-symbols-outlined text-white/40 group-hover:text-[#06f906] transition-colors" style={{ fontSize: '20px' }}>diamond</span>
          <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Upgrade to Remove Ads Permanently</span>
        </button>
      </div>
    </div>
  );
};
