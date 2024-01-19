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



// ***   Memoization -->>>
// what is memoization --> it memoize the time consuming calculation and when need to run the same calculation again we show memoized result

const calci = (num) => {
  let _sum = 0;
  for(let i = 0; i < 1000000; i++){
    _sum += num;
  }
  return _sum;
}

const memoi = (cb) => {
  res = {};
  return function (arg) {
    if(arg in res){ return res[arg]}
    else{
      let tot = cb(arg);
      res[arg] = tot;
      return tot;
    }
  }
}

let calcmemo = memoi(calci);
console.time();
console.log(calcmemo(25));
console.timeEnd();

console.time();
console.log(calcmemo(25));
console.timeEnd();

