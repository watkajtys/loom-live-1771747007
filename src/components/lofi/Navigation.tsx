import React from 'react';
import { Link } from 'react-router-dom';
import { useLofiStore } from '../../store/lofiStore';

const Navigation: React.FC = () => {
  const timer = useLofiStore((state) => state.timer);
  
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
      <div className="flex items-center gap-3 pointer-events-auto">
        <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_8px_rgba(255,183,77,0.8)]">wb_sunny</span>
        <span className="text-amber-50 font-bold text-lg tracking-wide uppercase drop-shadow-md font-display">LofiLoom</span>
      </div>
      <div className="flex items-center gap-6 pointer-events-auto">
        <Link to="/legacy" className="text-amber-100/60 hover:text-amber-50 text-sm font-medium transition-colors font-display">
            Legacy App
        </Link>
        <div className="hidden md:flex items-center gap-2 text-amber-100/80 text-xs font-medium bg-amber-950/30 px-4 py-2 rounded-full border border-amber-500/20 backdrop-blur-md">
          <span className="material-symbols-outlined text-primary text-base">timer</span>
          <span className="font-numeric tabular-nums">{formatTime(timer)}</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="size-8 rounded-full border border-amber-200/30 overflow-hidden shadow-[0_0_10px_rgba(255,160,0,0.3)]">
            <img 
              alt="User profile avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQExQBHfWJqTQgtxDg2jHHFqdQhpS992LP-o2S3u9Z-3gS-m05hQvpb28jY8FnEf3PeALZ7XOux9z27smmCzkIPSj72mt9EcSUO-g7_b3aQZJzii4r5mEfs5Tzk_D1tX8s0LguImvMASmKxY9_1UWEwNvSj9bSh4IzObX06QYh9XzyIQaMol6jiu0QypYdWk-vMsu0V4OhozVkD3qIOWgtF2BUoo9k_LUCpN16uZpqjZkNqbKj1n1nZolEm9nGzcxZejHnxWz2sB4"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
