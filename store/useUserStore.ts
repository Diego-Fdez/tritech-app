import { create } from 'zustand';

interface User {
  id: string;
  fullName: string;
  email: string;
  country: string;
  phone: string;
  role: string;
  web?: string;
  createdAt: string;
  updatedAt: string;
}

interface UserState {
  user: User | null;
  accessToken: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  accessToken: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ accessToken: token }),
  clearUser: () => set({ user: null, accessToken: null }),
}));
