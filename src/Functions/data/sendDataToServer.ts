import axios, { AxiosResponse } from 'axios';
import checkLocalStorage from '../checkLocalStorage';

export const sendDataToServer = async (
  url: string,
  data: {}
): Promise<AxiosResponse> => {
  // 인증이 필요한 경우를 위해 헤더의 Authorization에 jwt token을 넣어줌
  const token = checkLocalStorage('token');
  try {
    const responseData = await axios({
      method: 'post',
      url,
      data,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });
    return responseData;
  } catch (error) {
    throw new Error('데이터를 보내는 중 에러가 발생하였습니다.');
  }
};
