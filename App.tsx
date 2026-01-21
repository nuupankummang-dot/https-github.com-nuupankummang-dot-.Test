
import React, { useState } from 'react';
import { Header } from './components/Header';
import { PerformanceWidget } from './components/PerformanceWidget';
import { AdBanner } from './components/AdBanner';
import { AppGrid } from './components/AppGrid';
import { BottomNav } from './components/BottomNav';
import { FAB } from './components/FAB';
import { Login } from './components/Login';
import { Support } from './components/Support';
import { FreeAccessInfo } from './components/FreeAccessInfo';
import { DailyLimitReached } from './components/DailyLimitReached';
import { AdCompletionReward } from './components/AdCompletionReward';
import { VideoAdPlayer } from './components/VideoAdPlayer';
import { ChangeAppIcon } from './components/ChangeAppIcon';
import { LockScreen } from './components/LockScreen';
import { NotificationSettings } from './components/NotificationSettings';
import { SecuritySettings } from './components/SecuritySettings';
import { Profile } from './components/Profile';
import { Tab } from './types';

type View = 'dashboard' | 'support' | 'free-access' | 'daily-limit' | 'reward' | 'video-ad' | 'change-icon' | 'lock-screen' | 'notification-settings' | 'security-settings' | 'profile';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [previousView, setPreviousView] = useState<View>('dashboard');
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSupportOpen = () => {
    setCurrentView('support');
  };

  const handleFreeAccessOpen = () => {
    setCurrentView('free-access');
  };

  const handleWatchAd = () => {
    setPreviousView(currentView);
    setCurrentView('video-ad');
  };

  const handleRewardContinue = () => {
    if (previousView === 'free-access') {
      setCurrentView('daily-limit');
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setActiveTab(Tab.Home);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === Tab.Profile) {
      setCurrentView('profile');
    } else if (tab === Tab.Apps) {
      setCurrentView('notification-settings');
    } else if (tab === Tab.Vault) {
      setCurrentView('security-settings');
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleApplyIcon = (iconUrl: string) => {
    console.log('Applied Icon:', iconUrl);
    setCurrentView('profile');
    setActiveTab(Tab.Profile);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('dashboard');
    setActiveTab(Tab.Home);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#050505] flex justify-center items-center">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  if (currentView === 'support') {
    return (
      <div className="min-h-screen bg-[#181611] flex justify-center overflow-x-hidden">
        <Support onBack={handleBackToDashboard} />
      </div>
    );
  }

  if (currentView === 'free-access') {
    return (
      <div className="min-h-screen bg-[#181611] flex justify-center overflow-x-hidden">
        <FreeAccessInfo 
          onClose={handleBackToDashboard} 
          onWatchAd={handleWatchAd} 
        />
      </div>
    );
  }

  if (currentView === 'video-ad') {
    return (
      <div className="min-h-screen bg-black flex justify-center overflow-x-hidden">
        <VideoAdPlayer 
          onComplete={() => setCurrentView('reward')} 
          onClose={handleBackToDashboard} 
        />
      </div>
    );
  }

  if (currentView === 'reward') {
    return (
      <div className="min-h-screen bg-[#050b05] flex justify-center overflow-x-hidden">
        <AdCompletionReward 
          onContinue={handleRewardContinue} 
          onClose={handleBackToDashboard} 
        />
      </div>
    );
  }

  if (currentView === 'daily-limit') {
    return (
      <div className="min-h-screen bg-[#0f230f] flex justify-center overflow-x-hidden">
        <DailyLimitReached onBack={handleBackToDashboard} />
      </div>
    );
  }

  if (currentView === 'change-icon') {
    return (
      <div className="min-h-screen bg-[#0f230f] flex justify-center overflow-x-hidden">
        <ChangeAppIcon 
          onBack={() => setCurrentView('profile')} 
          onApply={handleApplyIcon} 
        />
      </div>
    );
  }

  if (currentView === 'lock-screen') {
    return (
      <div className="min-h-screen bg-black flex justify-center overflow-x-hidden">
        <LockScreen onBack={handleBackToDashboard} />
      </div>
    );
  }

  if (currentView === 'notification-settings') {
    return (
      <div className="min-h-screen bg-[#0f230f] flex justify-center overflow-x-hidden">
        <NotificationSettings onBack={handleBackToDashboard} />
      </div>
    );
  }

  if (currentView === 'security-settings') {
    return (
      <div className="min-h-screen bg-[#101622] flex justify-center overflow-x-hidden">
        <SecuritySettings onBack={handleBackToDashboard} />
      </div>
    );
  }

  if (currentView === 'profile') {
    return (
      <div className="min-h-screen bg-[#101622] flex justify-center overflow-x-hidden">
        <Profile 
          onBack={handleBackToDashboard}
          onEditIcon={() => setCurrentView('change-icon')}
          onLogout={handleLogout}
          onSecurity={() => setCurrentView('security-settings')}
          onNotifications={() => setCurrentView('notification-settings')}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] relative overflow-hidden flex justify-center">
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00F2FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#39FF14]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <main className="w-full max-w-md px-4 relative flex flex-col min-h-screen">
        <Header onProClick={handleFreeAccessOpen} />
        
        <div className="flex-1 overflow-y-auto no-scrollbar pt-2">
          {activeTab === Tab.Home && (
            <>
              <PerformanceWidget />
              <AdBanner onSupportClick={handleWatchAd} />
              <AppGrid />
            </>
          )}
        </div>
        
        <FAB />
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      </main>
    </div>
  );
};

export default App;
