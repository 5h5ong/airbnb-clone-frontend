/**
 * 점점 커지는 숫자열 생성
 */
export const range = (size: number, startAt: number): number[] => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

/**
 * 점점 작아지는 숫자열 생성
 */
export const reverseRange = (size: number, endAt: number): number[] => {
  return range(size, 1).map((i) => endAt - i + 1);
};
