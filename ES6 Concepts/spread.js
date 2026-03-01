
let a = [ 0,5,6,]

let newA = [...a]
a.push(80)

console.log(a )
console.log(newA)


const person = { name: 'Alice', age: 30 };
// const person2 = person;
const person2 = {...person, designation: 'Developer'};
person.salary = 36000;
console.log(person);
console.log(person2);