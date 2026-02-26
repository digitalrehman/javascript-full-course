// for
// while
// do while

// for (let i = 1; i <= 1000000; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i, 'ali');
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 2; i -= 2) {
//     console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i == 15) {
//     break;
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i == 15) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log("ali");
//   i++;
// }

// guess the number game
// let fix = 20;
// let user = prompt("please guess the number? ");
// while (user != fix) {
//   user = prompt("please try again? ");
// }
// console.log("you win");

// let i = 1
// while(i <= 100){
//     console.log(i);
//     if(i == 3){
//         break
//     }
//     i++
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i >= 10);

let user = prompt("enter your number from");
for (let i = 1; i <= 10; i++) {
  console.log(user, "x", i, "=", i * user);
}
