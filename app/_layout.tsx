import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Container from 'toastify-react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useUserStore } from '../store';
import { set } from 'react-hook-form';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [route, setRoute] = useState<string | null>(null);
  const user = useUserStore((state) => state.user);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    UbuntuRegular: require('../assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuMedium: require('../assets/fonts/Ubuntu-Medium.ttf'),
    UbuntuBold: require('../assets/fonts/Ubuntu-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Aquí puedes cargar cualquier recurso o datos que necesites
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (isReady && loaded) {
      if (user?.id?.length > 0) {
        setRoute('(tabs)');
      } else {
        setRoute('index');
      }
      SplashScreen.hideAsync();
    }
  }, [isReady, loaded, user]);

  if (!isReady || !loaded || route === null) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Container position='top' duration={3000} />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack
            initialRouteName={route}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='index' />
            <Stack.Screen name='register' />
            <Stack.Screen name='temperatureTemplate' />
            <Stack.Screen name='+not-found' />
            <Stack.Screen name='(tabs)' />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
