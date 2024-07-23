import { useQuery, useMutation } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { useLocalSearchParams, useNavigation, router } from 'expo-router';
import {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { API_URL } from '@/constants';
import { useCustomHeader } from '@/hooks';
import {
  EMPTY_DATA,
  SuccessMutationResponse,
  TemplateDataResponseInterface,
} from '../interfaces';
import { templateTemperatureDataAdapter } from '../adapters';
import { useTemperatureDataStore } from '@/store';

const useTemperatureData = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { customHeader } = useCustomHeader();
  const currentIndex = useTemperatureDataStore((state) => state.currentIndex);
  const setCurrentIndex = useTemperatureDataStore(
    (state) => state.setCurrentIndex
  );
  const setCurrentComponent = useTemperatureDataStore(
    (state) => state.setCurrentComponent
  );
  const temperaturesData = useTemperatureDataStore(
    (state) => state.temperaturesData
  );
  const setTemperaturesData = useTemperatureDataStore(
    (state) => state.setTemperaturesData
  );
  const [temperature, setTemperature] = useState<string>('');
  const shakeAnimation = useSharedValue<number>(0);

  // fetch data from DB
  const { data, isError, isPending } = useQuery({
    queryKey: ['temperatureData'],
    queryFn: getTemplateById,
    enabled: !!id,
    initialData: EMPTY_DATA,
  });

  //Updates the current component with the corresponding temperature.
  //It checks whether mill component data exists and if the length is greater than zero, then the current temperature of the current component is obtained and the corresponding status is updated.
  useEffect(() => {
    if (data && data.millComponents && data.millComponents.length > 0) {
      const currentComponent = data.millComponents[currentIndex];
      const currentTemperature =
        temperaturesData.find((t) => t.millComponentId === currentComponent.id)
          ?.temperature || 0;
      setCurrentComponent({
        ...currentComponent,
        temperature: currentTemperature,
      });
      setTemperature(currentTemperature.toString());
    }
  }, [data, currentIndex, temperaturesData, setCurrentComponent]);

  //function to get template by id from DB
  async function getTemplateById() {
    const { data }: AxiosResponse<TemplateDataResponseInterface> = await axios(
      `${API_URL}/templates/id/${id}`,
      customHeader
    );

    return templateTemperatureDataAdapter(data?.data);
  }

  //It is responsible for handling navigation between temperature components.
  //The function updates the temperature data, current index, and current component based on the direction provided.
  //It also performs a shake animation at the end of the show.
  const handleNavigation = (
    direction: string,
    componentId?: string,
    temperatureData?: string
  ) => {
    if (direction === 'prev' && currentIndex > 0) {
      updateTemperatureData(
        data?.millComponents[currentIndex]?.id,
        Number(temperature)
      );
      setCurrentIndex(currentIndex - 1);
      const prevComponent = data?.millComponents[currentIndex - 1];
      const prevTemperature =
        temperaturesData.find((t) => t?.millComponentId === prevComponent?.id)
          ?.temperature || 0;
      setCurrentComponent({
        ...prevComponent,
        temperature: prevTemperature,
      });
      setTemperature(prevTemperature.toString());
    } else if (
      direction === 'next' &&
      currentIndex <= data?.millComponents.length - 1
    ) {
      if (currentIndex < data?.millComponents.length - 1) {
        updateTemperatureData(componentId || '', Number(temperatureData));
        setCurrentIndex(currentIndex + 1);
        const nextComponent = data?.millComponents[currentIndex + 1];
        const nextTemperature =
          temperaturesData.find((t) => t?.millComponentId === nextComponent?.id)
            ?.temperature || 0;
        setCurrentComponent({
          ...nextComponent,
          temperature: nextTemperature,
        });
        setTemperature(nextTemperature.toString());
      }

      if (currentIndex === data?.millComponents.length - 1) {
        updateTemperatureData(componentId || '', Number(temperatureData));
        Alert.alert(
          'Guardar Temperaturas',
          '¿Desea guardar las temperaturas?',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Guardar',
              onPress: () => {
                mutation.mutate();
                router.navigate(`/temperatureDataReportScreen/${id}`);
              },
            },
          ]
        );
      }
    }

    shake();
  };

  // create a custom animation effect
  const shake = () => {
    shakeAnimation.value = withTiming(
      10,
      {
        duration: 100,
        easing: Easing.bounce,
      },
      () => {
        shakeAnimation.value = withTiming(0, {
          duration: 100,
          easing: Easing.bounce,
        });
      }
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: shakeAnimation.value,
        },
      ],
    };
  });

  //función que busca si existe el millComponentId dentro del temperaturesData, si no existe agregar el millComponentId y la temperature,
  //si ya existe compara si la temperatura es la misma, si no es igual la cambia por la nueva, si no, no hace nada
  const updateTemperatureData = (
    millComponentId: string,
    newTemperature: number
  ) => {
    const index = temperaturesData?.findIndex(
      (data) => data.millComponentId === millComponentId
    );

    if (index === -1) {
      // Si el millComponentId no existe, agrega una nueva entrada
      setTemperaturesData([
        ...temperaturesData,
        { millComponentId, temperature: newTemperature },
      ]);
    } else {
      // Si el millComponentId existe, compara las temperaturas
      if (temperaturesData[index].temperature !== newTemperature) {
        // Si las temperaturas son diferentes, actualiza la temperatura
        const updatedData = [...temperaturesData];
        updatedData[index] = { millComponentId, temperature: newTemperature };
        setTemperaturesData(updatedData);
      }
    }
  };

  //check if the screen is on focus
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (e.data.action.type === 'GO_BACK' || !navigation.isFocused) {
        setCurrentIndex(0);
        setTemperature('');
      }
    });

    return unsubscribe;
  }, [navigation]);

  async function handleSaveTemperatures() {
    const temperatureData = temperaturesData?.map((data) => ({
      millComponentId: data?.millComponentId,
      temperature: data?.temperature,
      date: new Date(),
    }));

    const { data }: SuccessMutationResponse = await axios.post(
      `${API_URL}/temperature-data`,
      temperatureData,
      customHeader
    );

    if (data.statusCode === 201) {
      Alert.alert('Success', 'Se han guardado las temperaturas!');
      setTemperaturesData([]);
      setCurrentIndex(0);
    }
  }

  const mutation = useMutation({
    mutationFn: handleSaveTemperatures,
  });

  return {
    isError,
    isPending,
    handleNavigation,
    animatedStyle,
    temperature,
    setTemperature,
  };
};

export default useTemperatureData;
