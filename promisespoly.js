//! Promise polyfill

/*
    >>>>    1. create a function that accepts a executor ( what is executor --> (res, reject))
            2. create then handler and catch handler
            3. create resolve and reject executor functions
            4. keep track of is called, fulfilled and rejected states to handle both sync and async part of code
*/

function PromisePolyFill (executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;
  let error;

  function resolve (val){
    isFulfilled = true;
    value = val
    if (typeof onResolve === 'function'){
      onResolve(val);
      isCalled = true;
    }
  }

  function reject (err){
    isRejected = true;
    error = err;
    if (typeof onReject === 'function'){
      onReject(err)
      isCalled = true
    }
  }

  this.then = function(thencb){
    onResolve = thencb;
    if (!isCalled && isFulfilled){
      onResolve(value)
      isCalled = true;
    }
    return this;
  }

  this.catch = function(catchcb){
    onReject = catchcb;
    if (!isCalled && isRejected){
      onReject(error);
      isCalled = true
    }
    return this;
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error)
  }
}

//--------------------- running code -->

const promise1 = new PromisePolyFill((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
      resolve(2)
    }, 1000);
  console.log(3)
})

promise1.then(res => {
  console.log(res)
}).catch(err=>{
    console.log('errorr - promise rejected')
})

// ------->> for direct promise.reolve and reject methods

PromisePolyFill.resolve = (val) => {
  return new PromisePolyFill(function executor(resolve, reject){
    resolve(val)
  })
}

PromisePolyFill.reject = (val) => {
  return new PromisePolyFill(function executor(resolve, reject){
    reject(val)
  })
}


// ----------------->> for promise.all 

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

PromisePolyFill.customAll = (promises) => {
  const res = []
  const passed = []
  if (!Array.isArray(promises)){
    return reject(new TypeError('Promises must be array'));
  }
  function executor (resolve, reject){
    promises.forEach((promise, idx) => {
      promise.then((val)=>{
        passed.push(true)
        res[idx] = val
        if (passed.length === promises.length){
          return resolve(res);
        }
      }).catch((err)=> {
        return reject(err)
      })
    });
  }
  return new PromisePolyFill(executor)
}

PromisePolyFill.customAll([       // >>>>>> returns an array of all promses
  pf1(),
  pf2(),
  pf3()
]).then((res)=> {
  console.log(res)
}).catch((err)=> {
  console.log(err)
})


