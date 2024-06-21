import { useMemo } from 'react';
import { useUserStore } from '@/store';

const useCustomHeader = () => {
  const accessToken = useUserStore((state) => state.accessToken);

  const customHeader = useMemo(() => {
    return {
      headers: {
        bearer: `${accessToken}`,
        'Content-Type': 'application/json',
      },
    };
  }, [accessToken]);

  return { customHeader };
};

export default useCustomHeader;
