import { TemperaturesDataInterface } from '../interfaces';

const INITIAL_DATA: TemperaturesDataInterface[] = [
  {
    id: '',
    createdAt: '',
    isSent: false,
    millComponent: {
      millName: '',
      tandemNumber: 1,
      id: '',
      componentName: '',
      temperature: 0,
    },
  },
];

export interface MockTemperatureDataInterface {
  tandem1M1Bronce?: TemperaturesDataInterface[];
  tandem1M2Bronce?: TemperaturesDataInterface[];
  tandem1M3Bronce?: TemperaturesDataInterface[];
  tandem1M4Bronce?: TemperaturesDataInterface[];
  tandem1M5Bronce?: TemperaturesDataInterface[];
  tandem1M6Bronce?: TemperaturesDataInterface[];
  tandem2M1Bronce?: TemperaturesDataInterface[];
  tandem2M2Bronce?: TemperaturesDataInterface[];
  tandem2M3Bronce?: TemperaturesDataInterface[];
  tandem2M4Bronce?: TemperaturesDataInterface[];
  tandem2M5Bronce?: TemperaturesDataInterface[];
  tandem2M6Bronce?: TemperaturesDataInterface[];
  tandem1Corona?: TemperaturesDataInterface[];
  tandem2Corona?: TemperaturesDataInterface[];
}

export const MockTemperaturesData = {
  tandem1M1Bronce: INITIAL_DATA,
  tandem1M2Bronce: INITIAL_DATA,
  tandem1M3Bronce: INITIAL_DATA,
  tandem1M4Bronce: INITIAL_DATA,
  tandem1M5Bronce: INITIAL_DATA,
  tandem1M6Bronce: INITIAL_DATA,
  tandem2M1Bronce: INITIAL_DATA,
  tandem2M2Bronce: INITIAL_DATA,
  tandem2M3Bronce: INITIAL_DATA,
  tandem2M4Bronce: INITIAL_DATA,
  tandem2M5Bronce: INITIAL_DATA,
  tandem2M6Bronce: INITIAL_DATA,
  tandem1Corona: INITIAL_DATA,
  tandem2Corona: INITIAL_DATA,
};
