import {
  TouchableOpacity,
  type TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import normalize from 'react-native-normalize';
import { tintColorLight } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  title: string;
};

const ThemedButton = ({
  style,
  lightColor,
  darkColor,
  title,
  ...rest
}: ThemedButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <ThemedText type='defaultSemiBold' style={styles.text}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(40, 'height'),
    backgroundColor: tintColorLight,
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { color: '#f6f1f1' },
});

export default ThemedButton;
