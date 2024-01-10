// Q1 What are Closures?
//  >>  A function bundled with its lexical environment is called closure. basically function having acess to scope of its outer function

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // Output ?   >>>> 1 >> because this let declared again had a shadowing effect on let in outer scope
  }
  console.log(count); // Output?    >>>> 0
})();

// Wriet a finction to make this happen --->

// ---- ans
function createBase(n1) {
  return function (n2) {
    return n1 + n2;
  };
}
// ----

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// Optimise below using closures

// function find(index) {
//   let a = [];
// for (let i = 0; i < 1000000; i++) { a[i]= i*i }

// console.log(a[index])
// }

// console.time("6");
// find(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// find(12); // this takes 135ms
// console.timeEnd("12");

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  }
}

const closurew = find()

console.time("6");
closurew(6); //  >> 4.4 ms
console.timeEnd("6");
console.time("12");
closurew(12); //  >> 0.10 ms
console.timeEnd("12");


// Q Guess the output 
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// >>> 3, 3, 3  -- because of var being global scoped after the timeout function the val of i is already 3 and i refer to globally scoped var and after each sec 3 will print

// follow up question -- fix it 
// using let instead of var will fix it as let being block scoped for each instance of i a block will get created and i refer to that value of i in that particular block

// fix without using let 
// use closures to do so

for (var i = 0; i < 3; i++) {
  (function (idx) {setTimeout(function log() {
    console.log(idx); 
  }, 1000)})(i)
}
// here with ths use of IIFE as a closure making idx hold its own value for each instance

// >> Q using closure to create a private counter  

function priv() {
  var cc = 0
  function _add (x) {
    cc += x;
  }
  function ret () {
    return cc;
  }
  return {_add, ret}
} 

let privateCounter = priv();

privateCounter._add(5)
privateCounter._add(25)
console.log(privateCounter.ret())

// Q Rewrite the function in such a way the output gets printed once even though the function is called multiple times.

// let view
// function likeTheVideo(){
//     view="Roadside Coder"
//     console.log( "Subscribe to", view)
// }

let view;
function likeTheVideoini(){
  let c = 0;
  return function(){
    if(c>0){
      console.log('already called')
    }else {
      view="Roadside Coder"
      console.log( "Subscribe to", view)
      c++
    }
  }
}

let likeTheVideo = likeTheVideoini()
likeTheVideo(); // Subscribe to Roadside Coder
likeTheVideo(); // Subscribe to Roadside Coder
likeTheVideo(); // Subscribe to Roadside Coder
likeTheVideo(); // Subscribe to Roadside Coder


// function hoisting 
// with hoiting function we move whole function to top and this does not get just initialised as undefined like variables

var hvar = 21
var hfn = function() {
  console.log('check the value here', hvar)   // >>> this will give undefined as whole function got hoisted and
  var hvar = 20                               // this hvar here gets hoisted again in local scope so when consoling it checked that we have x already in local
}                                             // scope so it doesn't move to parent to check for value of x and gives undefined
hfn();



