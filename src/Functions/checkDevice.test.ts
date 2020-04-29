import checkDevice from './checkDevice';

test('width에 따른 return value 확인', () => {
  expect(checkDevice(650)).toEqual({ type: 'desktop' });
  expect(checkDevice(610)).toEqual({ type: 'mobile' });
});
