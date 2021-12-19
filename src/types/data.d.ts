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
  accommodations?: string[];
  reservations?: string[];
}
