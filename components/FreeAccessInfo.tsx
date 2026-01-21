
import React from 'react';

interface FreeAccessInfoProps {
  onClose: () => void;
  onWatchAd?: () => void;
}

export const FreeAccessInfo: React.FC<FreeAccessInfoProps> = ({ onClose, onWatchAd }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#181611] text-white font-['Inter']">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[600px] purple-gradient-overlay pointer-events-none z-0"></div>

      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-4 pt-4 pb-2 backdrop-blur-sm">
        <button 
          onClick={onClose}
          className="flex size-10 items-center justify-center rounded-full text-white/70 hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <div className="size-10"></div>
      </div>

      <main className="relative z-10 flex flex-1 flex-col px-6 pb-32">
        <div className="flex flex-col items-center pt-4 pb-8 text-center">
          <div className="relative mb-6 flex size-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#f4c025]/20 to-[#9333ea]/20 shadow-[0_0_40px_-10px_rgba(244,192,37,0.3)]">
            <span className="material-symbols-outlined text-[#f4c025] text-[48px] drop-shadow-lg">lock_open</span>
            <span className="material-symbols-outlined absolute -top-1 -right-1 text-[#f4c025] animate-pulse text-[20px]">spark</span>
            <span className="material-symbols-outlined absolute bottom-1 -left-1 text-purple-400 animate-pulse delay-150 text-[16px]">spark</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Unlock All Features for Free</h1>
          <p className="text-white/60 text-base font-medium leading-relaxed max-w-[280px]">
            We've transitioned to a fully free model supported by ads.
          </p>
        </div>

        {/* Feature List */}
        <div className="mb-10 flex flex-col gap-4 pl-4">
          {[
            'Zero Ads (After Unlock)',
            'Unlimited App Clones',
            'Priority 24/7 Support',
            'Exclusive App Icons'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f4c025]/20">
                <span className="material-symbols-outlined text-[#f4c025] text-[16px] font-bold">check</span>
              </div>
              <span className="text-white/90 font-medium text-base">{feature}</span>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="glass-card-selected relative flex flex-col items-center justify-center rounded-2xl p-6 text-center transition-transform">
          <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#f4c025] text-black shadow-lg shadow-[#f4c025]/30">
            <span className="material-symbols-outlined text-[28px]">play_arrow</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">How it works</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Watch <strong>1-3 short daily videos</strong> to instantly unlock all premium features for 24 hours. No payment required.
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-white/40">
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <span>•</span>
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
        </div>
      </main>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#181611] via-[#181611]/95 to-transparent p-6 pb-8 flex flex-col items-center">
        <button 
          onClick={onWatchAd}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f4c025] py-4 text-center font-bold text-black shadow-lg shadow-[#f4c025]/25 transition-transform active:scale-[0.98] hover:bg-yellow-400"
        >
          <span className="material-symbols-outlined text-[20px]">smart_display</span>
          Watch Ad to Unlock
        </button>
        <p className="mt-3 text-center text-[10px] text-white/30">
          Supports independent development.
        </p>
      </div>
    </div>
  );
};
