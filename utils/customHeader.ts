import { useUserStore } from '@/store';

export function customHeader() {
  const accessToken = useUserStore((state) => state.accessToken);

  const customHeader = {
    headers: {
      bearer: `${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  return customHeader;
}
