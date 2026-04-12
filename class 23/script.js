// console.log("navbar");
// setTimeout(() => {
//   console.log("fetch product");
// }, 5000);
// console.log("contact");

// function sum(cb) {
//   cb();
// }
// sum(() => {
//   console.log("hello");
// });

// api (application programing interface)

// GET
// POST
// PUT
// DELETE

// fullfilled
// pending
// rejected

// let promise = new Promise((resolve, reject) => {
//   let isLogin = false;
//   if (isLogin) {
//     resolve("fetch product successfully!");
//   } else {
//     reject("something went wrong");
//   }
// });
// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// let card = document.getElementById("card");

// function fetchProduct() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// fetchProduct()
//   .then((res) => {
//     res.forEach((item, index) => {
//       card.innerHTML += `
//         <div class="card">
//             <h2>${item.title}</h2>
//             <p>${item.body}</p>
//         </div>
//         `;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async  await
let card = document.getElementById("card");
async function fetchProduct() {
  try {
    card.innerHTML = "<h1>..Loading</h1>";
    let resposne = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!resposne.ok) {
      throw new Error("something went wrong");
    }
    card.innerHTML = "";
    return await resposne.json();
  } catch (err) {
    console.log(err);
  }
}

fetchProduct()
  .then((res) => {
    res.forEach((item, index) => {
      card.innerHTML += `
        <div class="card">
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </div>
        `;
    });
  })
  .catch((err) => {
    card.innerHTML = "<h1>Something went wrong...</h1>";
  });
