const fs = require('fs');

// readFileSync return the text in utf-8 format so it can be assigned to variable and can be used further

let readsyncdata = fs.readFileSync('./demo.txt', 'utf-8');
console.log(readsyncdata)

// readFile do not return anything but takes a callback which can be used to handle error and response
fs.readFile('./demo.txt', "utf-8", (err, res) => {
  if (err){
    throw err
  } else {
    console.log(res)
  }
});

// writefilesync and writeFile - writeFile expects a callback as wellwhereas writefileSync does not.
// these methoda completely clears a file and add new texts

fs.writeFileSync('./demo.txt', " Hi I am the new text written just now");
// fs.writeFile('./demo.txt', " Hi I am the new text written just now in am async req", (err)=> {});
let readsyncdatanew = fs.readFileSync('./demo.txt', 'utf-8');
console.log(readsyncdatanew)

// Similary we have few more methods in fs module provided by node js 
//   >>> appendFile, appenFileSync        append new text to existing text
//   >>> cp, cpSync         copy a file to another
//   >>> unlinkSync, unlink -- delte a file
//   >>> mkdirSync  -- create directory
