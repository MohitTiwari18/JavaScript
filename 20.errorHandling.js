/*
Jab JavaScript code me koi error aata hai, to poora program crash ho sakta hai.
try/catch block is error ko handle karta hai bina app ko tode.

Ye runtime errors ko catch karta hai aur tumhe option deta hai ki tum kya karna chahte ho agar error aaye.

-------------------------------------------------------------------------------------------------------------
 BASIC SYNTAX 
 
 try {
  // code jo execute hoga
} catch (error) {
  // agar upar wale code me error aaya to yaha handle hoga
}

----------------------------------------------------------------------------------------------------------------
USE CASES OF TRY/CATCH

    | Situation               | Why use try/catch?                         |
| ----------------------- | ------------------------------------------ |
| Fetch API               | Internet/server error handle karne ke liye |
| JSON parsing            | Agar JSON format galat ho                  |
| User input validation   | Galat input par warning dene ke liye       |
| File handling (Node.js) | Agar file missing ho ya unreadable ho      |

  

*/

try {
  let x = y + 1; // y is not defined (error)
} catch (err) {
  console.log("Error occurred:", err.message);
}

//----------------------------------------------------------//
//Real-Life Example: API Fetch with try/catch

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("❌ Failed to fetch:", err.message);
  }
}

getData();
