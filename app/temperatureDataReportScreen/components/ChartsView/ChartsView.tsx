import { BarChart } from 'react-native-gifted-charts';
import { ThemedText, ThemedView } from '@/components';
import { ABBREVIATE_NAME, GENERATE_COLOR } from '../../utils';
import { styles } from './styles/ChartsView.styles';
import { useTemperatureDataReportScreen } from '../../hooks';

const ChartsView = () => {
  const { data: temperatures, chartProps } = useTemperatureDataReportScreen();

  return (
    <>
      {temperatures?.tandem1M1Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 1</ThemedText>
          <BarChart
            data={temperatures.tandem1M1Bronce.map((item) => ({
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
      {temperatures?.tandem1M2Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 2</ThemedText>
          <BarChart
            data={temperatures?.tandem1M2Bronce?.map((item) => ({
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
      {temperatures?.tandem1M3Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 3</ThemedText>
          <BarChart
            data={temperatures?.tandem1M3Bronce?.map((item) => ({
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
      {temperatures?.tandem1M4Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 4</ThemedText>
          <BarChart
            data={temperatures?.tandem1M4Bronce?.map((item) => ({
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
      {temperatures?.tandem1M5Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 5</ThemedText>
          <BarChart
            data={temperatures?.tandem1M5Bronce?.map((item) => ({
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
      {temperatures?.tandem1M6Bronce[0]?.id !== undefined && (
        <ThemedView style={styles.chartContainer}>
          <ThemedText type='subtitle'>Temperaturas Bronces Molino 6</ThemedText>
          <BarChart
            data={temperatures?.tandem1M6Bronce?.map((item) => ({
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

export default ChartsView;
