
import React, { useState } from 'react';

interface ChangeAppIconProps {
  onBack: () => void;
  onApply: (iconUrl: string) => void;
}

const ICON_CATEGORIES = [
  { id: 'gaming', name: 'Gaming', icon: 'sports_esports' },
  { id: 'stealth', name: 'Stealth', icon: 'visibility_off' },
  { id: 'minimalist', name: 'Minimalist', icon: 'check_box_outline_blank' },
  { id: 'colors', name: 'Colors', icon: 'palette' },
];

const NEON_ICONS = [
  { id: 'retro', name: 'Retro', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6zRZ4BNadRTdO43hzcq9D-yfT_eLyTVG_xaJXwZw5PbLY2peB5F6wqKkX2Et4_614aZG2Hgr5SPu6WdYaWSVv7kZYJgn0tnewACtdjl9csYUG5C51wBu8RZAGQOECOHYRHep_MIaZJKp0IODCypnpcH-91kFZPmmxg0x38XBgkCRm4GtvVnr4d3hf48axhD-Vor-Gw_GCr5zNAp8lkefYrLkEcyytkM8vUIFN6-nrVLewJIv3w_yPnhVUrYPAfp2AUq3Az5-h8j4' },
  { id: 'cyber', name: 'Cyber', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuMoFwC5Fg9M1_v9hBhXTu6oJ_1OPtI3mmmMc2_HUqaYYnsNNMCIBapHkzsQRdCOffAodgaE2mAJlw59QCJMQ5NshcF4IK1Sloni7BiI2_Ruy6NfW5cfr5j1Q5Z5D4rIkADcbt-jg8pBrAp-Z1xjeMkJui357CgpzomQ9Ry9Mf_ZhRgAfg9vuxiFiM9P_16KKUFwvDj9zTw4z7rp0M4su01-P645lF0XwVArAm-DETqQVabUjI6Wa_SAwaxyrPr2yZHrwuMUkZghU' },
  { id: 'flux', name: 'Flux', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC33JNYoO75bL3ydYrdgCTUMBbaNCh2EVBMFRntlWhdL0RQqnAI4BzgtxR4GNZgAH6ZK5H_RbCNE57GfWcikNEH4HQNzKfv3F3JkNbXyXAOzj4rMIb1hACJYwwsYhmTFsUA9XaCiT2g7Z7tfbagojXmLv6xW0OCQ9GnOPo2TIvaiLuMAW4erJLANKpOnvIdQHN1YMUGleI-Mx4jcrKJ0HvEOfEykxYX5bDFvL2_VTizojJ1Z7DpEBoYc98KEmlpTlvWNbYrLbD1Gg8' },
  { id: 'audio', name: 'Audio', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPvZInxEfb47TxVXcP08u10xHVIuDayb5qslxWfAssLRfn-_jTdtIXP24FYFEsAnKXuXucrdR1xFozjWdzx7_9pH456qb1b8zn3gyx__IVeq5ky2smjak47N59nPh1NdUiiCviFyMwp6pWPRtMysAGCwQm5gO9GXb2adeRAXep9y3dkrMJS1ZqE2sSxYzDkU21ZwhhFgHYw28HJuOrBd5NUBgiZbEiWrMk0qrFPrOHU5ZnfTHDGukjwYz68tIWBil5DsDGLAByoAk' },
  { id: 'flow', name: 'Flow', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk39tCogE4s0oKqJUa4-2XfBz0giSedqxB7x-VzeQpp2kYecgJR2eUiJ2lkzaJ-tXVIeFeAKAydvBSNBh4NCCBDvG-JNYGVounWIOiVBfP7dtc38CnxeldErAbkelyIczslRSASNhf5yE_EM0eUtLTFXGdPn7Sd8wfW6jrRWYZFAQVGH67dKKWVF95RGnAznQFdMcRKHFPE_ID78gD38dkxtaMa8vHErg9Z_tuibYuSRuMXXkXlKEz30qLMndQ5O9kMS3Nc5d7PgA' },
  { id: 'vapor', name: 'Vapor', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCtc7MVf4zdpdDd5XAu1aIDWo7a9kf-7cxFLygT-qgA0R7yzXI0HzflJkcDZ3MgopLTQQfqst_KCSeNWj23du6xPWxWvHU5sNoa2QzYAUoUHxLFmynjXdGpKEVAzGgDs5jJLeqakqo48OvhLgGlUefD74TLUdtXzRkw5O8uLoXd-NsXfgkJ8ajhAIhJunjERl_mN9miOc0tuFW0fw50I3FtnbR9ubx39bO5wC6loIIMAkISvy7F1Uw2x7fmnuE6uohmMy9qZpRoNo' },
  { id: 'orb', name: 'Orb', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfdh8rGLWf50wad84zqHM1QNFJvly2xlJus4GzXtNjP7OYTsWQoCDvCZsw04i1QA-BUhndtAPzkK2H1dv0IklRWMYf0NsgG8zmyd5K65YpVL7s1ovsdHGtD6YleJUWAkr6jBdvb6mGW18YPMBoxzYhjSdYwWxq4p8zs5GFNuF-TzN-NYB7niOZZVJAryM3tj6D432CNt0HrkBCMmfpgm88SLfk_nBXZ6r0UaY9f5YU742Ty7eplLaj-CJ599qy51XIydK3xbuaT8c' },
  { id: 'glitch', name: 'Glitch', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmXBie0WSZgR3GHoqlseUwO8lcwvZ_Rfn7yQMMGMePD8GAajV-2m_abrugjXA5GEfh5iufk-vDZodmnvWkeLraWthhEpKSKIqld2DLnNk9FWjOhDKzvjzonid-3gG8qJ6XgHv_DQAcHNWnxBjDdL9jE3U5qkv6r5VRKDUH3Ap9E3B2vFBf9PCr16iQrA_Zs7kCwh3SszpFXogKlERODHirzg867vhNKdySiOywOD8c6ehKPoI7uZIi1jFVPaKbPK8dIUjmL2rcoFE' },
];

const STEALTH_ICONS = [
  { id: 'calc', name: 'Calc', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1Jg6IfNum2Ev430PE8qTLxzuSV1ddReHN8GHmqWmSFrHF_Q_zLkUO3sX3ecPVl9RT5M8jFbYW93V2g6htC-oLZmfpc95TLUj2mNUwgFcdEpdiCqoTXQp-ZB7-BD3S2-jBu_oEJHBFcpVkloC2F1I9ua5M60ZN9AAwPK0xn3jExWQUVNiop8Sq3iUsJCBotHc06sMNcSEFb5UPh9vist9jH4rOtKsmBfb5bK1Ct3kFxxZIIqzU3T0kIWQrJ3e49FYx4_EOLYVXUE' },
  { id: 'weather', name: 'Weather', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn97oCvwlY_tQmkzCqRdWU7qNcCWG0zhBsFTJj2DRwMh3QIJ1gfFPEMjoqNw0d1vrA6KFujz9qLU6DcsdOoRweF5iQD5j1Xj-qo4z5tjjlmbXiYXKpW81TalMPOIHx6xHXGOxBDGyqKmQoWx8IoeEK5TNLqX37Y9---dnTHkbu_AXRNch4PhTqF8-Q9cXf3Cuaz837t_nBn-7B2Gk30SOJnfq89eoviNiYG00kmyi72KHlx5aH7l4YhLHMGjdhCMQjbifqTNam6r8' },
  { id: 'notes', name: 'Notes', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNaxH_haN1chuIYN0fNyZJo-YIKJNPkpVLBHy0MlqJMNndd6lq9-o1n_kTv1G_w8dkXcNe0hq2bEnIN7o_8yKwAH8c4_l5YOexLMUNOOQ4G3Hn3JpJbO1NSYEJ9rtFxLjFNy9nTAdkrYMGVSYP1apJA0OH05HHDhQN4VitqZ1LJoV_JSdo7WOCZ9GIvbJgIVOxwlO3JymOZcRUjXcVuZL7P0EDyGza1E78WnDizRlrNp05LnJAeKsUzRAGao0nLEqA1PDGwdrIEKk' },
  { id: 'compass', name: 'Compass', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5CudPKWKhcapfOiYEQ6r2rddQN731mXSf4mdLwk-EAkUXrQIpTTA9_kjsqZHXrAZvK1aJUaOm0DNfxaViVgMY35hEXl0WYiVGKe7p_V_DIe24NkVKtTZrvRqc-TUHFeUM-aWZqI_Hv0qh7pdt1quiK9t48b0EtoIiJujwvxCSQNhoBVzFNi1I9Kobv3V2LW-AMnrtqOeOy8kxXbDw_w0zVOMLsaN8-8atXMzyBTROSqjq-I5SjjGlTDSZDWgbQFlmJZnJ2I4ahng' },
];

export const ChangeAppIcon: React.FC<ChangeAppIconProps> = ({ onBack, onApply }) => {
  const [selectedIconId, setSelectedIconId] = useState('retro');
  const [activeCategory, setActiveCategory] = useState('gaming');

  const allIcons = [...NEON_ICONS, ...STEALTH_ICONS];
  const selectedIcon = allIcons.find(icon => icon.id === selectedIconId) || allIcons[0];

  const currentIconUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA57Bkb0u1cn50srMjx3KhlTxGqlCngRBruo8roMS8H-lQ1jxW0AgkKK_7wJyPnwVAQPE3rTY7Yefr_g5cgPq2RYADg9v3Q9KsuswFMCStG0pGLZ0rU97Vz73IY0zuZawRnAUPKKDNoBRvt0keON-zN3UUrkLAf8WwYU_hgFhGe8MhZxxJ_z-zywTSe5EKOBTOPqZJbaoThUmbAZtyIFL2RRP3kZ5SP_UBe591SQsQh0ZYfkWbH_tNabotDYe_jGeqazcDkaFNLa40';

  return (
    <div className="relative min-h-screen flex flex-col w-full bg-[#0f230f] text-white font-['Inter']">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 px-4 pt-10 pb-3 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 -ml-2 text-white/80 active:text-[#06f906] transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-center flex-1 pr-8">Change App Icon</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 no-scrollbar">
        {/* Comparison Preview */}
        <section className="p-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-6 w-full max-w-sm">
            <div className="flex flex-col items-center gap-3 w-28">
              <div className="relative w-20 h-20 shadow-lg group">
                <div className="absolute inset-0 bg-white/10 rounded-[22%]"></div>
                <div 
                  className="w-full h-full rounded-[22%] bg-cover bg-center border border-white/10" 
                  style={{ backgroundImage: `url('${currentIconUrl}')` }}
                />
              </div>
              <span className="text-sm font-medium text-white/60">Current</span>
            </div>

            <div className="flex items-center justify-center text-white/40 pt-6">
              <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
            </div>

            <div className="flex flex-col items-center gap-3 w-28">
              <div className="relative w-24 h-24 shadow-[0_0_20px_rgba(6,249,6,0.3)] transition-all duration-300">
                <div className="absolute -inset-1 border-2 border-[#06f906] rounded-[26%] animate-pulse opacity-50"></div>
                <div 
                  className="w-full h-full rounded-[22%] bg-cover bg-center border border-white/10" 
                  style={{ backgroundImage: `url('${selectedIcon.url}')` }}
                />
              </div>
              <span className="text-sm font-bold text-[#06f906]">New Preview</span>
            </div>
          </div>
        </section>

        {/* Categories Chips */}
        <section className="pl-4 mb-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pr-4 py-2">
            {ICON_CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center px-5 py-2.5 rounded-full font-semibold text-sm shrink-0 transition-all active:scale-95 ${
                  activeCategory === cat.id 
                    ? 'bg-[#06f906] text-black shadow-lg shadow-[#06f906]/20' 
                    : 'bg-[#1a2e1a] border border-white/10 text-white hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined text-lg mr-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Custom Upload Option */}
        <section className="px-4 mb-8">
          <button className="w-full flex items-center justify-between bg-[#1a2e1a] border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-all active:scale-[0.99] group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#06f906] group-hover:bg-[#06f906] group-hover:text-black transition-colors">
                <span className="material-symbols-outlined">add_photo_alternate</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Upload from Gallery</h3>
                <p className="text-xs text-white/50">Create a custom icon from your photos</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-white/40">chevron_right</span>
          </button>
        </section>

        {/* Grid: Neon & Gaming */}
        <section className="px-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-lg">Neon & Gaming</h3>
            <span className="text-xs font-medium text-[#06f906] cursor-pointer hover:underline">See All</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {NEON_ICONS.map(icon => (
              <div 
                key={icon.id}
                onClick={() => setSelectedIconId(icon.id)}
                className="flex flex-col gap-2 items-center cursor-pointer group"
              >
                <div className="relative w-full aspect-square">
                  {selectedIconId === icon.id && (
                    <div className="absolute inset-0 bg-[#06f906]/20 rounded-[22%] scale-110 opacity-100 transition-transform"></div>
                  )}
                  <div 
                    className={`w-full h-full rounded-[22%] bg-cover bg-center border-2 transition-all ${
                      selectedIconId === icon.id ? 'border-[#06f906] scale-100 z-10' : 'border-white/10 opacity-80 group-hover:opacity-100'
                    }`}
                    style={{ backgroundImage: `url('${icon.url}')` }}
                  />
                  {selectedIconId === icon.id && (
                    <div className="absolute -top-1 -right-1 z-20 bg-[#06f906] text-black rounded-full p-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-[16px] block font-bold">check</span>
                    </div>
                  )}
                </div>
                <span className={`text-[10px] font-medium text-center ${selectedIconId === icon.id ? 'text-[#06f906]' : 'text-white/60'}`}>
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Grid: Stealth & Privacy */}
        <section className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-lg">Stealth & Privacy</h3>
            <span className="text-xs font-medium text-white/40 cursor-pointer hover:text-white">See All</span>
          </div>
          <div className="grid grid-cols-4 gap-4 pb-8">
            {STEALTH_ICONS.map(icon => (
              <div 
                key={icon.id}
                onClick={() => setSelectedIconId(icon.id)}
                className="flex flex-col gap-2 items-center cursor-pointer group"
              >
                <div className="relative w-full aspect-square">
                  {selectedIconId === icon.id && (
                    <div className="absolute inset-0 bg-[#06f906]/20 rounded-[22%] scale-110 opacity-100 transition-transform"></div>
                  )}
                  <div 
                    className={`w-full h-full rounded-[22%] bg-cover bg-center border-2 transition-all ${
                      selectedIconId === icon.id ? 'border-[#06f906] scale-100 z-10' : 'border-white/10 opacity-80 group-hover:opacity-100'
                    }`}
                    style={{ backgroundImage: `url('${icon.url}')` }}
                  />
                  {selectedIconId === icon.id && (
                    <div className="absolute -top-1 -right-1 z-20 bg-[#06f906] text-black rounded-full p-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-[16px] block font-bold">check</span>
                    </div>
                  )}
                </div>
                <span className={`text-[10px] font-medium text-center ${selectedIconId === icon.id ? 'text-[#06f906]' : 'text-white/60'}`}>
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/5 p-4 z-40 max-w-md mx-auto">
        <button 
          onClick={() => onApply(selectedIcon.url)}
          className="w-full bg-[#06f906] text-black font-bold text-base py-4 rounded-xl shadow-[0_0_15px_rgba(6,249,6,0.2)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
        >
          <span>Apply New Icon</span>
          <span className="material-symbols-outlined text-lg">check_circle</span>
        </button>
      </div>
    </div>
  );
};
