let x = prompt("Введите число x");
let n = prompt("Введите число n");

function pow(x, n) {
let result = x

for(let i=1; i<n; i++) {
  result *= x;
}
  return result
}

console.log(pow(x, n))
