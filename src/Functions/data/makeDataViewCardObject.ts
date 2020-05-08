import { ViewCardProps } from '../../components/Cards/ViewCard';

/**
 * 들어온 data를 `ViewCard` prop의 형식에 맞춰 object로 가공해 반환함.
 * @param data raw data
 */
const makeDataViewCardObject = (data: any) => {
  const object: ViewCardProps[] = data.map(
    (d: any): ViewCardProps => ({
      image: d.image,
      country: d.country,
      name: d.name,
      price: d.price,
    })
  );

  return object;
};

export default makeDataViewCardObject;
