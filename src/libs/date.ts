/**
 * String 형식으로 들어온 날짜를 년/월/일 형식으로 바꿈
 */
export const isoStringToRealDateString = (isoString: string) => {
  const realDate = new Date(isoString);

  const [year, month, date] = [
    realDate.getFullYear(),
    realDate.getMonth(),
    realDate.getDate(),
  ];

  return `${year}년 ${month}월 ${date}일`;
};
