import { useEffect } from 'react';
import { useState } from 'react';

interface UseDeviceHeightReturnType {
  height: number;
}

const useDeviceHeight = (): UseDeviceHeightReturnType => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleInnerHeight = () => {
      const { innerHeight } = window;
      setHeight(innerHeight);
    };

    window.addEventListener('resize', handleInnerHeight);
    return () => window.removeEventListener('resize', handleInnerHeight);
  }, []);

  return { height };
};

export default useDeviceHeight;
