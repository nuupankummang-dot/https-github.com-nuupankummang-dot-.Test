
import React, { useEffect, useState } from 'react';

interface AdCompletionRewardProps {
  onContinue: () => void;
  onClose: () => void;
}

export const AdCompletionReward: React.FC<AdCompletionRewardProps> = ({ onContinue, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onContinue();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onContinue]);

  return (
    <div className="relative flex flex-col h-screen w-screen overflow-hidden bg-background-dark text-white font-['Inter']">
      {/* Background Layer: Blurred Ad Frame */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center blur-xl scale-110 opacity-60" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRvgDNtqQiMdvE6BAeoDM1UiyVAysCviUHwyUlmt2bSAiE_oKhPvpB0hUDB0RMvkJ_pss4KabSK1ZkWdK8mQtAKCEPLbjKYPUTHwkYatTKB_CE-Wdpj7_8Mbh84INVYmarjjxzSdemgXEi3qTmF2r8p-8j6JjQdLxNMLGsH1cdUta_5vhHD3fdiwCXRSgBO5KOB24UPDHANmJwkQEQrS7YvDh5E6V1M_U-5VQZ1Rwln74brZIcKsMyAGrJVUUOBcwXrFuk24kYHXU')" }}
        />
        <div className="absolute inset-0 bg-[#050b05]/80 bg-gradient-to-b from-transparent via-[#050b05]/50 to-[#050b05]"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full safe-area-inset p-4">
        {/* Top Bar (Close Button) */}
        <div className="flex items-center justify-end pt-2 pb-4">
          <button 
            onClick={onClose}
            className="bg-white/10 backdrop-blur-md group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white transition-all active:scale-95 hover:bg-white/20 border border-white/15"
          >
            <span className="material-symbols-outlined text-[28px] font-bold opacity-80 group-hover:opacity-100">close</span>
          </button>
        </div>

        {/* Central Content Area */}
        <div className="flex flex-grow flex-col items-center justify-center pb-12 w-full max-w-md mx-auto">
          {/* Reward Card */}
          <div className="glass-panel relative flex w-full flex-col items-center justify-center gap-6 rounded-2xl p-8 shadow-2xl animate-fadeInUp">
            {/* Glow Effect behind Icon */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#06f906]/20 blur-2xl rounded-full pointer-events-none"></div>
            
            {/* Icon */}
            <div className="relative flex items-center justify-center rounded-full bg-[#0f230f]/50 p-4 ring-1 ring-white/10 shadow-[0_0_20px_rgba(6,249,6,0.4)]">
              <span className="material-symbols-outlined text-6xl text-[#06f906]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>check_circle</span>
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center text-center gap-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                Reward Earned!
              </h1>
              <p className="text-base font-medium text-gray-300 leading-relaxed px-2">
                You've unlocked <span className="text-white font-bold">24h access</span> for your cloned apps.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1"></div>

            {/* Action Button */}
            <button 
              onClick={onContinue}
              className="w-full cursor-pointer overflow-hidden rounded-xl bg-[#06f906] hover:bg-[#05d605] active:bg-[#04b004] transition-colors py-4 px-6 shadow-[0_0_15px_rgba(6,249,6,0.25)]"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#0f230f] text-lg font-bold tracking-wide">Continue</span>
                <span className="material-symbols-outlined text-[#0f230f] text-xl font-bold">arrow_forward</span>
              </div>
            </button>

            {/* Auto-close Timer */}
            <p className="text-xs font-medium text-gray-500/80 uppercase tracking-widest mt-2">
              Auto-closing in {timeLeft}s
            </p>
          </div>
        </div>

        {/* Bottom Spacer/Safe Area */}
        <div className="h-8 w-full shrink-0"></div>
      </div>
    </div>
  );
};
