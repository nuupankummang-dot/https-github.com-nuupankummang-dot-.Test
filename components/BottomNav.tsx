
import React from 'react';
import { Home, LayoutGrid, Lock, User } from 'lucide-react';
import { Tab } from '../types';

interface NavItemProps {
  tab: Tab;
  active: boolean;
  onClick: (tab: Tab) => void;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ tab, active, onClick, icon }) => {
  return (
    <button 
      onClick={() => onClick(tab)}
      className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-2xl transition-all ${
        active ? 'text-[#00F2FF]' : 'text-zinc-500'
      }`}
    >
      <div className={`${active ? 'scale-110 drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]' : ''} transition-transform`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold tracking-tight uppercase ${active ? 'opacity-100' : 'opacity-40'}`}>
        {tab}
      </span>
    </button>
  );
};

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-6 left-6 right-6 z-50 glass-effect rounded-[2rem] px-4 py-2 flex justify-between items-center shadow-2xl">
      <NavItem 
        tab={Tab.Home} 
        active={activeTab === Tab.Home} 
        onClick={onTabChange} 
        icon={<Home size={22} />} 
      />
      <NavItem 
        tab={Tab.Apps} 
        active={activeTab === Tab.Apps} 
        onClick={onTabChange} 
        icon={<LayoutGrid size={22} />} 
      />
      <NavItem 
        tab={Tab.Vault} 
        active={activeTab === Tab.Vault} 
        onClick={onTabChange} 
        icon={<Lock size={22} />} 
      />
      <NavItem 
        tab={Tab.Profile} 
        active={activeTab === Tab.Profile} 
        onClick={onTabChange} 
        icon={<User size={22} />} 
      />
    </nav>
  );
};
