import {
  MillComponentInterface,
  TemperatureDataInterface,
} from '../interfaces';

export const templateTemperatureDataAdapter = (
  template: TemperatureDataInterface
) => {
  return {
    id: template?.id,
    clientId: template?.clientId,
    templateName: template?.templateName,
    createdBy: template?.createdBy,
    author: template?.user?.fullName,
    clientName: template?.client?.clientName,
    millComponents: template?.millComponents?.map(
      (millComponent: MillComponentInterface) => {
        return {
          id: millComponent?.id,
          millName: millComponent?.millName,
          componentName: millComponent?.componentName,
          tandemNumber: millComponent?.tandemNumber,
          temperature: millComponent.temperature ?? 0,
        };
      }
    ),
  };
};
