
import React, { useEffect, useState } from 'react';

interface VideoAdPlayerProps {
  onComplete: () => void;
  onClose: () => void;
}

export const VideoAdPlayer: React.FC<VideoAdPlayerProps> = ({ onComplete, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="relative h-screen w-full flex flex-col bg-black overflow-hidden font-['Inter']">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Simulated Video Content */}
        <div 
          className="h-full w-full bg-cover bg-center opacity-90 transition-opacity duration-1000" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4I8Gx0u-OmrLOUM97W2tlnbK73BmK-0zJiFroTuN3xSiwqbt2LiaH6p4fCvIXxs4u9MznDJE2JM_GYxP2dPVQRCCwnqhoeYJ_y13SFSeycGIZYeJtMuiyGxwkZvSOPDJDaxBMOX9l_U0FpDWaId8n2n0uvcR-U9scSsTNMGSsTYzqTI0t0nvcmm6KIyTUZcP3SzUiFL965sOlf0Bzp8ZPCAw8Mj7e1U_F29Ja65FtJyvwLUzlTlcnx8gE-dgD-ERz7g4T1ZiXR2U")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Top Controls Area */}
      <div className="absolute top-0 left-0 w-full pt-14 px-4 z-20 flex justify-between items-start">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
          <span className="text-white/80 text-xs font-medium tracking-wide">Ad</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-3 py-1.5 flex items-center gap-2">
            <div className="relative size-5 flex items-center justify-center">
              <svg className="transform -rotate-90 size-5">
                <circle className="text-white/20" cx="10" cy="10" fill="transparent" r="9" stroke="currentColor" strokeWidth="2"></circle>
                <circle 
                  className="text-[#0d59f2] animate-countdown" 
                  cx="10" 
                  cy="10" 
                  fill="transparent" 
                  r="9" 
                  stroke="currentColor" 
                  strokeDasharray="56" 
                  strokeDashoffset="0" 
                  strokeLinecap="round" 
                  strokeWidth="2"
                ></circle>
              </svg>
            </div>
            <span className="text-white text-xs font-semibold tracking-tight whitespace-nowrap">
              {timeLeft > 0 ? `Reward in ${timeLeft}s` : 'Reward Unlocked'}
            </span>
          </div>

          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="size-9 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMuted ? 'volume_off' : 'volume_up'}
            </span>
          </button>
          
          <button 
            onClick={onClose}
            className="size-9 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
      </div>

      {/* Main Interaction Area (Empty for viewing) */}
      <div className="flex-1 z-10"></div>

      {/* Bottom Sheet CTA */}
      <div className="relative z-20 px-5 pb-10 pt-4 w-full flex flex-col gap-6 items-center bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-end justify-between w-full gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-xl bg-white overflow-hidden shadow-sm">
                <img 
                  alt="Game App Icon" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT0XipPJrO7evOBuG6DbiSiD53rUSNAWNGYRU_q5ajhiBy9rDWMrukIo0p8JAv88ARbPn4Dn5fy2uD1RLWUtNrLgN7wSo41fg69HuHD5b9eeH5_tflJ4SRRzbFYuQnl7FjJ5vMeHt33usMpz_k5AslIu8qig4Soa038hukAGAE0YcyMA0_G0gCUrLNsE-J1PHsea-L4JRYh41rZGW6apiDElwwx2X5cRRGoOhNUiy7EEABp2raXOTnzeVnQmqHjI852o7gnfSzseU" 
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-white text-xl font-bold leading-none tracking-tight">Epic Fantasy RPG</h2>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-white/80 text-xs font-medium">4.8</span>
                  <span className="material-symbols-outlined text-[10px] text-yellow-400">star</span>
                  <span className="text-white/60 text-xs">• 12M Downloads</span>
                </div>
              </div>
            </div>
            <p className="text-white/90 text-sm font-medium leading-normal pl-0.5 mt-1">Play with friends now & claim rewards!</p>
          </div>
          <button className="shrink-0 size-8 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px]">info</span>
          </button>
        </div>

        <button className="w-full relative overflow-hidden rounded-full h-14 bg-[#0d59f2] text-white text-lg font-bold tracking-wide shadow-[0_0_20px_rgba(13,89,242,0.6)] hover:shadow-[0_0_30px_rgba(13,89,242,0.8)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group">
          <span className="relative z-10">Install Now</span>
          <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">download</span>
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
        </button>
      </div>
    </div>
  );
};
