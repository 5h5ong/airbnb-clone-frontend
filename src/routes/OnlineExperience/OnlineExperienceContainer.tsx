import React, { useEffect, useState } from 'react';
import OnlineExperiencePresenter from './OnlineExperiencePresenter';
import getDataFromServer from '../../Functions/data/getDataFromServer';
import makeDataViewCardObject from '../../Functions/data/makeDataViewCardObject';
import { ViewCardProps } from '../../components/Cards/ViewCard';

const OnlineExperienceContainer: React.FC = () => {
  const [data, setData] = useState<ViewCardProps[]>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const rawData = await getDataFromServer(
        'http://localhost:4000/lists/online-experiences'
      );
      const object = makeDataViewCardObject(rawData);
      setData(object);
    };
    fetchData();
  }, []);

  return <OnlineExperiencePresenter data={data} />;
};

export default OnlineExperienceContainer;
