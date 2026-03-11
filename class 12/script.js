// let user = {
//     name: "ali khan",
//     age: 20,
//     city: "karachi",
//     salary: 30000
// }
// console.log(user);

// let user = new Object()
// user.name = "ali khan"
// user.age = 27
// console.log(user);

// access 
// console.log(user.city);
// console.log(user["age"]);

// update 
// user.age = 40
// user["age"] = 40

// delete 
// delete user.age
// delete user["age"]

// add 
// user["color"] = "red"
// user.color = "red"


// let address = {
//     usercity: "lahore",
//     country: "pakistan",
//     street: "street 123"
// }

// let res = user.hasOwnProperty("color")
// let res = Object.assign({}, address, user)
// let res = Object.keys(user)
// let res = Object.values(user)
// let res = Object.entries(user)
// let res = Object.freeze(user)
// let res = Object.seal(user)
// let user = [
//     ["name", "ali"],
//     ["age", 29],
//     ["city", "karachi"],
// ]
// let res = Object.fromEntries(user)

// let name = "ali"
// let age = 30
// let city = "karachi"
// let salary = 20000

// let user = {
//     name,
//     age,
//     city,
//     salary
// }
// let { name, age, city, salary } = user
// let { name, age: userage, city, salary } = user

// let name = "username"
// let age = "userage"
// let city = "usercity"
// let salary = "usersalary"

// let user = {
//     [name]: "ali khan",
//     [age]: 30,
//     [city]: "karachi"
// }


// let user = {
//     name: "farhan khan",
//     age: 20,
//     city: "karachi",
//     salary: 40000
// }

// let user1 = {...user}
// user1["age"] = 60
// console.log(user1);
// console.log(user);



// let structure = {
//     city: "karachi",
//     class: "5th",
//     dress_color: "red",
//     country: "pakistan",
//     adress: {
//         street: 123
//     }
// }

// let std1 = {
//     name: "ali",
//     age: 20,
//     ...structure
// }
// let std2 = {
//     name: "farhan",
//     age: 23,
//     ...structure
// }
// let std3 = {
//     name: "zubair",
//     age: 28,
//     ...structure
// }
// let std4 = {
//     name: "amjad",
//     age: 39,
//     ...structure
// }
// std3.adress.street = "this is street"

// console.log(std1);
// console.log(std2);
// console.log(std3);



// let structure = {
//     city: "karachi",
//     class: "5th",
//     dress_color: "red",
//     country: "pakistan"
// }
// let { city, ...value } = structure
// console.log(value);


// let array = [
//     {
//         city: "karachi",
//         class: "5th",
//         dress_color: "red",
//         country: "pakistan"
//     },
//     {
//         city: "karachi",
//         class: "5th",
//         dress_color: "red",
//         country: "pakistan"
//     },
//     {
//         city: "karachi",
//         class: "5th",
//         dress_color: "red",
//         country: "pakistan"
//     },
//     {
//         city: "karachi",
//         class: "5th",
//         dress_color: "red",
//         country: "pakistan"
//     },
//     {
//         city: "karachi",
//         class: "5th",
//         dress_color: "red",
//         country: "pakistan"
//     },
//     {
//         city: "karachi",
//         class: "5th",
//         dress_color: "red",
//         country: "pakistan"
//     }
// ]

// for(let i of array){
//     console.log(i.country);
// }


// let user = {
//     city: "karachi",
//     class: "5th",
//     dress_color: "red",
//     country: "pakistan",
//     address: {

//     },
//     hobbies: ["html", "css", "javascipt"],
//     fn: function () {

//     }
// }
// for (let i in user) {
//     console.log(i);
// }
// for (let i in user) {
//     console.log(user[i]);
// }
// for (let i in user) {
//     console.log(i, user[i]);
// }
