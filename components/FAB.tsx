
import React from 'react';
import { Plus } from 'lucide-react';

export const FAB: React.FC = () => {
  return (
    <button className="fixed bottom-28 right-6 z-40 w-16 h-16 bg-[#00F2FF] rounded-full flex items-center justify-center text-black shadow-[0_0_25px_rgba(0,242,255,0.6)] hover:scale-110 active:scale-95 transition-all">
      <Plus size={32} strokeWidth={2.5} />
    </button>
  );
};
