import { Stack } from 'expo-router';
import { TemperatureTemplateProvider } from './context/TemperatureTemplateProvider';

interface TemperatureTemplateLayoutProps {
  children: React.ReactNode;
}

const TemperatureTemplateLayout = ({
  children,
}: TemperatureTemplateLayoutProps) => {
  return (
    <TemperatureTemplateProvider>
      <>{children}</>
      <Stack screenOptions={{ headerShown: false }} />
    </TemperatureTemplateProvider>
  );
};

export default TemperatureTemplateLayout;
