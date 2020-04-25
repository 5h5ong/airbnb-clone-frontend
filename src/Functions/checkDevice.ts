interface ICheckDeviceReturnType {
  type: 'desktop' | 'mobile';
}

/**
 * width로 device로 type를 알아내 반환해줌
 */
export default (width: number): ICheckDeviceReturnType => {
  if (width <= 640) {
    return { type: 'mobile' };
  }
  return { type: 'desktop' };
};
