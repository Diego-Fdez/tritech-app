import { TemplateDataInterface } from '../clientId/interfaces';

export const templateByClientIdAdapter = (
  template: TemplateDataInterface[]
) => {
  return template.map((item: TemplateDataInterface) => {
    return {
      id: item.id,
      templateName: item.templateName,
      createdBy: item.createdBy,
      clientId: item.clientId,
      status: item.status,
      templateType: item.templateType,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  });
};
