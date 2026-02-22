import React from 'react';
import Visualizer from './Visualizer';
import Navigation from './Navigation';
import FocusEngine from './FocusEngine';
import MixerBoard from './MixerBoard';
import { useAudioEngine } from '../../hooks/useAudioEngine';

const LofiLoom: React.FC = () => {
  useAudioEngine();
  
  return (
    <div className="font-display bg-background-dark text-orange-50 h-screen w-screen overflow-hidden relative">
      <Visualizer />
      <Navigation />
      <div className="relative z-20 h-full w-full flex flex-col justify-between pt-16 pb-32 px-8">
        <FocusEngine />
      </div>
      <MixerBoard />
    </div>
  );
};

export default LofiLoom;
