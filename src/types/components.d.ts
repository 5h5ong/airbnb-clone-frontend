interface ReservationType {
  start: string;
  end: string;
}
interface ReservationDataType {
  userId: string;
  /** 예약한 숙소의 아이디 */
  accommodationsId: string;
  /** 예약한 날짜 */
  reservationDate: ReservationType;
  /** 발행 날짜 */
  issuedDate: string;
}
interface AccommodationsDataType {
  id: string;
  address: string;
  name: string;
  price: number;
  image: string[];
  user: string;
  lng: number;
  lat: number;
  // 로그인 한 유저의 해당 숙소 예약 정보
  requestUserReservation: ReservationDataType;
}
