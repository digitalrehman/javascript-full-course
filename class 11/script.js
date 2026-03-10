// let user = ["ali", 20, "karachi", "web development"]
// let user = new Array(12)
// let res = Array.isArray(user)
// let user = Array.of(12, 23, "ali")
// Array.from(str)
// let str = "Hello world"
// let user = [12]

// CRUD (create, read, update, delete)
// user[0] read 
// user[4] = 20000  create
// user[1] = 25 update 
// delete user[0]

// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

// for (let i of user) {
//     console.log(i);
// }

// let user = [
//     ["ali", 20, "karachi", "web development", ["python", "pandas"]],
//     ["bilal", 23, "karachi", "web development", ["python", "pytourch"]],
//     ["farhan", 25, "karachi", "web development", ["numpy", "pandas"]],
//     ["subhan", 28, "karachi", "web development", ["python", "pandas"]],
//     ["imran", 30, "karachi", "web development", ["python", "pandas"]],
//     ["rafeeq", 29, "karachi", "graphic", ["html", "css", "javascript"]],
//     ["shafeeq", 47, "karachi", "web development", ["python", "seaborn"]],
//     ["ateek", 40, "karachi", "web development", ["matplotlib", "pandas"]]
// ]
// console.log(user[3][4][1]);


// for (let i of user) {
//     for (let j of i) {
//         if (typeof j == "object") {
//             for (let k of j) {
//                 console.log(k)
//             }
//         } else {
//             console.log(j)
//         }
//     }
// }


// for (let i of user) {
//     for (let j of i) {
//         if (Array.isArray(j)) {
//             for (let k of j) {
//                 console.log(k)
//             }
//         } else {
//             console.log(j)
//         }
//     }
// }

// es6 2015 
// let user = ["ali", 45, "karachi", "graphic"]
// let [name, age = 34, city, course = "web development"] = user
// console.log(age, course);


// es6 2015 
// let user1 = ["ali", 45, "karachi", "graphic"]
// let user2 = [...user1, 40, 70, ...user3]
// user2[1] = 50
// console.log(user1);
// console.log(user2);



// let res = user.at(-1)
// let res = user.concat([13, 45, 8, 76])
// let res = user.includes("farhan")
// user.push(20000)
// user.unshift(20000)
// user.pop()
// user.shift()
// let res = user.slice(0,3)
// let res = user.slice(-3, -1)
// user.splice(1,3) // start, delete count, add element
// user.splice(3, 0, "pakistan")
// user.splice(3, 1, "pakistan")
// user.splice(0, 1)
// let copy = user.toSpliced(1, 2)
// let res = user.reverse()
// let res = user.toReversed()
// let res = user.sort()
// let res = user.toSorted()
// let res = user.with(1, 60)
// let res = user.copyWithin(0, 2)
// let res = user.fill(20, 0, 3)

// for(let [index, value] of user.entries()){
//     console.log(index, value);
// }

// let index = 0
// for (let i of user) {
//     console.log(index);
//     index += 1
// }

// for(let i of user.keys()){
//     console.log(i);  
// }

// for(let i of user.values()){
//     console.log(i);  
// }

// for (let i of user) {
//     console.log(i);
// }

// let user = "this is javascript"
// let res = user.replace("is", "in")
// let res = user.flat()
// let res = user.flat(3)
// let res = user.flat(Infinity)
// let res = user.indexOf("ali")
// let res = user.lastIndexOf(45)
// let res = user.join(" $ ")
// let res = user.toString()


// user.forEach(function (value, index, array) {
//     console.log(value);
// })
// let sum = user.forEach(function (value, index, array) {
//     return value
// })
// let res = sum
// console.log(res);


// let sum = user.map((value, index, array) => {
//     return index
// })
// let res = sum
// console.log(res);

// let sum = user.map((value, index, array) => index)
// let res = sum
// console.log(res);

// let sum = user.some((value, index) => value > 690)
// let res = sum
// console.log(res);

// let sum = user.every((value, index) => value > 20)
// let res = sum
// console.log(res);

// let sum = user.find((value, index) => value > 20)
// let res = sum
// console.log(res);

// let sum = user.findIndex((value, index) => value > 200)
// let res = sum
// console.log(res);

// let sum = user.findLastIndex((value, index) => value > 200)
// let res = sum
// console.log(res);

// let sum = user.filter((value, index) => value > 200)
// let res = sum
// console.log(res);

// let sum = user.sort((a, b) => a - b)
// let res = sum
// console.log(res);

// let sum = user.sort((a, b) => b - a)
// let res = sum
// console.log(res);

// let user = [10, 20, 30, 40]
// let sum = user.reduce((acc, curr) => acc + curr, 5)
// let res = sum
// console.log(res);


// let user = [10, 20, 30, 40]
// let sum = user.reduceRight((acc, curr) => acc + curr, 5)
// let res = sum
// console.log(res);
