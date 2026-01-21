
import React from 'react';

interface NotificationSettingsProps {
  onBack: () => void;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onBack }) => {
  return (
    <div className="flex-1 w-full flex flex-col bg-[#0f230f] text-white font-['Space_Grotesk'] antialiased min-h-screen">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full px-4 pt-12 pb-3 flex items-center justify-between bg-[#0f230f]/85 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={onBack}
          className="text-white hover:text-[#06f906] transition-colors flex size-10 items-center justify-center rounded-full active:bg-white/10"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
        <h1 className="text-white text-lg font-bold tracking-tight text-center flex-1 pr-10">Notification Center</h1>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pb-24 pt-2">
        {/* Search Bar */}
        <div className="mb-6 mt-2 transition-all duration-300">
          <div className="flex w-full items-center rounded-xl bg-[#162e16] border border-white/5 focus-within:border-[#06f906]/50 focus-within:ring-1 focus-within:ring-[#06f906]/50 transition-all shadow-lg">
            <div className="flex items-center justify-center pl-3 text-[#9bbb9b]">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="w-full bg-transparent border-none text-white placeholder:text-[#9bbb9b] focus:ring-0 text-base py-3 pl-2" 
              placeholder="Search App IDs (e.g. Genshin)" 
              type="text"
            />
          </div>
        </div>

        {/* Smart Controls Section */}
        <div className="mb-8">
          <h3 className="text-[#9bbb9b] text-xs font-bold tracking-wider uppercase ml-4 mb-2">Smart Controls</h3>
          <div className="bg-[#162e16] rounded-xl overflow-hidden shadow-sm border border-white/5">
            <div className="flex items-center justify-between p-4 min-h-[72px]">
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <span className="material-symbols-outlined text-[24px]">stacks</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-base font-semibold">Smart Grouping</span>
                  <span className="text-[#9bbb9b] text-xs leading-tight mt-0.5">Bundle alerts from same App IDs</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-[51px] h-[31px] bg-[#1e3b1e] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-[#06f906]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* App List: Genshin Impact */}
        <div className="mb-8">
          <h3 className="text-[#9bbb9b] text-xs font-bold tracking-wider uppercase ml-4 mb-2 flex items-center justify-between">
            <span>Genshin Impact</span>
            <span className="bg-[#1e3b1e] text-[#06f906] px-2 py-0.5 rounded text-[10px] font-bold">3 CLONES</span>
          </h3>
          <div className="bg-[#162e16] rounded-xl overflow-hidden shadow-sm border border-white/5 divide-y divide-white/5">
            <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="relative size-11 rounded-lg overflow-hidden bg-gradient-to-br from-indigo-900 to-slate-900 border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center opacity-80">
                    <span className="material-symbols-outlined text-indigo-200">stadia_controller</span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#06f906] text-black text-[10px] font-extrabold px-1.5 py-0.5 rounded-tl-md">MAIN</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-base font-medium group-hover:text-[#06f906] transition-colors">Main Account</span>
                  <span className="text-[#9bbb9b] text-xs">ID: 80001293 • ASIA</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-[51px] h-[31px] bg-[#1e3b1e] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-[#06f906]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Messaging Section */}
        <div className="mb-8">
          <h3 className="text-[#9bbb9b] text-xs font-bold tracking-wider uppercase ml-4 mb-2 flex items-center justify-between">
            <span>Messaging</span>
            <span className="bg-[#1e3b1e] text-[#06f906] px-2 py-0.5 rounded text-[10px] font-bold">2 CLONES</span>
          </h3>
          <div className="bg-[#162e16] rounded-xl overflow-hidden shadow-sm border border-white/5 divide-y divide-white/5">
            <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="relative size-11 rounded-lg overflow-hidden bg-gradient-to-br from-green-800 to-emerald-900 border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-100">chat</span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white text-emerald-900 text-[10px] font-extrabold px-1.5 py-0.5 rounded-tl-md">BIZ</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-base font-medium">WhatsApp Business</span>
                  <span className="text-[#9bbb9b] text-xs">Active • Sound On</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-[51px] h-[31px] bg-[#1e3b1e] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-[#06f906]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* DND Scheduler */}
        <div className="mb-8">
          <h3 className="text-[#9bbb9b] text-xs font-bold tracking-wider uppercase ml-4 mb-2">Gaming Mode (DND)</h3>
          <div className="bg-[#162e16] rounded-xl overflow-hidden shadow-sm border border-white/5 divide-y divide-white/5">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                  <span className="material-symbols-outlined text-[24px]">do_not_disturb_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-base font-semibold">Scheduled DND</span>
                  <span className="text-[#9bbb9b] text-xs leading-tight mt-0.5">Silence all clone alerts during hours</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-[51px] h-[31px] bg-[#1e3b1e] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-[#06f906]"></div>
              </label>
            </div>
            <div className="flex flex-row divide-x divide-white/5">
              <button className="flex-1 p-4 flex flex-col items-center justify-center hover:bg-white/5 active:bg-white/10 transition-colors">
                <span className="text-[#9bbb9b] text-xs font-bold uppercase mb-1">Start</span>
                <span className="text-[#06f906] text-xl font-medium font-mono">22:00</span>
              </button>
              <button className="flex-1 p-4 flex flex-col items-center justify-center hover:bg-white/5 active:bg-white/10 transition-colors">
                <span className="text-[#9bbb9b] text-xs font-bold uppercase mb-1">End</span>
                <span className="text-white text-xl font-medium font-mono">07:00</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
