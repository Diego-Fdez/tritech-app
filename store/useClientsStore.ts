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
  clients: Client[];
  setClients: (clients: Client[]) => void;
  clearClients: () => void;
}

const EMPTY_CLIENTS: Client[] = [
  {
    id: '',
    clientName: '',
    country: '',
    createdAt: '',
    updatedAt: '',
  },
];

export const useClientStore = create<ClientState>()(
  persist(
    (set) => ({
      clients: EMPTY_CLIENTS,
      setClients: (clients: Client[]) => set({ clients }),
      clearClients: () => set({ clients: EMPTY_CLIENTS }),
    }),
    {
      name: 'clientsTritech',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
