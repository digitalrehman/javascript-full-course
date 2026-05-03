let BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//post
let titles = document.getElementById("title");
let bodys = document.getElementById("body");
let postBTN = document.getElementById("post");

// optional
let message = document.getElementById("message");
let loader = document.getElementById("loader");

// put
let postId = document.getElementById("id");
let putTitle = document.getElementById("updateTitle");
let put = document.getElementById("put");

// delete
let deleteBTN = document.getElementById("delete");
let deleteId = document.getElementById("deleteId");

// ============  loader =========
function loading(status) {
  loader.style.display = status ? "block" : "none";
}

// ============  post =========
postBTN.addEventListener("click", async () => {
  let userTitle = titles.value;
  let userBody = bodys.value;

  if (!userBody || !userTitle) {
    message.style.display = "block";
    message.innerText = "Required field are missing";
    return;
  }

  try {
    loading(true);
    let response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: userTitle,
        body: userBody,
      }),
    });

    if (!response.ok) {
      message.style.display = "block";
      message.innerText = "something went wrong";
    }
    let data = await response.json();
    loading(false);

    message.style.display = "block";
    message.style.background = "rgba(7, 221, 60, 0.171)";
    message.style.color = "green";

    message.innerText = `your post add ${data.title} successfully!`;
  } catch (error) {
    loading(false);
    message.style.display = "block";
    message.innerText = error.message || "something went wrong";
  }
});

// ============  put =========
put.addEventListener("click", async () => {
  let putPostId = postId.value;
  let putPostTitle = putTitle.value;

  if (!putPostId || !putPostTitle) {
    message.style.display = "block";
    message.innerText = "Required field are missing";
    return;
  }

  try {
    loading(true);
    let response = await fetch(`${BASE_URL}/${putPostId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: putPostTitle,
      }),
    });

    if (!response.ok) {
      message.style.display = "block";
      message.innerText = "something went wrong";
    }
    let data = await response.json();
    console.log(data);

    loading(false);

    message.style.display = "block";
    message.style.background = "rgba(7, 221, 60, 0.171)";
    message.style.color = "green";

    message.innerText = `your post update ${data.title} successfully!`;
  } catch (error) {
    loading(false);
    message.style.display = "block";
    message.innerText = error.message || "something went wrong";
  }
});

// ============ delete =========
deleteBTN.addEventListener("click", async () => {
  let deletePostId = deleteId.value;

  if (!deletePostId) {
    message.style.display = "block";
    message.innerText = "Delete Id is required";
    return;
  }

  try {
    loading(true);
    let response = await fetch(`${BASE_URL}/${deletePostId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      message.style.display = "block";
      message.innerText = "something went wrong";
    }
    let data = await response.json();

    loading(false);

    message.style.display = "block";
    message.style.background = "rgba(7, 221, 60, 0.171)";
    message.style.color = "green";

    message.innerText = `your post delete successfully!`;
  } catch (error) {
    loading(false);
    message.style.display = "block";
    message.innerText = error.message || "something went wrong";
  }
});
