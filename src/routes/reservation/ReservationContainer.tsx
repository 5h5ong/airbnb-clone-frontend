import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { sendDataToServer } from '../../Functions/data/sendDataToServer';
import useAxios from '../../hooks/useAxios';
import ReservationPresenter from './ReservationPresenter';

const ReservationContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useAxios<AccommodationsDataType>({
    url: `http://localhost:4000/accommodations/${id}`,
  });
  const userContextData = useContext(UserContext);

  // 체류할 기간을 저장하는 state
  const [firstSelectedDate, setFirstSelectedDate] = useState<Date | undefined>(
    undefined
  );
  const [secondSelectedDate, setSecondSelectedDate] = useState<
    Date | undefined
  >(undefined);
  // 총 예약 날짜
  const [totalReservationDate, setTotalReservationDate] = useState<number>(0);
  // 모든 요소를 합산한 금액(청구될 금액)
  const [totalReservationPrice, setTotalReservationPrice] = useState<number>(0);
  // 체크인, 체크아웃 선택 상태
  // true === checkout, false === checkin
  const [toggleCheckInAndOut, setToggleCheckInAndOut] = useState<boolean>(
    false
  );
  const [
    createReservationRequestIsLoading,
    setCreateReservationRequestIsLoading,
  ] = useState<boolean>(false);

  /** CheckIn <-> CheckOut */
  const checkInOrCheckOutOnClick = () => {
    setToggleCheckInAndOut((s) => !s);
  };
  /** Create new reservation */
  const createNewReservationOnClick = async () => {
    // 필요한 데이터 null 검증 및 분리하기
    if (userContextData && data && firstSelectedDate && secondSelectedDate) {
      const { id: userId } = userContextData.user;
      const { id: accommodationsId } = data;
      console.log(`Create Reservation ${userId} ${accommodationsId}`);
      try {
        setCreateReservationRequestIsLoading(true);
        await sendDataToServer('http://localhost:4000/reservation', {
          accommodationsId: accommodationsId,
          reservationDate: {
            start: firstSelectedDate.toISOString(),
            end: secondSelectedDate.toISOString(),
          },
          issuedDate: new Date().toISOString(),
        });
        setCreateReservationRequestIsLoading(false);
      } catch (e) {}
    }
  };

  // 체크인과 체크아웃 사이의 날짜 간격을 계산함
  useEffect(() => {
    if (firstSelectedDate && secondSelectedDate) {
      // 체크인, 체크아웃을 밀리초로
      const [firstDateMilliseconds, secondDateMilliseconds] = [
        firstSelectedDate.getTime(),
        secondSelectedDate.getTime(),
      ];
      // 밀리초 간격 계산
      const intervalOfMilliseconds =
        secondDateMilliseconds - firstDateMilliseconds;
      // 날짜로 변환
      const oneDayMilliseconds = 1000 * 60 * 60 * 24;
      const intervalOfDate = Math.round(
        intervalOfMilliseconds / oneDayMilliseconds
      );
      // 저장
      setTotalReservationDate(intervalOfDate);
    }
  }, [firstSelectedDate, secondSelectedDate]);
  // 합산 금액을 계산함
  useEffect(() => {
    if (data) {
      setTotalReservationPrice(totalReservationDate * data.price);
    }
  }, [totalReservationDate, data]);

  if (!loading && data) {
    return (
      <ReservationPresenter
        accommodationsData={data}
        firstSelectedDate={firstSelectedDate}
        secondSelectedDate={secondSelectedDate}
        setFirstSelectedDate={setFirstSelectedDate}
        setSecondSelectedDate={setSecondSelectedDate}
        totalReservationDate={totalReservationDate}
        totalReservationPrice={totalReservationPrice}
        toggleCheckInAndOut={toggleCheckInAndOut}
        setToggleCheckInAndOut={setToggleCheckInAndOut}
        checkInOrCheckOutOnClick={checkInOrCheckOutOnClick}
        createNewReservationOnClick={createNewReservationOnClick}
        createReservationButtonIsLoading={createReservationRequestIsLoading}
      />
    );
  } else {
    return <div>loading...</div>;
  }
};

export default ReservationContainer;
