export default (y: number, x: number = 0) => {
  window.scrollTo({
    top: y,
    left: x,
    behavior: 'smooth',
  });
};
