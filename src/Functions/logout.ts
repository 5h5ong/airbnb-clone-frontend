/**
 * 로그아웃
 *
 * storage의 token을 없애 로그아웃함
 * true = success, false = failed
 */
const logout = () => {
  try {
    localStorage.removeItem('token');
    return true;
  } catch {
    return false;
  }
};

export default logout;
