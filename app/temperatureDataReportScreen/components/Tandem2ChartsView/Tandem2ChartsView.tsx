import { BarChart } from 'react-native-gifted-charts';
import { ThemedText, ThemedView } from '@/components';
import { useTemperatureDataReportScreen } from '../../hooks';
import { styles } from '../ChartsView/styles/ChartsView.styles';
import { ABBREVIATE_NAME, GENERATE_COLOR } from '../../utils';

const Tandem2ChartsView = () => {
  const { data: temperatures, chartProps } = useTemperatureDataReportScreen();

  return (
    <>
      {temperatures?.tandem2M1Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='title'>Tandem 2</ThemedText>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 1</ThemedText>
          <BarChart
            data={temperatures?.tandem2M1Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
      {temperatures?.tandem2M2Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 2</ThemedText>
          <BarChart
            data={temperatures?.tandem2M2Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
      {temperatures?.tandem2M3Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 3</ThemedText>
          <BarChart
            data={temperatures?.tandem2M3Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
      {temperatures?.tandem2M4Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 4</ThemedText>
          <BarChart
            data={temperatures?.tandem2M4Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
      {temperatures?.tandem2M5Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 5</ThemedText>
          <BarChart
            data={temperatures?.tandem2M5Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
      {temperatures?.tandem2M6Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 6</ThemedText>
          <BarChart
            data={temperatures?.tandem2M6Bronce?.map((item) => ({
              value: item.millComponent?.temperature || 0,
              label:
                ABBREVIATE_NAME[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
              frontColor:
                GENERATE_COLOR[
                  item.millComponent?.componentName?.toLowerCase() || ''
                ],
            }))}
            {...chartProps}
          />
        </ThemedView>
      )}
    </>
  );
};

export default Tandem2ChartsView;
