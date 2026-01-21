
import React from 'react';
import { Cpu, Zap } from 'lucide-react';

interface GaugeProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const Gauge: React.FC<GaugeProps> = ({ value, label, icon, color }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            className="text-zinc-800"
          />
          {/* Progress Circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke={color}
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
        </svg>
        <div className="z-10 flex flex-col items-center">
          <span className="text-xs text-white/50 font-medium mb-0.5">{icon}</span>
          <span className="text-lg font-bold text-white">{value}%</span>
        </div>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{label}</span>
    </div>
  );
};

export const PerformanceWidget: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden mb-6">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2FF]/5 rounded-full blur-3xl -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#39FF14]/5 rounded-full blur-3xl -ml-10 -mb-10" />
      
      <div className="flex justify-around items-center">
        <Gauge 
          value={42} 
          label="CPU Usage" 
          icon={<Cpu size={14} />} 
          color="#00F2FF" 
        />
        <div className="h-12 w-[1px] bg-zinc-800" />
        <Gauge 
          value={68} 
          label="RAM Usage" 
          icon={<Zap size={14} />} 
          color="#39FF14" 
        />
      </div>
    </div>
  );
};
