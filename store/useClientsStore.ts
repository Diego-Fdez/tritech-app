import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Client {
  id: string;
  clientName: string;
  country: string;
  createdAt: string;
  updatedAt: string;
}

interface ClientState {
  clients: Client[] | null;
  setClients: (clients: Client[]) => void;
  clearClients: () => void;
}

export const useClientStore = create<ClientState>()(
  persist(
    (set) => ({
      clients: null,
      setClients: (clients: Client[]) => set({ clients }),
      clearClients: () => set({ clients: null }),
    }),
    {
      name: 'clientsTritech',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
