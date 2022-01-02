/**
 * 파일을 data uri 형식으로 만들어 줌
 */
export const fileToDataUri = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      // console.log(e.target?.result);
      resolve(e.target?.result as string);
    };
  });
};
