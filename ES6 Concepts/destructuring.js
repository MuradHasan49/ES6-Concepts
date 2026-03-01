// Array destructuring 

let [array1,arra2,...rest] = ['Murad','Shuvo','Rakib','Tamim']
const [n1,n2,n3,...rest2] = [2,34,45,5,6,78,8]

// console.log(array1,arra2,rest)
// console.log(n1,n2,n3,rest2)


// Object destructuring 

const {name,roll,active: {daily}, active : {present}} = {
    name : 'Murad Hasan', 
    roll : 617705,
    shift : '1st',
    subject : 'CSE',
    active : {
        daily : 'not',
        present : "not ok"
    }
}

console.log(name,roll,daily ,present)
