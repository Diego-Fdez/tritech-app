import { create } from 'zustand';

interface SnapShotInterface {
  snapShots: any[];
  setSnapshot: (snapShot: any) => void;
  clearSnapShotStore: () => void;
}

export const useSnapShotStore = create<SnapShotInterface>((set) => ({
  snapShots: [],
  setSnapshot: (snapShot: any) =>
    set((state) => ({ snapShots: [...state.snapShots, snapShot] })),
  clearSnapShotStore: () => set({ snapShots: [] }),
}));
