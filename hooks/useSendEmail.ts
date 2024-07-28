import * as MailComposer from 'expo-mail-composer';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import { useSnapShotStore, useUserStore } from '@/store';

const useSendEmail = () => {
  const user = useUserStore((state) => state.user);
  const clearSnapShotStore = useSnapShotStore(
    (state) => state.clearSnapShotStore
  );

  async function handleSendMail(
    attachments: string,
    subject: string,
    body: string
  ) {
    try {
      const isAvailable = await MailComposer.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert(
          'Error',
          'MailComposer no está disponible en este dispositivo.'
        );
        return;
      }

      const options = {
        recipients: [`${user?.email}`],
        subject: subject,
        body: body,
        attachments: [attachments],
      };

      MailComposer.composeAsync(options)
        .then((result) => {
          if (result.status === MailComposer.MailComposerStatus.SENT) {
            Alert.alert('Éxito', 'Correo enviado correctamente.');
            clearSnapShotStore();
            router.navigate('/(tabs)');
          } else {
            Alert.alert('Error', 'El correo no se envió.');
          }
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
        });
    } catch (error) {
      console.log('error sending email:', error);
    }
  }

  return handleSendMail;
};

export default useSendEmail;
