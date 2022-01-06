/**
 * String 형식으로 들어온 날짜를 년/월/일 형식으로 바꿈
 * @remarks
 * 자바스크립트의 Date class는 month가 0부터 시작함. 진짜 month를 얻기 위해서는 1을 더해줘야 함.
 */
export const isoStringToRealDateString = (isoString: string) => {
  const realDate = new Date(isoString);

  const [year, month, date] = [
    realDate.getFullYear(),
    realDate.getMonth(),
    realDate.getDate(),
  ];

  return `${year}년 ${month + 1}월 ${date}일`;
};
