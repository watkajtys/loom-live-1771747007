import { create } from 'zustand';

export type SessionType = 'focus' | 'short' | 'long';

export interface AudioStem {
  id: string;
  name: string;
  volume: number; // 0-100
  muted: boolean;
  src?: string;
  icon: string; // Material symbol name
  accentColor: string; // Tailwind color class for slider accent
}

interface LofiState {
  isPlaying: boolean;
  timer: number;
  initialTimer: number;
  activeSession: SessionType;
  audioStems: AudioStem[];

  togglePlay: () => void;
  setPlay: (isPlaying: boolean) => void;
  setTimer: (time: number) => void;
  setSession: (session: SessionType) => void;
  setVolume: (id: string, volume: number) => void;
  toggleMute: (id: string) => void;
  resetTimer: () => void;
  tickTimer: () => void;
}

export const SESSION_TIMES: Record<SessionType, number> = {
  focus: 25 * 60,
  short: 5 * 60,
  long: 15 * 60,
};

export const useLofiStore = create<LofiState>((set) => ({
  isPlaying: false,
  activeSession: 'focus',
  timer: SESSION_TIMES.focus,
  initialTimer: SESSION_TIMES.focus,
  audioStems: [
    { 
      id: 'rain', 
      name: 'Rain', 
      volume: 75, 
      muted: false, 
      src: 'https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg',
      icon: 'water_drop', 
      accentColor: 'accent-amber-400' 
    },
    { 
      id: 'cafe', 
      name: 'Cafe', 
      volume: 30, 
      muted: false, 
      src: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg',
      icon: 'storefront', 
      accentColor: 'accent-orange-300' 
    },
    { 
      id: 'fire', 
      name: 'Fire', 
      volume: 45, 
      muted: false, 
      src: 'https://actions.google.com/sounds/v1/ambiences/fireplace.ogg',
      icon: 'local_fire_department', 
      accentColor: 'accent-amber-500' 
    },
    { 
      id: 'vinyl', 
      name: 'Vinyl', 
      volume: 45, 
      muted: false, 
      src: 'https://actions.google.com/sounds/v1/water/waves_crashing_on_rocks_1.ogg',
      icon: 'album', 
      accentColor: 'accent-amber-400' 
    },
    { 
      id: 'nature', 
      name: 'Nature', 
      volume: 10, 
      muted: false, 
      src: 'https://actions.google.com/sounds/v1/animals/birds_forest.ogg',
      icon: 'forest', 
      accentColor: 'accent-orange-300' 
    },
  ],

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  setPlay: (isPlaying) => set({ isPlaying }),

  setTimer: (timer) => set({ timer }),

  setSession: (session) => {
    const time = SESSION_TIMES[session];
    set({ activeSession: session, timer: time, initialTimer: time, isPlaying: false });
  },

  setVolume: (id, volume) => set((state) => ({
    audioStems: state.audioStems.map((stem) =>
      stem.id === id ? { ...stem, volume } : stem
    ),
  })),

  toggleMute: (id) => set((state) => ({
    audioStems: state.audioStems.map((stem) =>
      stem.id === id ? { ...stem, muted: !stem.muted } : stem
    ),
  })),

  resetTimer: () => set((state) => ({ timer: state.initialTimer, isPlaying: false })),

  tickTimer: () => set((state) => {
    if (state.timer > 0) {
      return { timer: state.timer - 1 };
    } else {
      return { isPlaying: false, timer: 0 };
    }
  }),
}));
