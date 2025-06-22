/*
| Feature             | `localStorage`                                               | `sessionStorage`                         |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| 🕒 Storage Duration | Jab tak manually delete na karein                            | Sirf tab tak jab tak browser tab open ho |
| 🧠 Persistent?      | Haan (page refresh ya browser close ke baad bhi data rahega) | Nahi (tab close karte hi data delete)    |
| 📦 Size Limit       | \~5-10 MB                                                    | \~5 MB                                   |
| 📘 Access Syntax    | `localStorage.setItem()` etc.                                | `sessionStorage.setItem()` etc.          |


====================================================================================================================================

//REAL WORD USE CASES:
| Use Case                     | localStorage      | sessionStorage         |
| ---------------------------- | ----------------- | ---------------------- |
| Login token (remember me)    | ✅ Yes (long term) | ❌ No (expires quickly) |
| Theme preference (dark mode) | ✅ Yes             | ❌ Not useful           |
| Temporary form data          | ❌ Not ideal       | ✅ Yes (tab based)      |
| Cart items (short time)      | ✅ Yes             | ✅ Maybe (if 1 tab)     |


*/

//-------------------------LOCALSTORAGE---------------------------------
// ✅ localStorage me data save karna
localStorage.setItem("username", "Prince");
// 'username' naam ka key bana aur usme 'Prince' value save hui permanently

// ✅ localStorage se data lena
let user = localStorage.getItem("username");
console.log("User from localStorage:", user);
// output: User from localStorage: Prince

// ✅ localStorage me data update karna
localStorage.setItem("username", "Rajkumar");
// ab 'username' ki value update ho gayi hai 'Rajkumar'

// ✅ localStorage se data delete karna (ek key)
localStorage.removeItem("username");
// sirf 'username' key delete ho gayi

// ✅ localStorage me se sab kuch delete karna
localStorage.clear();
// puri localStorage khali ho gayi (saf hogayi)

//------------------------------------------------------------------------------------------------//

//---------------------------SESSION STORAGE----------------------------------

// ✅ sessionStorage me data store karna
sessionStorage.setItem("email", "user@example.com");
// 'email' key me value 'user@example.com' store ho gayi (sirf tab ke liye)

// ✅ sessionStorage se data read karna
let email = sessionStorage.getItem("email");
console.log("Email from sessionStorage:", email);
// output: Email from sessionStorage: user@example.com

// ✅ sessionStorage me data delete karna
sessionStorage.removeItem("email");
// sirf 'email' key delete ho gayi

// ✅ sessionStorage ko puri tarah clear karna
sessionStorage.clear();
// sessionStorage bilkul khali ho gayi
