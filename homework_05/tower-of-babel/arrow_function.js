var inputs = process.argv.slice(2);
var result = inputs.map((elem) =>{
  elem.split("");
  return elem[0];
} ).reduce((a,b) => a.concat(b));
console.log(result);