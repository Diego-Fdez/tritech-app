import { create } from 'zustand';

interface User {
  id: number;
  fullName: string;
  email: string;
  country: string;
  phone: string;
  role: string;
  web: string;
  createdAt: string;
  updatedAt: string;
}

interface UserState {
  user: User | null;
  accessToken: string | null;
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  accessToken: null,
  setUser: (user, token) => set({ user, accessToken: token }),
  clearUser: () => set({ user: null, accessToken: null }),
}));
