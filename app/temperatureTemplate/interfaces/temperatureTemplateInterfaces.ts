interface BaseInterface {
  message: string;
  statusCode: number;
}

export interface TemperatureTemplateResponseInterface extends BaseInterface {
  data: {
    id: string;
  };
}
