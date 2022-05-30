export default function debounce(callback, delay) {
  let timeout;
  return async function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}
