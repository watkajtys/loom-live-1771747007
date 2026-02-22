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

export interface Preset {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  thumbnail: string;
  stems: Record<string, number>;
  tags: string[];
}

export const PRESETS: Preset[] = [
  {
    id: 'golden-hour',
    title: 'Golden Hour Mix',
    description: 'Warm sunset vibes with crackling fire and soft piano.',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoyFjrpVRJrDyaKtFEmxJnvq4OeTAnBicoZTjZuAy3u6hIbJS3RNIauio6AfecjqvsKM-p2bUk42ytuj8YA-JHmmC4tZRdAzuUkNJ7YCf5WEZd267AABWAe50ADaklZ2hKOZUkvBYN-TK2UjOi_CPktK0etQeyY6icwDIjfFhlZ6oLA9ORXUcaLwFbglFTp1YcA8fkXZd2eqOsHqM75KVEMst8x78BT3aPW2dNAeWaRku4VR2Ier1Zt-OUWd_TpBLaTXpZKyQ05RE',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoyFjrpVRJrDyaKtFEmxJnvq4OeTAnBicoZTjZuAy3u6hIbJS3RNIauio6AfecjqvsKM-p2bUk42ytuj8YA-JHmmC4tZRdAzuUkNJ7YCf5WEZd267AABWAe50ADaklZ2hKOZUkvBYN-TK2UjOi_CPktK0etQeyY6icwDIjfFhlZ6oLA9ORXUcaLwFbglFTp1YcA8fkXZd2eqOsHqM75KVEMst8x78BT3aPW2dNAeWaRku4VR2Ier1Zt-OUWd_TpBLaTXpZKyQ05RE',
    stems: {
      fire: 70,
      vinyl: 50,
      nature: 30,
      rain: 0,
      cafe: 0
    },
    tags: ['Warm', 'Relax']
  },
  {
    id: 'neon-rain',
    title: 'Neon Rain',
    description: 'Cyberpunk city ambiance with heavy rain and distant sirens.',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcdU6jCTXjfGGkQKXdT5SGZr8rX96O7n8EhE3YSl8kWP8N8d27rk3lB8a7Hug9l8cDdg6GNYbkLr372iYxEv18pxuqRHqyL4lEPiV1it8lgqN2wgb4Gw-6j8SMcGdou0tXPBQLPqqzEYmcetW_XDoFONqirZkuHntn5YI_SY0ElKOR5x7lIhBjSN4A71WU21HIReRMrO8SjkLTZ3m-fwLbbHir06A1mc2EfH0OPVEZXIVxiZIF2V3J-E4qgH3Atyx0a230iJbUrus',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcdU6jCTXjfGGkQKXdT5SGZr8rX96O7n8EhE3YSl8kWP8N8d27rk3lB8a7Hug9l8cDdg6GNYbkLr372iYxEv18pxuqRHqyL4lEPiV1it8lgqN2wgb4Gw-6j8SMcGdou0tXPBQLPqqzEYmcetW_XDoFONqirZkuHntn5YI_SY0ElKOR5x7lIhBjSN4A71WU21HIReRMrO8SjkLTZ3m-fwLbbHir06A1mc2EfH0OPVEZXIVxiZIF2V3J-E4qgH3Atyx0a230iJbUrus',
    stems: {
      rain: 80,
      cafe: 20,
      vinyl: 40,
      fire: 0,
      nature: 0
    },
    tags: ['Focus', 'Rain']
  },
  {
    id: 'library-corner',
    title: 'Library Corner',
    description: 'Old books scent, turning pages, and quiet whispers.',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0t9eJNm2983hHNLLPz_Lcr3RR3qdxxCdIbF1YEesdkkunwsDYG9FkR1PqYiUp3TdIafE7lyt4YvUk4UQdI5pW4EynbEySr1HN7jhi3i2hpqINQCrmkuCxd-5dHfk2tsnOigyICYMCMn3TfL7r5xd0qtbu-B18rYPdefRlBT_MTJcKM3MrDWc6MS8CTqnUDcfecVXkvXrmoHoQbXkc8jnRpHc_4Tf2PF2zY7SAMGoyhxi9MytyUgdS7E9EsvEYjwenU0wZV0mzlFI',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0t9eJNm2983hHNLLPz_Lcr3RR3qdxxCdIbF1YEesdkkunwsDYG9FkR1PqYiUp3TdIafE7lyt4YvUk4UQdI5pW4EynbEySr1HN7jhi3i2hpqINQCrmkuCxd-5dHfk2tsnOigyICYMCMn3TfL7r5xd0qtbu-B18rYPdefRlBT_MTJcKM3MrDWc6MS8CTqnUDcfecVXkvXrmoHoQbXkc8jnRpHc_4Tf2PF2zY7SAMGoyhxi9MytyUgdS7E9EsvEYjwenU0wZV0mzlFI',
    stems: {
      cafe: 30,
      vinyl: 40,
      rain: 10,
      fire: 20,
      nature: 0
    },
    tags: ['Study', 'Quiet']
  },
    {
    id: 'deep-space',
    title: 'Deep Space',
    description: 'Ethereal drones and white noise for deep concentration.',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACMqKiJ5KJQHu0bZiMJnH5f749vjHELHXpF5-Z1MYlJG0rx6HJwtSsZ1c1TxhtsxulFa4hynYe_C2qQtDgSMscyRWWKCS7zVULjjGG4d7k3nMFC8MNdMfaMSicbuXiAHmYUTIxkNgU9fPa6ea4KzhFII35jtcPII9BqTjMZYN3JchaGU0uwU6V2q6tG5NK3W6UpX6CL6zhZzXjddJaIn0SYWY-G_egI5vn1zOt8fVDVNECjIW87KZolO_hrU495lIEGlj5d048ObE',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACMqKiJ5KJQHu0bZiMJnH5f749vjHELHXpF5-Z1MYlJG0rx6HJwtSsZ1c1TxhtsxulFa4hynYe_C2qQtDgSMscyRWWKCS7zVULjjGG4d7k3nMFC8MNdMfaMSicbuXiAHmYUTIxkNgU9fPa6ea4KzhFII35jtcPII9BqTjMZYN3JchaGU0uwU6V2q6tG5NK3W6UpX6CL6zhZzXjddJaIn0SYWY-G_egI5vn1zOt8fVDVNECjIW87KZolO_hrU495lIEGlj5d048ObE',
    stems: {
      rain: 30,
      vinyl: 60,
      nature: 0,
      cafe: 0,
      fire: 0
    },
    tags: ['Deep', 'Space']
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop',
    description: 'Espresso machine hiss, clinking cups, and chatter.',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjmjIJm-yVdkCFHcUezyZuDfVDJb-rdRAJkkMS8Sr3g5scvZVjOorp3V7qEO93taMdTpzOEI_ECzP-GFW5tUPYKmUAbfdFWVF3OODP3PWeSUm4tR4ROjejKznpyZeLCLxJKT376efln7LbCMtCx0iUtfDrSAnMcLWkEAd9mT91KXHFWwGiUeR2BbikK_o47A9h7a--1fxcbWPMUAK8_1SSf3BaKjalGnZase69Thf766xcATErCYzanPqYtC4Q-d-ENQsy-uBgwJ4',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjmjIJm-yVdkCFHcUezyZuDfVDJb-rdRAJkkMS8Sr3g5scvZVjOorp3V7qEO93taMdTpzOEI_ECzP-GFW5tUPYKmUAbfdFWVF3OODP3PWeSUm4tR4ROjejKznpyZeLCLxJKT376efln7LbCMtCx0iUtfDrSAnMcLWkEAd9mT91KXHFWwGiUeR2BbikK_o47A9h7a--1fxcbWPMUAK8_1SSf3BaKjalGnZase69Thf766xcATErCYzanPqYtC4Q-d-ENQsy-uBgwJ4',
    stems: {
      cafe: 85,
      vinyl: 20,
      rain: 10,
      fire: 0,
      nature: 0
    },
    tags: ['Social', 'Cafe']
  },
  {
    id: 'forest-cabin',
    title: 'Forest Cabin',
    description: 'Wind in trees, bird calls, and a crackling wood stove.',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-2Yj9TeHpY0tZpFEKf1PA-dQro-srOE8osxEqCidbawkM_Z1IjrlV3wtkDhfH1dZEmUQajOzFA3X0Knf-LSQ7hU-f3zdbUEqkYQb-vkYWXGx-91yhY5WeGFNNzF1W26J6wNtLrPwmZPOe8zm3Kr3j3riW0IoxaNLh0RyL59tO15zydD6YZI0X9b-GpVUebWvc3lu8Vo3Mso3OXPNE7E9XfffWKIwCrhGZEjt7bj3OuscG8_Qrih9k_mNsbIfqHt7qZHX9an84NqE',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-2Yj9TeHpY0tZpFEKf1PA-dQro-srOE8osxEqCidbawkM_Z1IjrlV3wtkDhfH1dZEmUQajOzFA3X0Knf-LSQ7hU-f3zdbUEqkYQb-vkYWXGx-91yhY5WeGFNNzF1W26J6wNtLrPwmZPOe8zm3Kr3j3riW0IoxaNLh0RyL59tO15zydD6YZI0X9b-GpVUebWvc3lu8Vo3Mso3OXPNE7E9XfffWKIwCrhGZEjt7bj3OuscG8_Qrih9k_mNsbIfqHt7qZHX9an84NqE',
    stems: {
      nature: 80,
      fire: 60,
      rain: 10,
      cafe: 0,
      vinyl: 0
    },
    tags: ['Nature', 'Peace']
  }
];

interface LofiState {
  isPlaying: boolean;
  timer: number;
  initialTimer: number;
  activeSession: SessionType;
  audioStems: AudioStem[];
  activePresetId: string;

  togglePlay: () => void;
  setPlay: (isPlaying: boolean) => void;
  setTimer: (time: number) => void;
  setSession: (session: SessionType) => void;
  setVolume: (id: string, volume: number) => void;
  toggleMute: (id: string) => void;
  resetTimer: () => void;
  tickTimer: () => void;
  setActivePreset: (id: string) => void;
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
  activePresetId: 'golden-hour',
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

  setActivePreset: (id) => {
    const preset = PRESETS.find((p) => p.id === id);
    if (!preset) return;

    set((state) => ({
      activePresetId: id,
      audioStems: state.audioStems.map((stem) => ({
        ...stem,
        volume: preset.stems[stem.id] ?? 0,
      })),
    }));
  },
}));
