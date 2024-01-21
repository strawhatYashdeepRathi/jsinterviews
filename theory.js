/*
  >>> Data Types
  Primitive (Immutable, fix memory size,                   Non Primitive (Mutable, no fix size,
    stored directly in a memory)                                     stores a reference)

    >> Number, String, Boolean, Symbol,                      >> objects
      Undefined, Null, BigInt

    >> JS is Syncronous in Nature > everything runs line by line

    > when released JS was called Mocha > liveScript > JS

  >>> Type of declarations - var, let and const
                    hoisted                 |    scope   |   redeclared   |   reinitialized
        ----------------------------------------------------------------------------------
        var   -     yes                     |    global  |    yes         |    yes
        let   -     yes (in temp deadzone)  |    block   |    no          |    yes
        const -     yes (in temp deadzone)  |    block   |    no          |    no

*/
// >>>  Function Types 
// 1. Function declaration

  function fn(){ /* do something */ };

// 2. Function Expression
  let fn1 = function (){ /* do something */ }    // fn expression have a keyword arguments which is an onject with all the parameters 

// 3. arrow function 
    let arrowfn = () => { /* do soething */ } 

/**
 * 
 * Anonymous Function --> the function in fn1 is anonymous (with no name)
    >>> typeOf NaN   === 'number

    >>> temporal deadzone -->   time bw declaration and initialization 

    hoisting -->>   moving vars and functions at top of the code, var only gets initialized whereas fn moves fully

    >>> undefined == null  > this gives true
    >>> undefined === null > gives false (cuz undefined !== {})

    >>> Higher Order Functions  -->   a function that takes one or more function as argument or returns function 
 */

// Some higher order functions are :-
// 1. map    2. filter   3. Reduce   4. forEach   5. for in 
/*
    >>  difference in map and forEach
      > map returns a new array and forEach doesn't return anything
      > we can chain other methods with map but can't with forEach as it do not return anything
      > update original array with foreach

    >> what is for in loop 
        > its basically when we have arr of objects i.e - arr = [{0:"1"}, {1:"2"}] here for keys in arr will give
          keys of the objects in this array
    
  >> First Class Function   --> a fn that can be passed as argument or assigned to another variable or fn

  >> IIFE   --> Immediatelt Invoked Fn Expression >>   (fn(){// do something})()



  >>> Closure -> A function bundled with its lexical environment is called closure. basically function having acess to scope of its outer function
        (function (x){ return (function(2){ console.log(x+y) })() })(1)

  >> Params vs arguments ~ params are the ones we receive in a fn and arguments are the values that gets passed to fn when calling

  >> spread operator v/s rest operator
        spread used to spread out an array, rest is used as arguments when in function there is not a certainity of how many more args are we gonna get
        also rest must be added to only last of the arguments

  >> Callback function - a function passed to another funtion

  >> Arrow function vs reg expression 
  ~~  1. Syntax
      2. arrow having implicit return keywork like - >> const q = (n) => n**2;
      3. we have keywork arguments in reg exp
      4. this keywork  >>in arrow this points to global window and in reg exp it points to objaect

*/

/*
  >>> shadowing effect in let and const like - 
    let x = 10;
    (function(){
        let x = 22;
        console.log(x)     >>>> output is 22 
    })()


    >>> shalow copy vs deep copy
      shalow copy is when we copy a object there is still some ref to the riginal object
      shalow copy eg -    using spread and Object.assign({}, arrName) -> if we change the values of nested objects the original will change 
*/

const x = {
  name: "yash",
  bio: {
      age: 25
  },
}

const copyx = {...x}
copyx.name = "gaurav"
copyx.bio.age = 20
console.log(x, copyx)    // >>>>>> we will see {name: "yash", bio: {age: 20}} {{name: "gaurav", bio: {age: 20}}}

//  >>> deep copy is where not a trace of ref t original copy is present like - JSON.parse(JSON.stringify(obj))

const new_x = {
  name: "yash",
  bio: {
      age: 25
  },
}

const new_opy_x = JSON.parse(JSON.stringify(new_x))     // this method is cool but have limitations like - slow performance, once converted date
                                                        // to a string the JSON.parse cant convert date abck to date format, so we have - structuredClone()
new_opy_x.name = "gaurav"
new_opy_x.bio.age = 20
console.log(new_x, new_opy_x)   // >>    { name: 'yash', bio: { age: 25 } } { name: 'gaurav', bio: { age: 20 } }



// *******        THIS KEYWORD         ***********

// this keyword is a ref to something or some context 
// by def this points to global/ window object
// in case of arrow function this always points to context of parent function i.e. if wrapped in regular function this will point to normal functions
// context


// Event Execution 

/*
  how does event execution works for ex lets take a codde example here
*/

var ev = 29;
function fn29 (){
  console.log(ev);
}
var evr = fn29()

/*
  In above code what will happen >>>
            first an execution context will get created >> in that we will have two sides memory component and code component
            >> 2 phases >> memory creation phase   >> where memory will be allocated to all on a first run 
            1. like in our code >> ev: (stored in memory as undefined), fn29: this whole code will be stored in memory as this is how fn works
                when execution start, evr: (as undefined as it justa  variable)
            >> 2nd phase is code execution phase, again js runs through code and assign values
            2. like now 29 will be assigned to ev in code excution phase, now nothing to be done in fn29, moves to evr where a fn is executed
                when function gets invoked new ex context gets created 
            >> again same thing happens
            3.  Nothing to do in memory allocaion phase 
            4.  iterate and see conole it works and consoles the value during code execution phase

        >> Now we have stack too > Call Stack
        when code runs first an Global execution gets created and  when a fn is invoked a new execution gets created 
        it gets moved inside the call stack and keep poping off when task gets completed

*/

//*** Event Loop ***

/*
  first when the code runs in call stack the initial syncronous code runs 
  but what with asynchronous code as we all  know js is non blocking 
  >> like setTimeout 
      the js do not have any timer to track the time so timer is provided by browser and holds a callback with it
      once the timer gets expired > thr browser oves it to callback queue
  >>  Callback queue have all callbacks queued in it and event loop is like a gatekeeper for that queue
      as soon as the callstack gets empty event loop push the callback to callstack
  >>  Now if we have something like promise and a callback waiting together what will get moved first
      There is another queue called Micro Task queue/ Priority queue which queues the high priority tasks like promises
      once call stack if empty the priority task quesue have more priority than basic callback queue
*/






