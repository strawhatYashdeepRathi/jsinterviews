let btn = document.querySelector("#trigbtn");
let clickcount = document.querySelector("#clicked");
let trigCount = document.querySelector("#trigg");

let cc = 0;
let tc = 0;

const customdebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

let mydebounce = customdebounce(() => {
  trigCount.innerHTML = ++tc;
}, 800);

btn.addEventListener("click", () => {
  clickcount.innerHTML = ++cc;
  mydebounce();
});
