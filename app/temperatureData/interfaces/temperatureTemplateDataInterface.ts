interface BaseInterface {
  message: string;
  statusCode: number;
}

export interface MillComponentInterface {
  id: string;
  millName: string;
  componentName: string;
  tandemNumber: number;
  temperature: number;
}

export interface TemperatureDataInterface {
  id: string;
  clientId: string;
  templateName: string;
  createdBy: string;
  client: {
    clientName: string;
  };
  user: {
    fullName: string;
  };
  millComponents: MillComponentInterface[];
}

export interface TemplateDataResponseInterface extends BaseInterface {
  data: TemperatureDataInterface;
}

export interface TemperaturesDataInterface {
  millComponentId: string;
  temperature: number;
}

export const EMPTY_DATA = {
  id: '',
  clientId: '',
  templateName: '',
  createdBy: '',
  client: '',
  clientName: '',
  author: '',
  millComponents: [
    {
      id: '',
      millName: '',
      componentName: '',
      tandemNumber: 0,
      temperature: 0,
    },
  ],
};
