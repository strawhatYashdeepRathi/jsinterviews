// by def this points to global object 

let a = 5

console.log(this.a); //undefined


// in case of arrow function this points to this of parent function if parent function (if parent if reg exp then this of arrow will point to reg fns this)
// if no reg function wraps arrow fn then it will refer the glbal object

const myFun=()=> {
  console.log(this)
}
myFun(); // window object

// Q1

let user = {
  name: "Piyush",
  age: 24,
    childObj:{
        newName:"Roadside Coder",
        getDetails() {
            console.log(this.newName, "and" ,this.name);           // >>>>  Roadside Coder and undefined 
        }                                                          // >> this in getDetails refer the obj that called it i.e childobj which do not
                                                                   // >> have name variable
    }
};
user.childObj.getDetails()             


// Q2
/*
let user = {
  name: "Piyush",
  age: 24,
    getDetails: () => {
        console.log(this.name);            >>>>>>    undefined because this here points to global/ window object
    }
};

*/
let user2 = {
  name: "YASHDEEP",
  age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name);        // >>>>>>> this will print YASHDEEP because this of arrow fn wrapped in reg fn
        nestedArrow();                                         // will point to this of reg fn
    }
};

user2.getDetails()


/*
class user {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);                //>>>> this of this fn will point to this of constructor function
    }
}

const User = new user("Yashdeep") // => This will generate a user object from the above class
User.getName();                  >>>>>>>>>>>>>> Yashdeep
*/


// Q3   Guess the output

const user3 = {
  firstName: 'Yashdeep!',
  getName() {
    const firstName = 'Neetu!';
    return this.firstName;
  }
};
console.log(user3.getName()); // What is logged?   >>>> Yashdeep will be logged as this refer to the object which calls the function

//Q4 Guess the Output

/*
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?           >>>>>>  Error - rules that set this do not look at object definition, value of this is undefined
                                                                  as it is called as a function, not as a method with “dot” syntax.
Fix -->  make ref as a function
 */

function makeUser() {
  return {
    name: "Yashdeep",
    ref(){
      return this
    }
  };
}

let user4 = makeUser();

alert( user4.ref().name );              //>>>> You make ref a method and then there will be no error


// Q5 

// const user5 = {
//   name: "YashdeepRathi",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(user5.logMessage, 1000);        //Guess the output   >>>> undefined ~ because here user.logmessage is used as a callback 

// fix -->
const user5 = {
  name: "YashdeepRathi",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(function(){user5.logMessage()}, 1000);   // now logmessage will be called as a method

// Q6

const user6 = {
  name: "Yash",
  greet() {
    return `Hello, ${this.name}!;`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};
console.log(user6.greet(), user6.farewell());    // >>>>> Hello Yash    Goodbye undefined >> because farewell is arrow function


//Q7 create a object calci in js

let calci = {
  read (){
    this.a = prompt("get a:", 0)
    this.b = prompt("get b:", 0)
  },
  summ(){
    return this.a + this.b
  },
  mull(){
    return this.a*this.b
  }
}

calci.read();
console.log(calci.summ());
console.log(calci.mull());


// infinite calc

const calc = {
  tot: 0,
  add(a){
    this.tot+=a
    return this
  },
  sub(a){
    this.tot-=a
    return this
  },
  mul(a){
    this.tot*=a
    return this
  }
}

const res = calc.add(5).add(2).mul(5).sub(2).mul(1)
console.log(res.tot)


