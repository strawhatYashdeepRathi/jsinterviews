// callbacks in JS

// console.log("start");
// function fn1 (somethin) {
//   setTimeout(() => {
//     return `dashh ${somethin}`
//   }, 1000);
// }
// const msg = fn1("dudoom")
// console.log(msg)             // this is the issue if we do it like this it willl give undefined as the res from setTimeout is taking time
// console.log("end")

console.log("start");
function fn1 (somethin, cb) {
  setTimeout(() => {
    cb(`dashh ${somethin}`)
  }, 1000);
}

const msg = fn1("dudoom", function cbck(msg){
  console.log(msg)                                     // >> using callback we get the return after the timer
})
console.log("end")

// now suppose we have 5 functions like this which we need to execute one after another file f1 > f2> f3> f4> f5
/*
  so what we be doing here is having 5 fns with setTimeout and we will call all with callbacks >>> 
  const msg = fn1(x1, fn cb1(y1){
    log(y1)
    fn1(x2, fn cb2(y2){
      log(y2)
      fn1(x3, fn cb3(y3){
        log(y3)
        ..... and so on          >>>>>>>>>>>>>>>>>> this is callback hell and exactly why we need Promises
      })
    })
  })

*/


// Promises  >>> These are just something that returns a state > fulfilled or rejected  also (fulfilled)
//   in fancy words >>> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

console.log("start");
const promise1 = new Promise((resolve, reject)=> {                 // returns a promise that i will execute and return the res
  let result = true
  setTimeout(() => {
    if (result) return resolve("passed the test")                  // if resolved
    else return reject(new Error("sorry, i failed"))               // if rejected
  }, 3000);
})

promise1.then((res)=>{                // then worked if resolved
  console.log(res)
}).catch((err)=> {                    // catch cathes error if rejected
  console.log(err)
})


/*
How will we overcome the callback hell 
>> fn1 with promise and all of them with promises ==> f1, f2, f3
  f1("something").then((res)=>{
    log(res);
    return f2("something else")
  }).then((res2)=>{
    log(res2);
    return f3("something else else")                // promise chaining
  }).then((res3)=> {
    log(res3)
  }).catch((err)=> {
    log(err)
  })

*/

// *****    Promise Combinator    *****
//          Promise.All
//          In Promise.All you provide more than 1 promise to be executes > now this will execute all promises parallely
//          and return the array of all fullfilled promises and if any one fails it will reject whole promise.all

function pf1() {
  return  new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("res 1")
  }, 1000)
})}
function pf2 () {
  return new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("res 2")
  }, 1000)
})}
function pf3 () {
  return new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("res 3")
  }, 1000)
})}

Promise.all([       // >>>>>> returns an array of all promses
  pf1(),
  pf2(),
  pf3()
]).then((res)=> {
  console.log(res)
}).catch((err)=> {
  console.log(err)
})

Promise.race([       // it returns the one that gets fullfilled first
  pf1(),
  pf2(),
  pf3()
]).then((res)=> {
  console.log(res)
}).catch((err)=> {
  console.log(err)
})

Promise.allSettled([    // Promise.all fails when any one of the promise gets rejected
  pf1(),                // allsetted doesn't > it returns an array of responses with status as resolved or rejected
  pf2(),                // as well as the values of those which gets resolved or reson for the ones that gets rejected
  pf3()
]).then((res)=> {
  console.log(res)
}).catch((err)=> {
  console.log(err)
})

/*
  [
    { status: 'fulfilled', value: 'res 1' },
    { status: 'rejected', reason: 'failed at res 2' },      // if 2nd rejects 
    { status: 'fulfilled', value: 'res 3' }
  ]
*/

Promise.any([       // it is similar to race returns the first one that gets resolved first > but if first one is rejected it will wait 
  pf1(),            // for the one taht gets fulfilled
  pf2(),            // if all fails then it returns all failed 
  pf3()
]).then((res)=> {
  console.log(res)
}).catch((err)=> {
  console.log(err)
})

// ***   ASYNC AWAIT   ***

// better way to handle promises
let asyncfunction = async () => {
  try{
    let m1 = await pf1()
    let m2 = await pf2()
    let m3 = await pf3()
    console.log(m1, m2, m3);
  }catch(e){
    console.log(e);
  }
}


// Q1 Guess the op

console.log("start");

let dd = new Promise((resolve, reject)=> {
  console.log(1)
  resolve(2)
})

dd.then((res)=>{
  console.log(res)
})


console.log("end");
//     start >> 1 >> end  >  2    why ? dd promeise when gets initialised it will check all the code that is syncronous





