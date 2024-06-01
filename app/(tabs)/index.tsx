import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import {
  Carousel,
  FooterHomeView,
  HomeNavView,
} from '../../components/homeComponents';
import { styles } from '@/components/homeComponents/styles/Home.styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <ThemedView style={styles.container}>
        <HomeNavView />
        <ThemedView style={styles.titleContainer}>
          <ThemedText type='title' style={styles.text}>
            <ThemedText type='title' style={styles.title}>
              Crea
            </ThemedText>{' '}
            tu formato o escoge uno
          </ThemedText>
          <ThemedText type='subtitle' style={styles.text}>
            y empieza con las herramientas que necesitas
          </ThemedText>
        </ThemedView>
        <Carousel />
        <FooterHomeView />
      </ThemedView>
    </SafeAreaView>
  );
}
