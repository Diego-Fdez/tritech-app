import { TemperaturesDataInterface } from '../interfaces';

export function latestTemperaturesDataAdapter(
  temperatures: TemperaturesDataInterface[]
): TemperaturesDataInterface[] {
  return temperatures?.map((temperature: TemperaturesDataInterface) => {
    return {
      id: temperature?.id,
      createdAt: temperature?.createdAt,
      isSent: temperature?.isSent,
      millComponent: {
        millName: temperature?.millComponent?.millName,
        tandemNumber: temperature?.millComponent?.tandemNumber,
        id: temperature?.millComponent?.id,
        componentName: temperature?.millComponent?.componentName,
        temperature: temperature?.temperature,
      },
    };
  });
}

export function groupComponentsByCriteria(
  adaptedData: TemperaturesDataInterface[]
) {
  const tandem1Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem2Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem1Corona = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('corona')
  );

  const tandem2Corona = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('corona')
  );

  return {
    tandem1Bronce,
    tandem2Bronce,
    tandem1Corona,
    tandem2Corona,
  };
}
