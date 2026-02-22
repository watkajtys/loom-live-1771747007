import { useEffect, useRef } from 'react';
import { useLofiStore } from '../store/lofiStore';

export const useAudioEngine = () => {
  const audioStems = useLofiStore((state) => state.audioStems);
  const isPlaying = useLofiStore((state) => state.isPlaying);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    audioStems.forEach((stem) => {
      let audio = audioRefs.current[stem.id];
      
      // Initialize if not exists
      if (!audio && stem.src) {
        audio = new Audio(stem.src);
        audio.loop = true;
        audioRefs.current[stem.id] = audio;
      }

      if (audio) {
        // Update properties
        audio.volume = stem.muted ? 0 : stem.volume / 100;

        // Sync playback state
        if (isPlaying) {
          if (audio.paused) {
             const playPromise = audio.play();
             if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play was prevented or src is invalid
                });
             }
          }
        } else {
          if (!audio.paused) {
            audio.pause();
          }
        }
      }
    });
  }, [audioStems, isPlaying]);

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
      });
    };
  }, []);
};
