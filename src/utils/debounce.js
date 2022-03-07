const debounce = (callback, delay) => {
  let timeout;

  const checkTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  }

  return checkTimeout();
};

export default debounce;
