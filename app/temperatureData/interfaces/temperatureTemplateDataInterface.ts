interface BaseInterface {
  message: string;
  statusCode: number;
}

export interface MillComponentInterface {
  id: string;
  millName: string;
  componentName: string;
  tandemNumber: number;
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
