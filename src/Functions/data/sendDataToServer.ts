import axios, { AxiosResponse } from 'axios';

export const sendDataToServer = async (
  url: string,
  data: {}
): Promise<AxiosResponse> => {
  try {
    const responseData = await axios({
      method: 'post',
      url,
      data,
    });
    return responseData;
  } catch (error) {
    throw new Error('데이터를 보내는 중 에러가 발생하였습니다.');
  }
};
