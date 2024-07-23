export interface TemperaturesDataResponse {
  statusCode: number;
  message: string;
  data: TemperaturesDataInterface[];
}

export interface TemperaturesDataInterface {
  id: string;
  createdAt: string;
  isSent: boolean;
  temperature?: number;
  millComponent: MillComponentInterface;
}

export interface MillComponentInterface {
  millName: string;
  tandemNumber: number;
  id: string;
  componentName: string;
  temperature?: number;
}
