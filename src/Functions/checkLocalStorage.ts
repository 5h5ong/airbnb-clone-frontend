/**
 * local storage의 특정 key가 존재하는지 검사
 *
 * @returns 존재한다면 key의 value, 아니라면 null을 반환
 */
export default (key: string): string | null => {
  // key가 존재하지 않을 시 null 반환
  const value = localStorage.getItem(key);

  if (value) {
    return value;
  }
  return null;
};
