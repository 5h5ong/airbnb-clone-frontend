import React from 'react';
import { useParams } from 'react-router-dom';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import useAxios from '../../hooks/useAxios';
import ReservationContainer from './ReservationContainer';

const Index: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useAxios<AccommodationsDataType>({
    url: `http://localhost:4000/accommodations/computed/${id}`,
  });

  if (!loading && data) {
    // `requestUserReservationData`는 `data`에 들어있지만 둘을 나눠 파악하기 쉽게 만듬
    const accommodationData: Omit<
      AccommodationsDataType,
      'requestUserReservation'
    > = {
      ...data,
    };

    // data.requestUserReservation이 빈 오브젝트인지 확인
    // 빈 오브젝트라면 requestUserReservationData에 undefined
    const isRequestUserReservationDataIsEmpty =
      JSON.stringify(data.requestUserReservation) === '{}';

    return (
      <ReservationContainer
        accommodationData={accommodationData}
        requestUserReservationData={
          isRequestUserReservationDataIsEmpty
            ? undefined
            : data.requestUserReservation
        }
      />
    );
  } else {
    return <div>loading...</div>;
  }
};

export default WithHeaderPadding(Index);
