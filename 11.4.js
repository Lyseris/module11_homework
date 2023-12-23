function sum(x) {
    return function(y) {
        return x + y;
    };
}

let z = sum();

console.log(sum(4)(7));
