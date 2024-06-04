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
  handlePress?: () => void;
};

const ThemedButton = ({
  style,
  lightColor,
  darkColor,
  title,
  handlePress,
  ...rest
}: ThemedButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      {...rest}
      onPress={handlePress}
    >
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
