import { useState, useEffect } from 'react';

interface IUseScrollReturnType {
  verticalScroll: number;
}

const useScroll = (): IUseScrollReturnType => {
  const [verticalScroll, setVerticalScroll] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const { scrollTop } = document.documentElement;
      setVerticalScroll(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { verticalScroll };
};

export default useScroll;
