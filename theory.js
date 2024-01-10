/*
  >>> Data Types
  Primitive (Immutable, fix memory size,                   Non Primitive (Mutable, no fix size,
    stored directly in a memory)                                     stored a reference)

    >> Number, String, Boolean, Symbol,                      >> objects
      Undefined, Null



  >>> Type of declarations - var, let and const
                    hoisted                 |    scope   |   redeclared   |   reinitialized
        ----------------------------------------------------------------------------------
        var   -     yes                     |    global  |    yes         |    yes
        let   -     yes (in temp deadzone)  |    block   |    no          |    no
        const -     yes (in temp deadzone)  |    bloack  |    no          |    no

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

    hoisting -->>   moving vars anf functions at top of the code, var only gets initialized whereas fn moves fully

    >>> undefined == null  > this gives true
    >>> ubdefined === null > gives false (cuz undefined !== {})

    >>> Higher Order Functions  -->   a function that takes one or more function as argument or returns function 
 */

// Some gigher order functions are :-
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

  >> IFFE   --> Immediatelt Invoked Fn Expression >>   (fn(){// do something})()



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
    lett x = 10;
    (function(){
        let x = 22;
        console.log(x)     >>>> output is 22 but in case of using var we get ref error (already declared)
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

const new_opy_x = JSON.parse(JSON.stringify(new_x))
new_opy_x.name = "gaurav"
new_opy_x.bio.age = 20
console.log(new_x, new_opy_x)   // >>    { name: 'yash', bio: { age: 25 } } { name: 'gaurav', bio: { age: 20 } }



// *******        THIS KEYWORD         ***********

// this keyword is a ref to something or some context 
// be def this points to global/ window object
// in case of arrow function this always points to context of parent function i.e. if wrapped in regular function this will point to normal functions
// context



