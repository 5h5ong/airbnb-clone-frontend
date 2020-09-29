import axios from 'axios';

export const sendDataToServer = async (
  url: string,
  data: {}
): Promise<void> => {
  try {
    await axios({
      method: 'post',
      url,
      data,
    });
  } catch (error) {
    throw new Error('데이터를 보내는 중 에러가 발생하였습니다.');
  }
};
