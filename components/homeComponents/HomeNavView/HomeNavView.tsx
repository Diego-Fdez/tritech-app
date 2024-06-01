import { View, Image, Dimensions } from 'react-native';
import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ThemedText } from '@/components';
import { styles } from './styles/HomeNavView.styles';

const HomeNavView = () => {
  const { width } = Dimensions.get('window');
  const animatedValue = useSharedValue(width);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedValue.value }],
    };
  });

  useEffect(() => {
    animatedValue.value = withTiming(0, { duration: 500 });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image
        source={require('@/assets/images/tritech.webp')}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <ThemedText type='defaultSemiBold'>Bienvenido </ThemedText>
        <ThemedText type='subtitle' style={styles.userName}>
          Diego
        </ThemedText>
      </View>
    </Animated.View>
  );
};

export default HomeNavView;
