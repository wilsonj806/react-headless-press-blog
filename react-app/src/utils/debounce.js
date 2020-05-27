function debounce(fn, bounceTime) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, bounceTime);
  };
}

export default debounce;
