import { useState, useEffect } from 'react';

interface IUseScrollReturnType {
  verticalScroll: number;
  /** 스크롤이 끝까지 내려갔는지 */
  isEnd: boolean;
}

const useScroll = (): IUseScrollReturnType => {
  const [verticalScroll, setVerticalScroll] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  // const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      // scrollTop의 값.
      setVerticalScroll(scrollTop);

      // 스크롤이 끝까지 내려갔는지 판단
      if (scrollHeight - scrollTop === clientHeight) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { verticalScroll, isEnd };
};

export default useScroll;
