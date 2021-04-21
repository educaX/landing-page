const gra = function (min, max) {
  return Math.random() * (max - min) + min;
};
const init = function () {
  

  cssScrollSnapPolyfill();
};
init();