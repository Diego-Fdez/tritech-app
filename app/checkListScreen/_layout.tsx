import { Stack } from 'expo-router';
import { CheckListProvider } from './context/checkListProvider';

interface CheckListLayoutProps {
  children: React.ReactNode;
}

const CheckListLayout = ({ children }: CheckListLayoutProps) => {
  return (
    <CheckListProvider>
      <>{children}</>
      <Stack screenOptions={{ headerShown: false }} />
    </CheckListProvider>
  );
};

export default CheckListLayout;
