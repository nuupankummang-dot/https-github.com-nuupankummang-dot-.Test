
import React, { useState } from 'react';

interface ProfileProps {
  onBack: () => void;
  onEditIcon: () => void;
  onLogout: () => void;
  onSecurity: () => void;
  onNotifications: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ 
  onBack, 
  onEditIcon, 
  onLogout, 
  onSecurity, 
  onNotifications 
}) => {
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);

  return (
    <div className="flex-1 w-full flex flex-col bg-[#101622] text-white font-['Space_Grotesk'] antialiased min-h-screen">
      {/* Top Navigation */}
      <header className="flex items-center justify-between p-4 pt-12 bg-transparent z-10 sticky top-0 backdrop-blur-md bg-[#101622]/80 border-b border-white/5">
        <button 
          onClick={onBack}
          className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
        </button>
        <h1 className="text-white text-lg font-bold tracking-tight">Profile</h1>
        <button onClick={onBack} className="text-[#135bec] font-bold text-base px-2 active:scale-95 transition-transform">Done</button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full pb-10 overflow-y-auto no-scrollbar">
        {/* Profile Header */}
        <div className="flex flex-col items-center justify-center pt-2 pb-6 px-6">
          <div 
            onClick={onEditIcon}
            className="relative mb-4 group cursor-pointer"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#135bec] to-purple-600 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <div 
              className="relative h-28 w-28 rounded-full border-2 border-[#101622] bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKwMlUkrbhZpulJ99rkIxfSpQDSlqY2sET_BHsJDw_pKDWd8T9Nwp1Bqb0AlJmKe4w3JiSGeab0pC6_0s8pjcPmoOhEW9tGVi8czVDerP9XTsi63h1-ltARiZrH-tgi4Wo4SAGB2S5jMq4dRN2qc8CoQp_3qLhVmDQ3Fm7KpobZcJe4a3sV6u5mqIZ8WVQhhYO4YQ9tIlZJ6mIbFdKkBACaz6gMF-GHLtZ2NDajZzRMg3icECrVDr2R_vQjo44vWGrL2TMx2YKH4w')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white">edit</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-[#101622] rounded-full p-1">
              <div className="bg-green-500 size-4 rounded-full border-2 border-[#101622]"></div>
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold tracking-tight mb-1">AlexGamer99</h2>
          <div className="px-3 py-1 bg-[#135bec]/20 rounded-full border border-[#135bec]/30 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#135bec] text-[14px] leading-none">verified</span>
            <span className="text-[#135bec] text-xs font-bold tracking-widest uppercase">Premium</span>
          </div>
        </div>

        {/* Connected Accounts */}
        <div className="w-full mb-6">
          <div className="flex items-center justify-between px-6 mb-3">
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Connected Accounts</h3>
            <button className="text-[#135bec] text-xs font-bold">Manage</button>
          </div>
          <div className="flex overflow-x-auto no-scrollbar px-6 gap-3 pb-2">
            {[
              { name: 'Google', color: '#DB4437', icon: 'search', linked: true },
              { name: 'Facebook', color: '#1877F2', icon: 'public', linked: true },
              { name: 'Instagram', color: 'linear-gradient(to tr, #f59e0b, #ef4444, #a855f7)', icon: 'photo_camera', linked: false },
              { name: 'TikTok', color: '#000000', icon: 'music_note', linked: false },
              { name: 'Line', color: '#06C755', icon: 'chat_bubble', linked: false },
            ].map((account) => (
              <div 
                key={account.name}
                className={`flex-shrink-0 flex flex-col items-center gap-2 bg-[#1c2230] p-3 rounded-2xl w-[88px] border border-white/5 ${!account.linked ? 'opacity-70 hover:opacity-100 transition' : ''}`}
              >
                <div 
                  className="size-10 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ background: account.color }}
                >
                  <span className="material-symbols-outlined">{account.icon}</span>
                </div>
                <span className="text-white text-xs font-medium">{account.name}</span>
                {account.linked ? (
                  <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                ) : (
                  <span className="text-[#135bec] text-[10px] font-bold h-[18px] flex items-center">LINK</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="px-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1c2230] rounded-2xl p-4 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition">
                <span className="material-symbols-outlined text-white text-6xl">layers</span>
              </div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Active Clones</p>
              <div className="flex items-baseline gap-1">
                <p className="text-white text-3xl font-bold">12</p>
                <span className="text-green-500 text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 2
                </span>
              </div>
              <div className="w-full bg-gray-700/50 h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-[#135bec] h-full w-[60%]"></div>
              </div>
            </div>
            <div className="bg-[#1c2230] rounded-2xl p-4 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition">
                <span className="material-symbols-outlined text-white text-6xl">visibility</span>
              </div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Daily Ads</p>
              <div className="flex items-baseline gap-1">
                <p className="text-white text-3xl font-bold">2<span className="text-gray-500 text-xl">/3</span></p>
              </div>
              <div className="w-full bg-gray-700/50 h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-[66%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="px-4">
          <div className="bg-[#1c2230] rounded-2xl overflow-hidden border border-white/5">
            <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="size-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
                </div>
                <span className="text-white text-base font-medium">Account Settings</span>
              </div>
              <span className="material-symbols-outlined text-gray-500">chevron_right</span>
            </button>

            <div className="w-full flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-4 cursor-pointer" onClick={onSecurity}>
                <div className="size-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <span className="material-symbols-outlined text-[20px]">face</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white text-base font-medium">Face ID Login</span>
                  <span className="text-gray-500 text-xs">Secure your clones</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={faceIdEnabled}
                  onChange={() => setFaceIdEnabled(!faceIdEnabled)}
                />
                <div className="w-[51px] h-[31px] bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-[#135bec]"></div>
              </label>
            </div>

            <button 
              onClick={onNotifications}
              className="w-full flex items-center justify-between p-4 active:bg-white/5 transition border-b border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="size-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </div>
                <span className="text-white text-base font-medium">Notifications</span>
              </div>
              <span className="material-symbols-outlined text-gray-500">chevron_right</span>
            </button>

            <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="size-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <span className="material-symbols-outlined text-[20px]">card_membership</span>
                </div>
                <span className="text-white text-base font-medium">Subscription</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Manage</span>
                <span className="material-symbols-outlined text-gray-500">chevron_right</span>
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition">
              <div className="flex items-center gap-4">
                <div className="size-8 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-300">
                  <span className="material-symbols-outlined text-[20px]">help</span>
                </div>
                <span className="text-white text-base font-medium">Help & Support</span>
              </div>
              <span className="material-symbols-outlined text-gray-500">chevron_right</span>
            </button>
          </div>

          <button 
            onClick={onLogout}
            className="w-full mt-6 mb-10 bg-[#1c2230] border border-red-500/20 rounded-2xl p-4 flex items-center justify-center gap-2 text-red-500 active:bg-red-500/10 transition"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-bold text-base">Log Out</span>
          </button>
          <p className="text-center text-gray-600 text-xs mb-8">Version 2.4.1 (Build 8902)</p>
        </div>
      </main>
    </div>
  );
};
