// let btn = document.getElementById("stop");
// let box = document.getElementById("box");
// console.log(box);

// let id = setTimeout(() => {
//   console.log("hello");
// }, 3000);

// btn.addEventListener("click", () => {
//   clearTimeout(id);
// });

// let count = 0;
// let id = setInterval(() => {
//     count++;
//     box.style.width = count * 2 + "px"
// }, 1000);

// btn.addEventListener("click", () => {
//   clearInterval(id);
// });

let toastBtn = document.getElementById("toast-btn");
let toast = document.getElementById("toast");
let resendOtp = document.getElementById("resend-btn");
let sendOtp = document.getElementById("send-btn");
let expireTime = document.getElementById("expire-time");

toastBtn.addEventListener("click", () => {
  toast.classList.add("toast");
  setTimeout(() => {
    toast.classList.remove("toast");
  }, 2000);
});

let timeIntervel;
sendOtp.addEventListener("click", () => {
  let timeLeft = 10;

  sendOtp.disabled = true;
  resendOtp.disabled = true;
  expireTime.innerText = timeLeft;

  timeIntervel = setInterval(() => {
    timeLeft--;
    expireTime.innerText = timeLeft;
    if (timeLeft == 0) {
      sendOtp.disabled = false;
      resendOtp.disabled = false;
      clearInterval(timeIntervel);
    }
  }, 1000);
});
