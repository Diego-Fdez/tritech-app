import {
  MillComponentInterface,
  TemperatureDataInterface,
} from '../interfaces';

const componentOrder: string[] = [
  'Bronce 4ta maza LT',
  'Corona 4ta maza LT',
  'Bronce cañera LT',
  'Corona cañera LT',
  'Bronce superior LT',
  'Corona superior LT',
  'Bronce bagacera LT',
  'Corona bagacera LT',
  'Bronce bagacera LS',
  'Corona bagacera LS',
  'Bronce superior LS',
  'Corona superior LS',
  'Bronce cañera LS',
  'Corona cañera LS',
  'Bronce 4ta maza LS',
  'Corona 4ta maza LS',
];

export function filterComponents(arr: any) {
  return arr.sort((a: any, b: any) => {
    // Primero ordenamos por tandemNumber
    if (a.tandemNumber < b.tandemNumber) return -1;
    if (a.tandemNumber > b.tandemNumber) return 1;

    //ordenamos por millName
    if (a.millName < b.millName) return -1;
    if (a.millName > b.millName) return 1;

    // Después ordenamos por el orden específico en componentOrder
    const indexA = componentOrder.indexOf(a.componentName);
    const indexB = componentOrder.indexOf(b.componentName);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // Si uno de los componentes no está en componentOrder, los ponemos al final
    if (indexA === -1 && indexB !== -1) return 1;
    if (indexA !== -1 && indexB === -1) return -1;

    // Finalmente, ordenamos alfabéticamente por componentName si no están en componentOrder
    if (a.componentName < b.componentName) return -1;
    if (a.componentName > b.componentName) return 1;

    return 0;
  });
}

export const templateTemperatureDataAdapter = (
  template: TemperatureDataInterface
) => {
  const componentAdapted = template?.millComponents?.map(
    (millComponent: MillComponentInterface) => {
      return {
        id: millComponent?.id,
        millName: millComponent?.millName,
        componentName: millComponent?.componentName,
        tandemNumber: millComponent?.tandemNumber,
        temperature: millComponent?.temperature ?? 0,
      };
    }
  );

  const filteredComponent = filterComponents(componentAdapted);

  const templateAdapted = {
    id: template?.id,
    clientId: template?.clientId,
    templateName: template?.templateName,
    createdBy: template?.createdBy,
    author: template?.user?.fullName,
    clientName: template?.client?.clientName,
    millComponents: filteredComponent,
  };

  return templateAdapted;
};
