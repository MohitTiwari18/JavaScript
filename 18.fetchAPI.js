/*
Fetch API JavaScript ka built-in feature hai jiska use karke hum HTTP requests bhejte hain 
jese ki GET (data lana), POST (data bhejna), PUT (data update karna), aur DELETE (data delete karna).

------------------------------------------------------------------------------------------------
BASIC SYNTAX :
fetch(url, {
  method: "GET" / "POST" / "PUT" / "DELETE",
  headers: { ... },
  body: JSON.stringify(data) // only in POST/PUT
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

*/
//------------------------------//
//GET REQUEST
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log("📥 GET Data:", data))
//   .catch((err) => console.error("❌ Error:", err));

//-----------------------------//
//POST REQUEST
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "New Post",
//     body: "This is a new post.",
//     userId: 1,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("📤 POST Response:", data))
//   .catch((err) => console.error("❌ Error:", err));

//--------------------------//
//PUT REQUEST
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     id: 1,
//     title: "Updated Title",
//     body: "Updated post content.",
//     userId: 1,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("🛠️ PUT Response:", data))
//   .catch((err) => console.error("❌ Error:", err));

//----------------------------------------------------------------//
//DELETE REQUEST
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then(() => console.log("🗑️ Deleted successfully"))
//   .catch((err) => console.error("❌ Error:", err));

//////////////////////////////////////////////////////////////////////
//COMPLETE CODE OF FETCH API USING ASYNC AWAIT
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// GET
async function getPosts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
}

// POST
async function createPost() {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
      body: "This is a post.",
      userId: 1,
    }),
  });
  const data = await response.json();
  return data.id;
}

// PUT
async function updatePost(postId) {
  const response = await fetch(`${apiUrl}/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: postId,
      title: "Updated Post",
      body: "This post has been updated.",
      userId: 1,
    }),
  });
  const data = await response.json();
}

// DELETE
async function deletePost(postId) {
  const response = await fetch(`${apiUrl}/${postId}`, {
    method: "DELETE",
  });
}

// All Together
async function runAllRequests() {
  await getPosts();
  const newId = await createPost();
  await updatePost(newId);
  await deletePost(newId);
}

runAllRequests();
