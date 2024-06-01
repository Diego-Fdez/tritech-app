import { PropsWithChildren, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { styles } from './styles/AuthContainerView.styles';
import { useColorScheme } from '@/hooks/useColorScheme';

const AuthContainerView = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const { height } = Dimensions.get('window');
  const animatedValue = useSharedValue(height);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedValue.value }],
    };
  });

  useEffect(() => {
    animatedValue.value = withTiming(0, { duration: 500 });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ThemedView style={styles.topView}>
          <Image
            source={require('@/assets/images/degradado.webp')}
            style={styles.image}
          />
        </ThemedView>
        <Animated.View
          style={[
            {
              backgroundColor: Colors[colorScheme ?? 'light'].background,
            },
            styles.wrapper,
            animatedStyle,
          ]}
        >
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthContainerView;
