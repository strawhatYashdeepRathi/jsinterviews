
// polyfill for map function
Array.prototype.mypolymap = function (cb) {
  let temp = [];
  for(let i = 0; i < this.length; i++){
    temp.push(cb(this[i], i, this))
  }
  return temp;
}
let numberswehave = [1, 2, 3, 4];
let weneedmap = numberswehave.map((ele, i, arr)=> {
  return ele * 2;
})

let weneedpolymap = numberswehave.mypolymap((ele, i, arr)=> {
  return ele * 2;
})

console.log(weneedmap)
console.log(weneedpolymap)

//polyfill for filter function
Array.prototype.mypolyfilter = function(cb){
  let temp = [];
  for(let i = 0; i < this.length; i++){
    if(cb(this[i], i, this)){
      temp.push(this[i])
    }
  }
  return temp
}

let weneedfilter = numberswehave.filter((ele, i, arr)=> {
  return ele > 2;
})

let weneedpolyfilter = numberswehave.mypolyfilter((ele, i, arr)=> {
  return ele > 2;
})

console.log(weneedfilter)
console.log(weneedpolyfilter)

// reduce polyfill

Array.prototype.mypolyreducer = function(cb, ini) {
  let temp = ini
  for(let i = 0; i<this.length; i++){
    // if there is no initial value provided by the function acc take 1st ele as initial and 2nd as curr
    temp = temp ? cb(temp, this[i], i, this) : this[i];
  }
  return temp
}


let weneedsum = numberswehave.reduce((acc, curr, i, arr)=> {
  return acc + curr;
}, 0)
let weneedpolysum = numberswehave.mypolyreducer((acc, curr, i, arr)=> {
  return acc + curr;
}, 0)

console.log(weneedsum)
console.log(weneedpolysum)

