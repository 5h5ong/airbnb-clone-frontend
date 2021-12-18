import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import checkLocalStorage from '../Functions/checkLocalStorage';
import useIsMounted from './useIsMounted';

type PickedAxiosConfigType = Pick<
  AxiosRequestConfig,
  'method' | 'url' | 'data'
>;

interface UseAxiosOption extends PickedAxiosConfigType {
  /**
   * 요청할 서버의 url
   * @example abcd/efg
   */
  url: string;
  /**
   * 마운트되고 요청을 어떻게 할 것인가
   * @remarks
   * 'now' === 바로 실행
   *
   * 'wait' === reload가 바뀔 때까지 기다림
   */
  start: 'now' | 'wait';
}

interface UseAxiosErrorType {
  data: {
    status: string;
    statusText: string;
  };
  state: boolean;
}
interface UseAxiosReturnType {
  error: UseAxiosErrorType;
  loading: boolean | undefined;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * axios를 사용하게 해주는 훅
 * @param opts useAxiosOption을 기반으로 값들을 받음. url은 일부만 받고 요청 때 환경변수와 합쳐 실제 주소를 만듬.
 */
export default <T extends any>(
  opts: UseAxiosOption
): UseAxiosReturnType & { data: T | undefined } => {
  const isMounted = useIsMounted();
  const [reload, setReload] = useState(false);
  /**
   * @remarks
   * 마운트되고 바로 데이터가 필요한 컴포넌트는 useAxios에서 데이터를 얻을 때까지 기다려야 함.
   * useAxios는 start가 'now'일 때만 바로 데이터를 요청하니 그 때는 로딩을 true로 만들어 줌.
   */
  const [loading, setLoading] = useState<boolean>(
    opts.start === 'now' ? true : false
  );
  const [data, setData] = useState<T>();
  const [error, setError] = useState<UseAxiosErrorType>({
    data: { status: '', statusText: '' },
    state: false,
  });

  /**
   * axios로 데이터 가져오기
   */
  const request = async (): Promise<void> => {
    // loading이 false면 true로 바꿈
    loading && setLoading(true);
    const token = checkLocalStorage('token');

    try {
      const response = await axios({
        ...opts,
        url: process.env.REACT_APP_BACKEND_URL?.concat(opts.url),
        // token이 존재한다면 인증 헤더에 token을 추가
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      // 에러 초기화 및 데이터 집어넣기
      setError({ data: { status: '', statusText: '' }, state: false });
      setData(response.data);
      setLoading(false);
      return;
    } catch (e) {
      // response의 에러코드 및 메세지 추출 & 리턴
      const returnObject = {
        status: e.response.status,
        statusText: e.response.statusText,
      };
      setError({ data: { ...returnObject }, state: true });
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    isMounted() && opts.start === 'now' && request();
  }, []);
  useEffect(() => {
    if (reload && isMounted()) {
      request();
    }
    setReload(false);
  }, [reload]);

  return { data, error, loading, setReload };
};
