import { TextInput, type TextInputProps, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
};

const ThemedInput = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedTextInputProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <TextInput
      style={[{ backgroundColor }, { color }, styles.input, style]}
      placeholderTextColor={color}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: normalize(40, 'height'),
    width: '100%',
    borderWidth: 1,
    borderColor: '#0a7ea4',
    borderRadius: normalize(8),
    paddingHorizontal: normalize(8, 'width'),
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'UbuntuRegular',
  },
});

export default ThemedInput;
