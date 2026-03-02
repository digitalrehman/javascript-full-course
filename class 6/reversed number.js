let main = +prompt("enter your number!")
let copy = main;
let reversed = 0;
while (main > 0) {
    let reminder = main % 10 //1
    reversed = reversed * 10 + reminder
    main = Math.floor(main / 10)
}

console.log("your actual number is", copy);
console.log("reversed number", reversed);



