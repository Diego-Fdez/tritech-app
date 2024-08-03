import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserInterface } from '@/app/(tabs)/profile/interfaces';
interface UserState {
  user: UserInterface;
  accessToken: string;
  setUser: (user: UserInterface) => void;
  setToken: (token: string) => void;
  emailInput: string | null;
  setEmailInput: (email: string) => void;
  clearUser: () => void;
}

const EMPTY_USER: UserInterface = {
  id: '',
  fullName: '',
  email: '',
  password: '',
  role: 'BASIC',
  createdAt: '',
  updatedAt: '',
  country: '',
  isActive: true,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: EMPTY_USER,
      accessToken: '',
      setUser: (user: UserInterface) => set({ user }),
      setToken: (token: string) => set({ accessToken: token }),
      emailInput: null,
      setEmailInput: (email: string) => set({ emailInput: email }),
      clearUser: () => set({ user: EMPTY_USER, accessToken: '' }),
    }),
    {
      name: 'userTritech',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
