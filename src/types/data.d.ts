/**
 * 백엔드에서 들어오는 데이터들의 타입
 */

enum USER_ROLE {
  GUEST = 'guest',
  HOST = 'host',
}
/**
 * User Data 정의
 *
 * role : 에어비엔비 게스트, 호스트 역할 관리
 */
interface UserDataType {
  email: string;
  password: string;
  // 'guest'와 'host' 둘 중 하나만 넣어지게 만듬
  role: USER_ROLE;
  accommodations?: AccommodationsDataType[];
  reservations?: ReservationDataType[];
}

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
