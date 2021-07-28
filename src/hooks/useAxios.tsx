import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import checkLocalStorage from '../Functions/checkLocalStorage';

type UseAxiosOption = Pick<AxiosRequestConfig, 'method' | 'url' | 'data'>;

interface UseAxiosErrorType {
  data: {
    status: string;
    statusText: string;
  };
  state: boolean;
}
interface UseAxiosReturnType {
  error: UseAxiosErrorType;
  data: any;
  loading: boolean | undefined;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

export default (opts: UseAxiosOption): UseAxiosReturnType => {
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<{}>();
  const [error, setError] = useState<UseAxiosErrorType>({
    data: { status: '', statusText: '' },
    state: false,
  });

  /**
   * axios로 데이터 가져오기
   */
  const request = async (): Promise<void> => {
    setLoading(true);
    // 토큰 확인
    const token = checkLocalStorage('token');

    // 토큰이 존재하지 않으면 에러 발생 후 끝내기
    if (!token) {
      setError({
        data: { status: '1', statusText: 'Token Not Exists' },
        state: true,
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios({
        ...opts,
        // token이 존재한다면 인증 헤더에 token을 추가
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
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
      return;
    }
  };

  useEffect(() => {
    request();
  }, []);
  useEffect(() => {
    if (reload) {
      request();
    }
    setReload(false);
  }, [reload]);

  return { data, error, loading, setReload };
};
