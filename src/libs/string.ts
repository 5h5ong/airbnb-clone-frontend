/**
 * 들어온 파일 이름을 gcs에 접근이 가능한 url로 바꿈
 */
export const filenameToGcsUrl = (filename: string) => {
  const gcsUrl =
    'https://storage.googleapis.com/airbnb-clone-288086.appspot.com/';
  return gcsUrl.concat(filename);
};
