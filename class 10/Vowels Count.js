// function vowelsCount(str) {
//     let count = 0
//     for (let i of str) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             count += 1
//         }
//     }
//     return count 
// }
// console.log(vowelsCount("this is javascript"));

// for (let i of str) {
//     console.log(i);
// }

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// function vowelsCount(str) {
//     let vowel = "aeiou"
//     let count = 0
//     for (let i of str) {
//         if (vowel.includes(i)) {
//             count += 1
//         }
//     }
//     return count
// }
// console.log(vowelsCount("this is javascript"));


// ternory operator 
// 100 < 50 ? console.log("this is true") : console.log("this is false")

// function vowelsCount(str) {
//     let pattern = str.match(/[aeiou]/gi)
//     return pattern ? pattern.length : 0
// }
// console.log(vowelsCount("thIs IS PYTHON"));