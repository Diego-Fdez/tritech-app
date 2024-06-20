import { create } from 'zustand';
import { UserInterface } from '@/app/(tabs)/profile/interfaces';
interface UserState {
  user: UserInterface | null;
  accessToken: string | null;
  setUser: (user: UserInterface) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  accessToken: null,
  setUser: (user: UserInterface) => set({ user }),
  setToken: (token: string) => set({ accessToken: token }),
  clearUser: () => set({ user: null, accessToken: null }),
}));
