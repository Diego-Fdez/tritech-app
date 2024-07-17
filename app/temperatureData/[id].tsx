import {
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated from 'react-native-reanimated';
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
import { useTemperatureDataStore } from '@/store';

const TemperatureDataScreen = () => {
  const schemeColor = useColorScheme();
  const currentComponent = useTemperatureDataStore(
    (state) => state.currentComponent
  );
  const {
    isPending,
    handleNavigation,
    temperature,
    setTemperature,
    animatedStyle,
  } = useTemperatureData();

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
                {currentComponent?.id?.length > 0 && (
                  <>
                    <Animated.View
                      style={[animatedStyle, styles.inputContainer]}
                    >
                      <ThemedText type='title'>
                        {currentComponent?.millName}
                      </ThemedText>
                      <ThemedText type='subtitle'>
                        {currentComponent?.componentName}
                      </ThemedText>
                      <ThemedInput
                        placeholder='0.00'
                        keyboardType='phone-pad'
                        placeholderTextColor={
                          Colors[schemeColor ?? 'light'].tabIconDefault
                        }
                        autoFocus={true}
                        value={temperature}
                        onChangeText={(text) => {
                          setTemperature(text);
                          currentComponent.temperature = Number(text);
                        }}
                      />
                    </Animated.View>
                    <ThemedView style={styles.buttonsContainer}>
                      <ThemedButton
                        title='Anterior'
                        style={styles.button}
                        handlePress={() => handleNavigation('prev')}
                      />
                      <ThemedButton
                        title='Siguiente'
                        style={styles.button}
                        handlePress={() =>
                          handleNavigation(
                            'next',
                            currentComponent?.id,
                            temperature
                          )
                        }
                      />
                    </ThemedView>
                  </>
                )}
              </>
            )}
          </ThemedView>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TemperatureDataScreen;
