import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

/**
 * 컴포넌트가 마운트 됐는지 안됐는지 확인함
 * @returns true - mount, false - unmount
 */
const useIsMounted = () => {
  // useRef는 상태가 변해도 리로딩이 발생하지 않음
  // 상태가 변하면 바로 가져다 쓸 수 있음
  const isMountedRef = useRef(false);
  const isMounted = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    // mount 될 때만 실행
    isMountedRef.current = true;

    // unmount될 때만 실행
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
