import axios from 'axios';

const requestServer = async (url: string, data: {}) => {
  // 개발환경과 실제환경의 주소 변경을 쉽게 만들기 위해서
  const baseUrl = process.env.REACT_APP_BACKEND_URL as string;
  // 실제 사용될 api url
  const realUrl = baseUrl.concat(url);

  try {
    const response = await axios({
      method: 'post',
      url: realUrl,
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error('서버로 데이터 전송 중 에러 발생');
  }
};

export default requestServer;
