import { BarChart } from 'react-native-gifted-charts';
import ViewShot from 'react-native-view-shot';
import { ThemedText, ThemedView } from '@/components';
import { useSnapShoot, useTemperatureDataReportScreen } from '../../hooks';
import { styles } from '../ChartsView/styles/ChartsView.styles';
import { ABBREVIATE_NAME, GENERATE_COLOR } from '../../utils';

const Tandem2ChartsView = () => {
  const { data: temperatures, chartProps } = useTemperatureDataReportScreen();
  const {
    mill1Tandem2SnapShootRef,
    mill2Tandem2SnapShootRef,
    mill3Tandem2SnapShootRef,
    mill4Tandem2SnapShootRef,
    mill5Tandem2SnapShootRef,
    mill6Tandem2SnapShootRef,
  } = useSnapShoot();

  return (
    <>
      {temperatures?.tandem2M1Bronce[0]?.id !== undefined && (
        <>
          <ThemedText type='title' style={styles.title}>
            Tandem 2
          </ThemedText>
          <ViewShot ref={mill1Tandem2SnapShootRef} style={styles.snapView}>
            <ThemedText type='subtitle' style={styles.subTitle}>
              Temperaturas Bronces Molino 1
            </ThemedText>
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
          </ViewShot>
        </>
      )}
      {temperatures?.tandem2M2Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill2Tandem2SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 2
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem2M3Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill3Tandem2SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 3
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem2M4Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill4Tandem2SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 4
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem2M5Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill5Tandem2SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 5
          </ThemedText>
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
        </ViewShot>
      )}
      {temperatures?.tandem2M6Bronce[0]?.id !== undefined && (
        <ViewShot ref={mill6Tandem2SnapShootRef} style={styles.snapView}>
          <ThemedText type='subtitle' style={styles.subTitle}>
            Temperaturas Bronces Molino 6
          </ThemedText>
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
        </ViewShot>
      )}
    </>
  );
};

export default Tandem2ChartsView;
