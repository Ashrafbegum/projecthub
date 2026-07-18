export function createSearch(inputEl, callback, delay = 300) {
  let timeout;

  inputEl.addEventListener("input", (e) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(e.target.value);
    }, delay);
  });
}
