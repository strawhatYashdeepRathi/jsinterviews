// How to export a function / file / data in node
//   we use module.exports in order to do so
//   -- if we have 2 or more module.exports only the latest one will work as others gets overwritten

function add(a,b) {
  console.log(a+b);
  return a+b;
}

function sub(a,b) {
  console.log(a-b);
  return a-b;
}

// module.exports = add;

// we can either do it like this
// module.exports = {add, sub} 
// or we can define function names as exported value explicitely also
// module.exports = {add, subFun: sub}



