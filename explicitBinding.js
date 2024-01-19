//Call Apply and Bind

/**
  >>>> CALL 
      call method is used to invoke a method with the passed object
 */

const ob1 = {deadman: "Zombiee!!!"}
function movie () {
  console.log(`where is the deadman     I'm here ~ ${this.deadman}`)
}
movie.call(ob1)

//how call works with arguments

function movie2 (numb, who) {
  console.log(`where is the deadman     I'm here ~ ${this.deadman}`)
  console.log(`${numb} ${who} are also alive`)
}
movie2.call(ob1, 2, 'animals')


// Apply Method
//   with apply we basically pass arguments in array

movie2.apply(ob1, [2, 'animals'])


// Bind Method 
// >>> Its a way to get a reusable function that holds the value of this from the creator object

let binded = movie2.bind(ob1)

binded(5, 'humans')
binded(7, 'cats')


//    >>>>>>>>>>>>>>>>>>Guess the OP ?
const person = { name: 'Yash' };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24));   //---1?      >>>>>>>>>> here as we know call works like this only so we will get >> Yash is 24
console.log(sayHi.bind(person, 24));   //---2?      >>>>>>>>>> we will see a function as bind retuen a function


// Q2

const age = 10;
var person_x = {
    name: "Piyush",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var person2 = {age:  24};
person_x.getAge.call(person2); // show with apply and bind as well     >>>>>>>>>> will return 24
//   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> apply work as same as call, bind will give function if want to return age >>> person_x.getAge.bind(person2)()


//  Q3


var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); //---1?              >>>>>>>>>>  🥑
  console.log(data.getStatus.call(this)); //---2?     >>>>>>>>>>  😎  >> this point to global obj
}, 0);



// Q4    >>>>>>>>>> complete such that everything is printed

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }

// >>>

for (let i = 0; i < animals.length; i++){
  printAnimals.call(animals[i], i)
}


// Q5  Concat 2 arrays without creating a new array like add array2 to array1 
// cant use concat 
let arr1 = [1, 2, 5]
let arr2 = ['q', 'e', 'popoye']
arr1.push.apply(arr1, arr2)

//Q5  >> Find min and max of arr
// we can do a basic for loop with max = -Infinity and min = +Infinity


let z1 = [77, 4, 80, 34, 1]
// basic Math.max() will not work as this is an array 

let maxi = Math.max.apply(null, z1)
let mini = Math.min.apply(null, z1)


// >>> polyfill for call methiod

/*
    1. a call method accept 2 things first is context and arguments
    2. create a prototype function accepting arguments context by def to {} and arguments
    3. check if function is called by function or not i.r typeof this !== functin throw error
    4. add function in the context context.fn = this
    5. call context.fn(...args)


    *** for apply also its same just add another check after function type test
      >>> first thing change parameters to not spread over just say args
      >>> if (!Array.irarray(args)) return error else all same 
*/



const ob_x = {a: "Jam", b: "sam"}
function pearson (x, y) {
  console.log(`hey there ${this.a} and ${this.b}`, x, y)
}

Function.prototype.customCall = function(contxt = {}, ...args){
  if (typeof this !== 'function'){
    throw new Error(this, "not a function")
  }
  contxt.fn = this
  contxt.fn(...args)
}

pearson.call(ob_x, "jenna", "sam")
pearson.customCall(ob_x, "jenna", "sam")

// >>> polyfill for apply

Function.prototype.customApply = function (cxt = {}, args = []){

  if (typeof this !== "function"){
    throw new Error(this, "is not a function")
  }
  if (!Array.isArray(args)) {
    throw new Error("pass arguments n array")
  }

  cxt.fn =this;
  cxt.fn(...args)
}

pearson.customApply(ob_x, ["jenna", "sam"])

// for bind


// this is also same as call method we have 
// key diff is it returns a function and that function can either accept arguments with itself or can accept later on the time of function call

Function.prototype.custombind = function(cntxt = {}, ...args){
  if (typeof this !== "function"){
    throw new Error(this, "is not callable for binding")
  }
  cntxt.fn = this
  return function(...newArgs){
    cntxt.fn(...newArgs, ...args)
  }

}

const xmas = pearson.custombind(ob_x)
