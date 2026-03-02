let main = +prompt("how many enter number!")
// let largest = -Infinity;
let largest = +prompt("your largest number!");
for (let i = 1; i <= main; i++) {
    let num = +prompt("enter your number!")
    if (num > largest) {
        largest = num
    }
}

console.log("your largest number is: ", largest)