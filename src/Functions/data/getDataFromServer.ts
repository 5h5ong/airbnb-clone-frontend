import axios from 'axios';

/**
 * url에서 데이터 가져옴.
 */
export default async (url: string): Promise<any> => {
  const data = await axios.get(url);

  return data.data;
};
