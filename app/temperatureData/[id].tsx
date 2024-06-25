import {
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  NavView,
  ThemedButton,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components';
import { Colors } from '@/constants';
import { styles } from './styles/TemperatureDataScreen.styles';
import { useTemperatureData } from './hooks';
import { useColorScheme } from '@/hooks/useColorScheme';

const TemperatureDataScreen = () => {
  const schemeColor = useColorScheme();
  const { isPending, handleNavigation, currentComponent } =
    useTemperatureData();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <KeyboardAvoidingView
        style={styles.keyBoardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ThemedView style={styles.container}>
          <NavView />
          <ThemedView style={styles.wrapper}>
            {isPending ? (
              <ActivityIndicator size='large' color={Colors.light.tint} />
            ) : (
              <>
                <ThemedView style={styles.inputContainer}>
                  <ThemedText type='title'>
                    {currentComponent?.millName}
                  </ThemedText>
                  <ThemedText type='subtitle'>
                    {currentComponent?.componentName}
                  </ThemedText>
                  <ThemedInput
                    placeholder='0.00'
                    keyboardType='numeric'
                    placeholderTextColor={
                      Colors[schemeColor ?? 'light'].tabIconDefault
                    }
                    autoFocus={true}
                  />
                </ThemedView>
                <ThemedView style={styles.buttonsContainer}>
                  <ThemedButton
                    title='Anterior'
                    style={styles.button}
                    handlePress={() => handleNavigation('prev')}
                  />
                  <ThemedButton
                    title='Siguiente'
                    style={styles.button}
                    handlePress={() => handleNavigation('next')}
                  />
                </ThemedView>
              </>
            )}
          </ThemedView>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TemperatureDataScreen;
