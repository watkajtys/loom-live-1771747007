import React from 'react';
import { useLofiStore } from '../../store/lofiStore';

const Visualizer: React.FC = () => {
  const isPlaying = useLofiStore((state) => state.isPlaying);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-stone-950">
      <div className="absolute inset-0 bg-solar-deep/30 backdrop-blur-sm z-10 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/60 via-transparent to-amber-500/10 z-10 pointer-events-none"></div>
      
      {/* Dynamic Background Element - Pulses when playing */}
      <div className={`absolute inset-0 transition-transform duration-[8000ms] ease-in-out ${isPlaying ? 'scale-110' : 'scale-100'}`}>
         <img 
            alt="Sunny afternoon interior with warm lighting" 
            className={`w-full h-full object-cover object-center transition-all duration-1000 ${isPlaying ? 'animate-breathe brightness-110' : 'brightness-75 grayscale-[0.2]'}`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5PP_caerHclccMgPpCG9L0OJ6FJeq-dgqgiTJa5HRcA0uNfoui-KmhqCveye6rIkbgnn8Qc2HfEQ4kfa2K7sPI2d29uAF1zld8I_-vKueuV1YSZM_WyPwkgulOUQ6z18va11nZgIj0IdHrGGMgMbL6fZB8pqK4MfL_C6eX2pGpmYd1jOWxHuFDVSyC6LeW3h_HcNZ-2OyUuBql_BK4hBzBKdnesjS4cczB4nDxxhm23B9Sjo4rOGuUox7-sNpOiDilrJWUOvXKlc" 
          />
      </div>
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-stone-950/20 z-10 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default Visualizer;
