interface ButtonsDataInterface {
  id: string;
  image: string;
  title: string;
  redirectTo: string;
}

export const BUTTONS_DATA: ButtonsDataInterface[] = [
  {
    id: '1',
    image: require('@/assets/images/checklist.webp'),
    title: 'Checklist',
    redirectTo: '/temperatureTemplate',
  },
  {
    id: '2',
    image: require('@/assets/images/temperature.webp'),
    title: 'Temperaturas Ingenios',
    redirectTo: '/temperatureTemplate',
  },
  {
    id: '3',
    image: require('@/assets/images/indices.webp'),
    title: 'Indices',
    redirectTo: '/temperatureTemplate',
  },
  {
    id: '4',
    image: require('@/assets/images/contact.webp'),
    title: 'Compartir contacto',
    redirectTo: '/temperatureTemplate',
  },
];
