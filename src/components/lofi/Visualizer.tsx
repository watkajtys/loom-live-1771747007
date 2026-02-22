import React, { useEffect, useState } from 'react';
import { useLofiStore, PRESETS } from '../../store/lofiStore';

const Visualizer: React.FC = () => {
  const isPlaying = useLofiStore((state) => state.isPlaying);
  const activePresetId = useLofiStore((state) => state.activePresetId);
  const activePreset = PRESETS.find(p => p.id === activePresetId) || PRESETS[0];

  const [currentImage, setCurrentImage] = useState(activePreset.backgroundImage);
  const [nextImage, setNextImage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (activePreset.backgroundImage !== currentImage) {
      // Defer state updates to avoid synchronous setState warning
      const startTransition = setTimeout(() => {
        setNextImage(activePreset.backgroundImage);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 10);

      const endTransition = setTimeout(() => {
        setCurrentImage(activePreset.backgroundImage);
        setNextImage(null);
        setIsTransitioning(false);
      }, 1010); // 1000ms duration + 10ms delay

      return () => {
        clearTimeout(startTransition);
        clearTimeout(endTransition);
      };
    }
  }, [activePreset.backgroundImage, currentImage]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-stone-950">
      <div className="absolute inset-0 bg-solar-deep/30 backdrop-blur-sm z-10 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/60 via-transparent to-amber-500/10 z-10 pointer-events-none"></div>
      
      {/* Dynamic Background Element - Pulses when playing */}
      <div className={`absolute inset-0 transition-transform duration-[8000ms] ease-in-out ${isPlaying ? 'scale-110' : 'scale-100'}`}>
         <img 
            alt="Background" 
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${isPlaying ? 'animate-breathe brightness-110' : 'brightness-75 grayscale-[0.2]'}`}
            src={currentImage} 
          />
          
          {nextImage && (
             <img 
                alt="Transition Background" 
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${isPlaying ? 'animate-breathe brightness-110' : 'brightness-75 grayscale-[0.2]'} ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
                src={nextImage} 
              />
          )}
      </div>
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-stone-950/20 z-10 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default Visualizer;
