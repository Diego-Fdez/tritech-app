import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText, ThemedView } from '@/components';
import { Colors } from '@/constants/Colors';
import { styles } from './styles/Profile.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { UserDataView } from './components';

const Profile = () => {
  const colorScheme = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <ThemedView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons
            name='arrow-back-ios'
            size={24}
            color={Colors[colorScheme ?? 'light'].text}
          />
        </TouchableOpacity>
        <Image
          source={require('@/assets/images/personal.webp')}
          style={styles.profileImage}
        />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView style={styles.scrollContainer}>
            <ThemedView style={styles.wrapper}>
              <ThemedText type='title'>Tus datos</ThemedText>
              <ThemedView style={styles.switchContainer}>
                <ThemedText type='defaultSemiBold'>Editar</ThemedText>
                <Switch
                  trackColor={{ false: '#767577', true: '#0a7ea4' }}
                  thumbColor={isEnabled ? '#f4f3f4' : '#ccc'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </ThemedView>
              <UserDataView isEnable={isEnabled} />
            </ThemedView>
          </ScrollView>
        </KeyboardAvoidingView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Profile;
