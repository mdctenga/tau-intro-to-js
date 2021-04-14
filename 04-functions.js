function sum(a,b){
  return a+b;
}

console.log(sum(10,10)); // should be 20

function product(a,b){
  return a*b;
}

console.log(product(6,6)); // should be 36

const bigProduct = product(5353, 134534);
console.log(bigProduct);

setTimeout(function(){
  console.log("Hey! You rock!!!");
}, 1000); // After 1000 ms, console.log quote
// Unless specifically using the keyword "return" in a function, the default return value of a standard function is "undefined"

setTimeout(() => console.log("Hey! You rock!!!"), 1000); // After 1000 ms, console.log quote.
// Arrow functions are only if there is 1 line of code. If there are multiple lines of code, you have to bring back the {}