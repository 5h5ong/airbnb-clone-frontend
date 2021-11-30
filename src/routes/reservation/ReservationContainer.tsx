import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import ReservationPresenter from './ReservationPresenter';

const ReservationContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useAxios<AccommodationsDataType>({
    url: `http://localhost:4000/accommodations/${id}`,
  });
  //
  // 체류할 기간을 저장하는 state
  const [firstSelectedDate, setFirstSelectedDate] = useState<Date | undefined>(
    undefined
  );
  const [secondSelectedDate, setSecondSelectedDate] = useState<
    Date | undefined
  >(undefined);
  // 체크인, 체크아웃 선택 상태
  // true === checkout, false === checkin
  const [toggleCheckInAndOut, setToggleCheckInAndOut] = useState<boolean>(
    false
  );
  /** CheckIn <-> CheckOut */
  const checkInOrCheckOutOnClick = () => {
    setToggleCheckInAndOut((s) => !s);
  };

  if (!loading && data) {
    return (
      <ReservationPresenter
        accommodationsData={data}
        firstSelectedDate={firstSelectedDate}
        secondSelectedDate={secondSelectedDate}
        setFirstSelectedDate={setFirstSelectedDate}
        setSecondSelectedDate={setSecondSelectedDate}
        toggleCheckInAndOut={toggleCheckInAndOut}
        setToggleCheckInAndOut={setToggleCheckInAndOut}
        checkInOrCheckOutOnClick={checkInOrCheckOutOnClick}
      />
    );
  } else {
    return <div>loading...</div>;
  }
};

export default ReservationContainer;
