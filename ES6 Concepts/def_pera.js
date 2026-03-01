
function defPera(a, b = 1) {
    return a * b;
}

console.log(defPera(10, 2))
console.log(defPera(10))


let arrowFunc = (a, b = 1) => a * b;
console.log(arrowFunc(40, 2))
console.log(arrowFunc(40))