import React from 'react';
import { useLofiStore } from '../../store/lofiStore';

const MixerBoard: React.FC = () => {
  const audioStems = useLofiStore((state) => state.audioStems);
  const setVolume = useLofiStore((state) => state.setVolume);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass-panel-deep px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-28 shadow-2xl">
      <div className="hidden md:flex items-center gap-4 w-64 shrink-0">
        <div className="relative size-14 rounded-lg overflow-hidden bg-amber-900/20 shadow-inner group cursor-pointer border border-amber-500/20">
          <img 
            alt="Album art" 
            className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity sepia-[.3]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9gvKgX5ZCwKa8RJBtFhlK4uG6GSCPyTKZy9LWI01zOZpSAz-ShnRB34fDaXCy7NPOz9ZTFR59o-Xb_OPmXcCgtFFWJnzBEUhHB9gH9pMLdwIW0vrS6ZWiF8LvYqUuNspbWEA1as9TSNevPgf7ksWxpmhISsBiox0EkYzlbPAsbf0BTep91I8quRuuTfeGZorrCdwzBvBOR5mqQMByXaj_Zjh_SXPKR6azHG5dckqYPE4ZmBgoS4wJE5JmTs_6fSYqS8s05eBJ3FA"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-white text-xl">open_in_full</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-amber-50 text-sm font-bold leading-tight font-display">Golden Hour Mix</h3>
          <p className="text-xs text-primary/80 mt-1 font-medium font-display">Warm Vibes</p>
        </div>
      </div>
      
      <div className="flex-1 w-full flex items-center justify-center gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0 px-4 scrollbar-hide">
        {audioStems.map((stem) => {
           // Helper to determine colors based on accentColor class string
           const iconColor = stem.accentColor
             .replace('accent-', 'text-')
             .replace('-400', '-300')
             .replace('-300', '-200');
             
           const textColor = stem.accentColor
             .replace('accent-', 'text-')
             .replace('-400', '-100')
             .replace('-300', '-100');

           return (
            <div key={stem.id} className="flex flex-col items-center gap-2 min-w-[80px] group">
              <div className={`flex items-center gap-2 mb-1 opacity-60 group-hover:opacity-100 transition-opacity`}>
                <span className={`material-symbols-outlined text-lg ${iconColor}`}>{stem.icon}</span>
                <span className={`text-[10px] uppercase tracking-wider font-bold ${textColor}`}>{stem.name}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={stem.volume} 
                onChange={(e) => setVolume(stem.id, parseInt(e.target.value))}
                className={`w-32 h-1 bg-amber-900/30 rounded-lg appearance-none cursor-pointer hover:bg-amber-900/50 transition-colors ${stem.accentColor}`}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 w-64 justify-end shrink-0 border-l border-amber-500/10 pl-6 h-12">
        <button className="text-amber-200/50 hover:text-amber-100 transition-colors">
          <span className="material-symbols-outlined">tune</span>
        </button>
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-amber-200/50 group-hover:text-amber-100 text-xl">volume_up</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="80"
            className="w-20 h-1 bg-amber-900/30 rounded-lg appearance-none cursor-pointer accent-amber-100" 
          />
        </div>
        <button className="text-amber-200/50 hover:text-amber-100 transition-colors ml-2">
          <span className="material-symbols-outlined">fullscreen</span>
        </button>
      </div>
    </div>
  );
};

export default MixerBoard;
