// console.log(30 + 40);
// console.log(30 + 40);
// console.log(30 + 40);
// console.log(30 + 40);
// console.log(30 + 40);

// console.log(Dry);

// for(let i = 1; i <= 10; i++) {
//   console.log(2 + " x " + i + " = " + (i * 2));
// }


// for(let i = 1; i <= 10; i++) {
//   console.log(5 + " x " + i + " = " + (i * 5));
// }


// for(let i = 1; i <= 10; i++) {
//   console.log(15 + " x " + i + " = " + (i * 15));
// }

// simple function 

// keyword
// function table() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(2 + " x " + i + " = " + (i * 2));
//     }
// }

// table() // call
// table() 


// function table(num1, num2, name, country) { // parameter
//     console.log(num2, country);
// }

// table(3, 2, "ali", "pakistan") // arrgument


// function table(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (i * num));
//     }
// }


// table(3)
// table(5)
// table(15)



// let table = function (num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (i * num));
//     }
// }

// table(3)
// table(5)



// let table = (num) => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (i * num));
//     }
// }

// table(3)
// table(31)

// function sum(num1, num2) {
//     let total = num1 + num2
//     return total
// }

// let res1 = sum(12, 34)
// console.log(res1);


// let sum = num1 => num1
// let res1 = sum(12)
// console.log(res1);



// function sum(num1 = 80, num2 = 50) {
//     return num1 + num2
// }
// let res1 = sum(12, 90)
// console.log(res1);


// function sum(num1 = 80, num2 = 50) {
//     return num1 + num2
// }
// let res1 = sum(undefined, 90)
// console.log(res1);


// function sum(...values) {
//     return values
// }
// let res1 = sum(19, 90, 45, "ali", "pakistan", 3000)
// console.log(res1);



// function sum({ name, age, salary, country }) {
//     console.log(name);
//     console.log(country);
//     console.log(salary);
//     console.log(age);
// }
// sum({
//     name: "ali",
//     age: 20,
//     country: "pakistan",
//     salary: 50000
// })

// sum({
//     name: "jamal",
//     age: 23,
//     country: "pakistan",
//     salary: 505000
// })


(function (num1, num2) {
    console.log(num1 + num2);
})(12, 34)
