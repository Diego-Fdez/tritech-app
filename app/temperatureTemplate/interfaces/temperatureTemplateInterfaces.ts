interface BaseInterface {
  message: string;
  statusCode: number;
}

export interface TemperatureTemplateResponseInterface extends BaseInterface {
  data: {
    id: string;
  };
}

export interface SugarCaneMillsResponse extends BaseInterface {
  data: [{ id: string; millName: string }];
}
