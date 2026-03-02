let main = +prompt("enter your number!")
let isPrime = true;

if (main <= 1) {
    isPrime = false
} else {
    for (let i = 2; i < main; i++) {
        if (main % i === 0) {
            isPrime = false
            break
        }
    }
}

if (isPrime) {
    console.log("your number is prime")
} else {
    console.log("your number is not prime")
}
