import { useState, useEffect } from 'react';

interface IUseDeviceWidthReturnType {
  width: number;
}

/**
 * 변경된 width 값을 추적하는 hook
 */
const useDeviceWidth = (): IUseDeviceWidthReturnType => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleInnerWidth = (): void => {
      const { innerWidth } = window;
      setWidth(innerWidth);
    };

    window.addEventListener('resize', handleInnerWidth);
    return (): void => window.removeEventListener('resize', handleInnerWidth);
  }, []);

  return { width };
};

export default useDeviceWidth;
