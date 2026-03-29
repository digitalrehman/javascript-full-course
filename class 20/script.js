// ES5 onClick, onScroll, onWindowLoad, onReload
// ES6 Click, Scroll, WindowLoad, Reload

// let title = document.getElementById("title");
// let btn = document.getElementById("btn");

// title.onmouseenter = function red() {
//   title.style.color = "red";
//   title.innerText = "This is Red Color";
// };
// title.onmouseleave = function green() {
//   title.style.color = "green";
//   title.innerText = "This is Green Color";
// };
// btn.onclick = function purple() {
//   title.style.color = "purple";
//   title.innerText = "This is Purple Color";
// };

// title.onmousemove = function orange() {
//   title.style.color = "orange";
//   title.innerText = "This is Orange Color";
// };

// let title = document.getElementById("title");
// let para = document.getElementById("para");
// let btn = document.getElementById("btn");
// let ul = document.getElementById("ul");

// document.addEventListener("keydown", (e) => {
//   if (e.ctrlKey && e.key == "b") {
//     para.style.fontWeight = "bold";
//   }

//   if (e.ctrlKey && e.key == "i") {
//     para.style.fontStyle = "italic";
//   }

//   if (e.ctrlKey && e.key == "s") {
//     para.style.textDecoration = "overline";
//   }

//   if (e.ctrlKey && e.key == "u") {
//     para.style.textDecoration = "underline";
//   }

//   if (e.key == "r") {
//     document.body.style.background = "red";
//   }

//   if (e.key == "b") {
//     document.body.style.background = "blue";
//     document.body.style.color = "white";
//   }

//   if (e.altKey && e.ctrlKey && e.key == "a") {
//     alert("yes this is perfect");
//   }
//   if (e.key == "h") {
//     if (para.style.display == "block") {
//       para.style.display = "none";
//     } else {
//       para.style.display = "block";
//     }
//   }
// });

// let count = 0;
// btn.addEventListener("click", () => {
//   count++;
//   title.innerText = `Counter ${count}`;
// });

// btn.addEventListener("click", (e) => {
//   title.style.color = "orange";
//   title.innerText = "This is Orange Color";
// });

// title.addEventListener("mouseenter", (e) => {
//   title.style.color = "red";
//   title.innerText = "This is Red Color";
// });

let colorsName = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

let password = document.getElementById("password");
let color = document.getElementById("color");
let box = document.getElementsByClassName("box")[0];
let btn = document.getElementById("btn");
let toggle = document.getElementById("toggle");
let radius = document.getElementById("radius");
let select = document.getElementById("select");

toggle.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    toggle.innerText = "Hide";
  } else {
    password.type = "password";
    toggle.innerText = "Show";
  }
});

btn.addEventListener("click", () => {
  let input = color.value;
  if (input == "") {
    alert("please enetr some color");
  } else {
    box.style.background = input;
  }
});

colorsName.map((color, index) => {
  select.innerHTML += `
        <option value="${color}">${color}</option>
    `;
});

color.addEventListener("input", () => {
  let input = color.value;
  box.style.background = input;
});
radius.addEventListener("input", () => {
  let input = radius.value;
  box.style.borderRadius = input + "px";
});

select.addEventListener("input", () => {
  let selectColor = select.value;
  box.style.background = selectColor;
});

// let form = document.getElementById("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let userValue = e.target.name.value;
//   let useremail = e.target.email.value;
//   if (userValue == "" || useremail == "") {
//     alert("required field are missing");
//   } else {
//     console.log("Hi" + userValue);
//     console.log(useremail);
//   }
// });

let child = document.getElementById("child");
let grandParent = document.getElementById("grandParent");
let parent = document.getElementById("parent");

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child");
});
parent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("parent");
});
grandParent.addEventListener("click", () => {
  console.log("grandParent");
});
