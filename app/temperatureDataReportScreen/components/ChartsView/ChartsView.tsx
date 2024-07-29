import { BarChart } from 'react-native-gifted-charts';
import ViewShot from 'react-native-view-shot';
import { ThemedText } from '@/components';
import { ABBREVIATE_NAME, GENERATE_COLOR } from '../../utils';
import { styles } from './styles/ChartsView.styles';
import { useSnapShoot, useTemperatureDataReportScreen } from '../../hooks';

const ChartsView = () => {
  const { data: temperatures, chartProps } = useTemperatureDataReportScreen();
  const {
    mill1Tandem1SnapShootRef,
    mill2Tandem1SnapShootRef,
    mill3Tandem1SnapShootRef,
    mill4Tandem1SnapShootRef,
    mill5Tandem1SnapShootRef,
    mill6Tandem1SnapShootRef,
  } = useSnapShoot();

  return (
    <>
      {temperatures?.tandem1M1Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill1Tandem1SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 1
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 1
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem1M2Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill2Tandem1SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 2
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 1
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem1M3Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill3Tandem1SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 3
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 1
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem1M4Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill4Tandem1SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 4
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 1
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem1M5Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill5Tandem1SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 5
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 1
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem1M6Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill6Tandem1SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 6
          </ThemedText>
          <ThemedText type='default' style={styles.subTitle}>
            Tandem 1
          </ThemedText>
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
        </ViewShot>
      )}
    </>
  );
};

export default ChartsView;
