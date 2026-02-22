import React from 'react';
import { useLofiStore, PRESETS } from '../../store/lofiStore';

interface MixLibraryProps {
  isOpen: boolean;
  onClose: () => void;
}

const MixLibrary: React.FC<MixLibraryProps> = ({ isOpen, onClose }) => {
  const activePresetId = useLofiStore((state) => state.activePresetId);
  const setActivePreset = useLofiStore((state) => state.setActivePreset);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="modal-glass w-full max-w-5xl rounded-3xl flex flex-col overflow-hidden max-h-[90vh] shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-stone-800/50 bg-stone-900/40">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-amber-400">library_music</span>
            <h2 className="text-2xl font-bold text-stone-50 tracking-tight">Soundscape Library</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-50 transition-colors p-2 rounded-full hover:bg-stone-800/50"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESETS.map((preset) => {
              const isActive = activePresetId === preset.id;
              const trackCount = Object.values(preset.stems).filter(v => v > 0).length;

              return (
                <div 
                  key={preset.id}
                  onClick={() => {
                    setActivePreset(preset.id);
                    onClose();
                  }}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${
                    isActive 
                      ? 'bg-stone-800/40 border-2 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.15)]' 
                      : 'bg-stone-800/30 border border-stone-700/50 hover:border-stone-600 hover:bg-stone-800/50'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Active
                      </span>
                    </div>
                  )}

                  <div className="h-40 w-full overflow-hidden relative">
                    {!isActive && (
                        <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
                    )}
                    <img 
                      alt={preset.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isActive ? 'sepia-[.2]' : 'saturate-150'}`}
                      src={preset.thumbnail}
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-stone-50">{preset.title}</h3>
                      <span className={`${isActive ? 'text-amber-400' : 'text-stone-500'} font-nums text-sm font-medium`}>
                        {trackCount} Tracks
                      </span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">{preset.description}</p>
                    <div className="mt-4 flex gap-2">
                      {preset.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-stone-500 bg-stone-900/50 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-stone-800/50 bg-stone-900/40 flex justify-center">
          <button 
            onClick={onClose}
            className="bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-3 px-8 rounded-full transition-colors duration-200 flex items-center gap-2 border border-stone-700"
          >
            <span className="material-symbols-outlined text-lg">expand_more</span>
            Close Library
          </button>
        </div>

      </div>
    </div>
  );
};

export default MixLibrary;
