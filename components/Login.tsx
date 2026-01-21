
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen w-full max-w-sm flex flex-col justify-between p-6 font-['Spline_Sans'] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-10 pb-6">
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-blue-500 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="relative w-24 h-24 rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#000] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            <span className="material-symbols-outlined text-5xl text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">layers</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-center mb-2 text-white text-neon">
          Parallel Clone
        </h1>
        <p className="text-blue-200/60 text-center text-sm font-medium tracking-wide">
          Seamless Multi-Account Manager
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col gap-3 mb-8">
        <div className="text-center mb-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Sign in with</p>
        </div>

        {[
          { name: 'Google', icon: <GoogleIcon />, onClick: onLogin },
          { name: 'Facebook', icon: <FacebookIcon />, onClick: onLogin },
          { name: 'Line', icon: <LineIcon />, onClick: onLogin },
          { name: 'TikTok', icon: <TikTokIcon />, onClick: onLogin },
          { name: 'Instagram', icon: <InstagramIcon />, onClick: onLogin }
        ].map((platform) => (
          <button 
            key={platform.name}
            onClick={platform.onClick}
            className="glass-btn relative w-full h-14 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] group"
          >
            <div className="absolute left-4 p-1 rounded-full bg-white/5 border border-white/5 overflow-hidden flex items-center justify-center w-8 h-8">
              {platform.icon}
            </div>
            <span className="font-medium text-white/90 group-hover:text-white">{platform.name}</span>
          </button>
        ))}
      </div>

      <div className="relative z-10 w-full text-center pb-4">
        <p className="text-[11px] text-zinc-500 mb-6 leading-relaxed">
          By continuing, you agree to our<br/>
          <a className="text-blue-400 hover:text-blue-300 transition-colors" href="#">Terms of Service</a> & <a className="text-blue-400 hover:text-blue-300 transition-colors" href="#">Privacy Policy</a>
        </p>
        <div className="h-1.5 w-32 bg-white/10 rounded-full mx-auto"></div>
      </div>
    </div>
  );
};

// SVG Icon components
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
);
const LineIcon = () => (
  <svg className="w-5 h-5 text-[#06C755]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.174-.51.432-.595.064-.023.133-.031.199-.031.211 0 .391.09.51.25l2.443 3.317V8.109c0-.345.282-.63.63-.63.345 0 .627.285.627.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615 0.572 12 0.572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.026c-.045.303-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975 1.631-1.88 2.548-3.706 2.548-5.974"></path></svg>
);
const TikTokIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.24-1.72 1.36-4.04 1.86-6.17 1.31-2.68-.69-4.73-2.75-5.38-5.46-.53-2.2-.17-4.52 1.09-6.38 1.32-1.96 3.49-3.05 5.89-3.01v4.08c-2.48-.13-4.54 2.15-4.04 4.63.36 1.74 1.93 2.99 3.71 2.96 1.8-.03 3.47-1.37 3.82-3.14.15-.75.05-1.53-.08-2.27-.04-.25-.09-.5-.15-.75l-.03-8.24z"></path></svg>
);
const InstagramIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] opacity-20"></div>
    <svg className="relative w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
  </div>
);
