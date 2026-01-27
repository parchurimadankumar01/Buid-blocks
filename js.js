//  What is a variable in JavaScript?
// Variable = box to store data


// var is old way
var age = 25;
console.log(age);


// let is used for changing values
let name = 'Madan'; 
name = 'kumar'
console.log(name);

// const is used to not change the value of a variable
// const is used for fixed values
const country = "INDIA"
console.log(country)


// in const objects/arrays can chnage inside but not outside
const user = {name:'Madan', surname:'', lastname:''};
user.name="kumar";
user.surname='parchuri';
user.lastname = "kumar's"
console.log(user);


// 2. let
let fruits = ['apple','banana', 'mango'];
fruits.push("orange");
console.log(fruits)


// how to remove from start
fruits.shift()
console.log(fruits)

// how to remove end value in fruits
fruits.pop();
console.log(fruits);



// how to add new element at the end of array

fruits.push('grapes');
console.log(fruits);

// how to add new element at the start of an array
fruits.unshift('goa');
console.log(fruits)


let numbers = [1,2,3,4,5,6,7];

numbers.push(9); // add one number last
numbers.unshift(0); // add number on first
numbers.push(8,9); // add two numbers at the end of8)
numbers.shift(); // start one remove
numbers.pop();   // end one remove
numbers.sort(); // sort all

console.log(numbers)


// asscending orders
let nums = [20,5,80,50,56,23];

nums.sort((a,b) => a-b)  // sort ascending
console.log(nums)

// decending orders
nums.sort((a,b) => b-a)
console.log(nums)

// decending orders strings
let names = ['madan','kumar', 'goud', 'parchuri']
names.sort().reverse();
console.log(names)

// sorting array of objects
let users = [ 
    {name:'parchuri', age:100},
    {name:"madan", age:29},
    {name:'kumar', age:30}           
];

// sort by age (ascending)
users.sort((a,b) => a.age - b.age );
console.log(users);


// decending orders sort by age
users.sort((a,b) => b.age - a.age);
console.log(users)


// Sorting by last letter of each name
// names should comes as parchuri madan kumar goud for this
// define the desired orders by last letters
const order = ["i","n","r","d"]

names.sort((a,b) => {
    let lastA = a[a.length -1]
    let lastB = b[b.length - 1]

   //use index in order array for comparison
   //return order.indexOf(lastA) - order.indexOf(lastB);
   
   return lastA.localeCompare(lastB)
})

console.log(names);