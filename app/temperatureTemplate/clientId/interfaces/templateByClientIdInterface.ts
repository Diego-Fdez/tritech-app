export interface TemplateDataInterface {
  id: string;
  templateName: string;
  createdBy: string;
  clientId: string;
  status: string;
  templateType: string;
  createdAt: string;
  updatedAt: string;
}

export interface TemplateByClientIdInterface {
  statusCode: number;
  message: string;
  data: TemplateDataInterface[];
}

export enum TemplateTypesEnum {
  TEMPERATURAS_BRONCES = 'TB',
  TEMPERATURAS_TRANSMISIONES = 'TT',
  INDICES_INGENIOS = 'II',
  CHECKLIST = 'CH',
}
