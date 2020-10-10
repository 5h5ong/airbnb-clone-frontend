import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import checkLocalStorage from '../Functions/checkLocalStorage';

type UseAxiosOption = Pick<AxiosRequestConfig, 'method' | 'url' | 'data'>;
interface UseAxiosReturnType {
  error: boolean | undefined;
  data: {} | undefined;
  loading: boolean | undefined;
}

export default (opts: UseAxiosOption): UseAxiosReturnType => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<{}>();
  const [error, setError] = useState<boolean>();

  /**
   * axios로 데이터 가져오기
   */
  const request = async (): Promise<void> => {
    const token = checkLocalStorage('token');

    try {
      setLoading(true);
      const response = await axios({
        ...opts,
        // token이 존재한다면 인증 헤더에 token을 추가
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
      setLoading(false);

      // 에러 초기화 및 데이터 집어넣기
      setError(false);
      setData(response.data);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return { data, error, loading };
};
