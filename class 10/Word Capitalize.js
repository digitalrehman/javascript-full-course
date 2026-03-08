// Word Capitalize
// function wordCapitalize(str) {
//     let split = str.split(" ")
//     let capitalize = []
//     for (let i of split) {
//         let word = i.charAt(0).toUpperCase() + i.slice(1)
//         capitalize.push(word)
//     }
//     return capitalize.join(" ")
// }
// console.log(wordCapitalize("this is word capitalize programe"));


function wordCapitalize(str) {
    return str.split(" ").map((i) => i.charAt(0).toUpperCase() + i.slice(1)).join(" ")
}
console.log(wordCapitalize("this is word capitalize programe"));
