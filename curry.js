// currying ?
// a fn that takes 1 arg at a time abd returns a fn expecting another arg


function curr(a){
  return function (b){
      return a+b
  }
}

console.log(curr(2)(3))

// infinite currying i.e -> curry(8)(4)(9)(3)()

function inficurry (a){
  return function (b) {
    if (b) return inficurry(a+b);
    return a
  }
}
console.log(inficurry(7)(7)());
console.log(inficurry(8)(4)(9)(3)());

