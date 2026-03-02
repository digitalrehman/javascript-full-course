let main = +prompt("how many number enter!")

let odd = 0
let even = 0

for (let i = 1; i <= main; i++) {
    let value = +prompt("enter your number!")
    if (value % 2 === 0) {
        even++
    } else {
        odd++
    }
}

console.log("even number", even);
console.log("odd number", odd);
