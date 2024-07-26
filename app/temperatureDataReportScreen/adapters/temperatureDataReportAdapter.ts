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
  const tandem1M1Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 1') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem1M2Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 2') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem1M3Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 3') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem1M4Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 4') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem1M5Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 5') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem1M6Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 1 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 6') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem2M1Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 1') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem2M2Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 2') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem2M3Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 3') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem2M4Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 4') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem2M5Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 5') &&
      item?.millComponent?.componentName?.toLowerCase()?.includes('bronce')
  );

  const tandem2M6Bronce = adaptedData?.filter(
    (item) =>
      item?.millComponent?.tandemNumber === 2 &&
      item?.millComponent?.millName?.toLowerCase()?.includes('molino 6') &&
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
    tandem1M1Bronce,
    tandem1M2Bronce,
    tandem1M3Bronce,
    tandem1M4Bronce,
    tandem1M5Bronce,
    tandem1M6Bronce,
    tandem2M1Bronce,
    tandem2M2Bronce,
    tandem2M3Bronce,
    tandem2M4Bronce,
    tandem2M5Bronce,
    tandem2M6Bronce,
    tandem1Corona,
    tandem2Corona,
  };
}
