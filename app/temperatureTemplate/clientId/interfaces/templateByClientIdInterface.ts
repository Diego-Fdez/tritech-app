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
