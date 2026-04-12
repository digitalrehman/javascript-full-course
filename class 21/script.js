// localStorage.setItem("user","my name is abdul rehman")
// localStorage.setItem("user1","my name is abdul rehman")
// localStorage.setItem("user2","my name is farhan")
// let getUser = localStorage.getItem("user")
// localStorage.removeItem("user1")
// localStorage.clear()
// console.log(getUser);

// console.log(localStorage.key(3));
// console.log(localStorage.length);

// Array/Object

// localStorage.setItem("user", JSON.stringify(["ali","bilal",10]))
// localStorage.setItem(
//   "student",
//   JSON.stringify({
//     name: "ali",
//     age: 30,
//     city: "karachi",
//   }),
// );
// let getItem = JSON.parse(localStorage.getItem("student"))
// console.log(getItem);

// sessionStorage.setItem("user","my name is ali khan")
// console.log(sessionStorage.length);
// console.log(sessionStorage.getItem("user"));

let themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
    let getTheme = localStorage.getItem("theme")
    if(getTheme == "dark"){
        document.body.classList.add("dark-theme")
    }
});
