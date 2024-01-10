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



