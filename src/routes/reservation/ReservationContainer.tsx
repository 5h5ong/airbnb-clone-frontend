import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import requestServer from '../../Functions/data/requestServer';
import { sendDataToServer } from '../../Functions/data/sendDataToServer';
import ReservationPresenter from './ReservationPresenter';

interface ReservationContainerType {
  accommodationData: Omit<AccommodationsDataType, 'requestUserReservation'>;
  /**
   * 로그인 한 유저의 해당 숙소 예약 데이터
   * @remarks
   * 유저가 예약 생성을 했는지 안 했는지 플래그로 사용 중임.
   */
  requestUserReservationData: ReservationDataType | undefined;
}

const ReservationContainer: React.FC<ReservationContainerType> = ({
  accommodationData,
  requestUserReservationData,
}) => {
  console.log({ requestUserReservationData: requestUserReservationData });
  const userContextData = useContext(UserContext);

  // 체류할 기간을 저장하는 state
  const [firstSelectedDate, setFirstSelectedDate] = useState<Date | undefined>(
    requestUserReservationData
      ? new Date(requestUserReservationData.reservationDate.start)
      : undefined
  );
  const [secondSelectedDate, setSecondSelectedDate] = useState<
    Date | undefined
  >(
    requestUserReservationData
      ? new Date(requestUserReservationData.reservationDate.end)
      : undefined
  );
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
  // 예약 상태
  const [isReserve, setIsReserve] = useState<boolean>(
    !!requestUserReservationData
  );

  /** CheckIn <-> CheckOut */
  const checkInOrCheckOutOnClick = () => {
    setToggleCheckInAndOut((s) => !s);
  };
  /** Create new reservation */
  const createNewReservationOnClick = async () => {
    // 필요한 데이터 null 검증 및 분리하기
    if (userContextData && firstSelectedDate && secondSelectedDate) {
      const { id: userId } = userContextData.user;
      const { id: accommodationsId } = accommodationData;
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
        setIsReserve(true);
      } catch (e) {}
    }
  };
  /**
   * 예약 취소 fn
   */
  const cancelReservation = async () => {
    if (requestUserReservationData) {
      const { id } = requestUserReservationData;

      try {
        setCreateReservationRequestIsLoading(true);
        await requestServer('get', `reservation/delete/${id}`);
        setIsReserve(false);
        setCreateReservationRequestIsLoading(false);
      } catch {
        setCreateReservationRequestIsLoading(false);
        return;
      }
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
    setTotalReservationPrice(totalReservationDate * accommodationData.price);
  }, [totalReservationDate, accommodationData]);

  return (
    <ReservationPresenter
      accommodationsData={accommodationData}
      isReserve={isReserve}
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
      cancelReservation={cancelReservation}
    />
  );
};

export default ReservationContainer;
