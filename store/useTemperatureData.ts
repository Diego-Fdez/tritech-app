import { create } from 'zustand';
import {
  MillComponentInterface,
  TemperaturesDataInterface,
} from '@/app/temperatureData/interfaces';

interface TemperatureDataInterface {
  currentComponent: MillComponentInterface;
  setCurrentComponent: (component: MillComponentInterface) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  temperaturesData: TemperaturesDataInterface[];
  setTemperaturesData: (data: TemperaturesDataInterface[]) => void;
}

export const useTemperatureDataStore = create<TemperatureDataInterface>(
  (set) => ({
    currentComponent: {} as MillComponentInterface,
    currentIndex: 0,
    temperaturesData: [] as TemperaturesDataInterface[],
    setCurrentComponent: (component: MillComponentInterface) =>
      set((state) => {
        const temperatureData = state.temperaturesData.find(
          (data) => data.millComponentId === component.id
        );
        return {
          currentComponent: {
            ...component,
            temperature: temperatureData?.temperature || 0, // Agregar temperatura si existe, sino 0
          },
        };
      }),
    setCurrentIndex: (index: number) => set({ currentIndex: index }),
    setTemperaturesData: (data: TemperaturesDataInterface[]) =>
      set({ temperaturesData: data }),
  })
);
