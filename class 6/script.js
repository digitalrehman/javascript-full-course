let main = +prompt("enter your number!")
let copy = main;
let armstrong = 0


while (main > 0) {
    let remider = main % 10
    armstrong += remider * remider * remider
    main = Math.floor(main / 10)
}

if (copy == armstrong) {
    console.log("your number is armstrong number");
} else {
    console.log("your number not armstrong number");
}