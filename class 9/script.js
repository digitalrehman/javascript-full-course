// new RegExp(/\d/)
// let res = /\d/


let text = "User Abdul_Rehman email abdul123@gmail.com ordered 5 items on 2026-03-07 from Karachi.";
// console.log(text.match(/mail|er/g));
// console.log(text.match(/(\d{4})-(\d{2})-(\d{2})/g));
// console.log(text.match(/[a-g]+/gi));
// console.log(text.match(/[ma]i/gi));
// console.log(text.match(/[a-gA-G0-9]+/g));
// console.log(text.match(/[a-zA-Z0-9@\._]+/g));
// console.log(text.match(/..ail|User/g));
// console.log(text.match(/^User/g));
console.log(text.match(/i.tems+/gi));
