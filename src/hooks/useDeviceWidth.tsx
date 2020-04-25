import { useState, useEffect } from 'react';

interface IUseDeviceWidthReturnType {
  width: number;
}

/**
 * 변경된 width 값을 추적하는 hook
 */
const useDeviceWidth = (): IUseDeviceWidthReturnType => {
  // 초기에 innerWidth를 넣어줘서 문제가 생기지 않도록 만듬
  const [width, setWidth] = useState(window.innerWidth);

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
