import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Colors, tintColorLight } from '@/constants';
import {
  ErrorView,
  NavView,
  NoDataView,
  ThemedText,
  ThemedView,
} from '@/components';
import { styles } from './styles/TemplatesByClientIdScreen.styles';
import { useTemplateByClientId } from './hooks';

const TemplatesByClientIdScreen = () => {
  const { isError, data, isPending } = useTemplateByClientId();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style='auto'
        translucent={false}
        backgroundColor={Colors.light.tint}
      />
      <ThemedView style={styles.container}>
        <NavView />
        <ThemedView style={styles.wrapper}>
          {isPending ? (
            <ActivityIndicator size='large' color={tintColorLight} />
          ) : (
            <>
              {data?.length > 0 ? (
                <>
                  <ThemedText type='title' style={styles.title}>
                    Formatos disponibles
                  </ThemedText>
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item?.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={styles.button}>
                        <Image
                          source={require('@/assets/images/graphic.webp')}
                          style={styles.image}
                        />
                        <ThemedView style={styles.textContainer}>
                          <ThemedText type='subtitle'>
                            {item?.templateName?.toUpperCase()}
                          </ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.circleForm} />
                      </TouchableOpacity>
                    )}
                    horizontal={false}
                  />
                </>
              ) : (
                <>
                  {isError ? (
                    <ErrorView title='Ocurrió un problema cargando los formatos.' />
                  ) : (
                    <NoDataView title='Este cliente aún no tiene formatos creados.' />
                  )}
                </>
              )}
            </>
          )}
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default TemplatesByClientIdScreen;
