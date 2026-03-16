// let date = new Date()
// yyyy-mm-dd
// yyyy-mm-ddThh:mm:ss
// let date = new Date('2026-03-01')
// let date = new Date(1700000000000)
// let date = Date.now()
// let timestamps = new Date(1773673248260)
// let res = date.getDate()
// let res = date.getFullYear()
// let res = date.getMonth() // 0-11
// let res = date.getDay() // 0-6
let date = new Date()
// let res = date.getTime()
// let res = date.getHours() // 0-23
// let res = date.getMinutes() // 0-59
// let res = date.getSeconds() // 0-59
// let res = date.getMilliseconds() // 0-999
// date.setTime(177367346688) // 0-999
// date.setFullYear(2027)
// date.setMonth(12)
// date.setDate(12)
// let res = date.toISOString()
// let res = date.toLocaleTimeString()
// let res = date.toLocaleDateString()
// let res = date.toTimeString()
// 2026-03-16T15:12:20.917Z

// 2023-11-30T02:32:49.628+00:00

// console.log(date.toLocaleString());
let res = date.toLocaleString("en-US", {
    // year: "numeric"
    year: "2-digit",
    month: "2-digit",
    // day: "2-digit"
    day: "numeric",
    weekday: "short",
    timeZone: "Asia/Karachi"
    // month: "long"
    // month: "narrow"
    // month: "short"

})
console.log(res);
