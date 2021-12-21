/**
 * Dashboard Component에서 사용될 타입
 * @remarks
 * DashboardContainer, DashboardPreserter에서 통합하여 사용될 것임.
 * Presenter로 넘어가는 과정에서 달라질 수도 있는데, 그 때에는 적절한
 * 형태로 변환되어 사용됨.
 */
type DashboardProps = Pick<
  UserDataType,
  'email' | 'accommodations' | 'reservations'
>;

interface ReservationType {
  start: string;
  end: string;
}
interface ReservationDataType {
  id: string;
  userId: string;
  /** 예약한 숙소의 아이디 */
  accommodationsId: string;
  accommodationData: AccommodationsDataType;
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
