import { useRef, useEffect, useState } from 'react';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import { captureRef } from 'react-native-view-shot';
import { useNavigation } from 'expo-router';
import { useSnapShotStore } from '@/store';
import useTemperatureDataReportScreen from './useTemperatureDataReportScreen';
import { htmlEmailBody, htmlReportBody } from '../utils';
import { useSendEmail } from '@/hooks';
import { randomIdGenerator } from '@/utils';

const useSnapShoot = () => {
  const { clientName } = useTemperatureDataReportScreen();
  const navigation = useNavigation();
  const gearTandem1SnapShootRef = useRef(null);
  const gearTandem2SnapShootRef = useRef(null);
  const mill1Tandem1SnapShootRef = useRef(null);
  const mill2Tandem1SnapShootRef = useRef(null);
  const mill3Tandem1SnapShootRef = useRef(null);
  const mill4Tandem1SnapShootRef = useRef(null);
  const mill5Tandem1SnapShootRef = useRef(null);
  const mill6Tandem1SnapShootRef = useRef(null);
  const mill1Tandem2SnapShootRef = useRef(null);
  const mill2Tandem2SnapShootRef = useRef(null);
  const mill3Tandem2SnapShootRef = useRef(null);
  const mill4Tandem2SnapShootRef = useRef(null);
  const mill5Tandem2SnapShootRef = useRef(null);
  const mill6Tandem2SnapShootRef = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refIsReady, setRefIsReady] = useState<boolean>(false);
  const setSnapShoot = useSnapShotStore((state) => state.setSnapshot);
  const snapShots = useSnapShotStore((state) => state.snapShots);
  const clearSnapShotStore = useSnapShotStore(
    (state) => state.clearSnapShotStore
  );
  const handleSendMail = useSendEmail();

  async function convertImageToBase64(imageUri: any) {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error converting image to Base64:', error);
      throw error;
    }
  }

  async function generateImage(ref: any) {
    try {
      if (ref.current) {
        const image: string = await captureRef(ref.current, {
          format: 'png',
          quality: 0.5,
        });

        const imageBase64 = await convertImageToBase64(image);

        setSnapShoot(imageBase64);
      }
    } catch (error) {
      console.log('snapShoot error:', error);
    }
  }

  async function handleGenerateImages() {
    await Promise.all([
      generateImage(mill1Tandem1SnapShootRef),
      generateImage(mill2Tandem1SnapShootRef),
      generateImage(mill3Tandem1SnapShootRef),
      generateImage(mill4Tandem1SnapShootRef),
      generateImage(mill5Tandem1SnapShootRef),
      generateImage(mill6Tandem1SnapShootRef),
      generateImage(mill1Tandem2SnapShootRef),
      generateImage(mill2Tandem2SnapShootRef),
      generateImage(mill3Tandem2SnapShootRef),
      generateImage(mill4Tandem2SnapShootRef),
      generateImage(mill5Tandem2SnapShootRef),
      generateImage(mill6Tandem2SnapShootRef),
      generateImage(gearTandem1SnapShootRef),
      generateImage(gearTandem2SnapShootRef),
    ]);
    setRefIsReady(true);
  }

  async function handleCreatePDF() {
    try {
      setIsLoading(true);

      const { uri } = await Print.printToFileAsync({
        html: htmlReportBody(snapShots, clientName || ''),
      });

      const newPath = `${
        FileSystem.documentDirectory
      }reporte_${randomIdGenerator()}.pdf`;
      await FileSystem.moveAsync({
        from: uri,
        to: newPath,
      });

      await handleSendMail(
        newPath,
        'Reporte de temperaturas de molinos',
        htmlEmailBody(clientName || '')
      );
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    } finally {
      setIsLoading(false);
      setRefIsReady(false);
      clearSnapShotStore();
    }
  }

  useEffect(() => {
    // Asegurarse de que las referencias estén listas antes de capturarlas
    const timeoutId = setTimeout(() => {
      handleGenerateImages();
    }, 2000); // Esperar 1 segundo antes de generar las imágenes

    return () => clearTimeout(timeoutId); // Limpiar el timeout si el componente se desmonta
  }, []);

  //check if the screen is on focus
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (e.data.action.type === 'GO_BACK' || !navigation.isFocused) {
        setIsLoading(false);
        setRefIsReady(false);
        clearSnapShotStore();
      }
    });

    return unsubscribe;
  }, [navigation]);

  return {
    gearTandem1SnapShootRef,
    gearTandem2SnapShootRef,
    mill1Tandem1SnapShootRef,
    mill2Tandem1SnapShootRef,
    mill3Tandem1SnapShootRef,
    mill4Tandem1SnapShootRef,
    mill5Tandem1SnapShootRef,
    mill6Tandem1SnapShootRef,
    mill1Tandem2SnapShootRef,
    mill2Tandem2SnapShootRef,
    mill3Tandem2SnapShootRef,
    mill4Tandem2SnapShootRef,
    mill5Tandem2SnapShootRef,
    mill6Tandem2SnapShootRef,
    handleCreatePDF,
    isLoading,
    handleGenerateImages,
    refIsReady,
  };
};

export default useSnapShoot;
