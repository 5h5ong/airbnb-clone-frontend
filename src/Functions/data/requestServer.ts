import axios from 'axios';
import checkLocalStorage from '../checkLocalStorage';

type ContentType = 'multipart/form-data';

interface RequestServerOpts {
  contentType: ContentType;
}
type AxiosMethod = 'post' | 'get' | 'delete';

const requestServer = async (
  method: AxiosMethod,
  url: string,
  data?: {},
  opts?: RequestServerOpts
) => {
  // 개발환경과 실제환경의 주소 변경을 쉽게 만들기 위해서
  const baseUrl = process.env.REACT_APP_BACKEND_URL as string;
  // 실제 사용될 api url
  const realUrl = baseUrl.concat(url);
  const token = checkLocalStorage('token');

  try {
    const response = await axios({
      method: method,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        // content-type이 존재한다면 넣기
        ContentType: opts?.contentType,
      },
      url: realUrl,
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error('서버로 데이터 전송 중 에러 발생');
  }
};

export default requestServer;
