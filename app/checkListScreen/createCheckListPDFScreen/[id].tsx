import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import { Colors } from '@/constants';
import {
  ErrorView,
  LoaderView,
  NavView,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/CreateCheckListPDFScreen.styles';
import { useCreateCheckListPDFScreen } from './hooks';

const CreateCheckListPDFScreen = () => {
  const { isPending, isError } = useCreateCheckListPDFScreen();

  return (
    <SafeAreaView>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <ThemedView style={styles.container}>
        <NavView />
        {isPending ? (
          <LoaderView />
        ) : (
          <ThemedView style={styles.wrapper}>
            {isError ? (
              <ErrorView title='Oops! ocurrió un problema al cargar el formulario.' />
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <ThemedView>
                  <ThemedText>Titulo</ThemedText>
                  <ThemedText>Descripcion</ThemedText>
                </ThemedView>
              </ScrollView>
            )}
          </ThemedView>
        )}
      </ThemedView>
    </SafeAreaView>
  );
};

export default CreateCheckListPDFScreen;
