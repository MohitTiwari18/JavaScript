/*

    Definition (Simple Words):
- Promise ek JavaScript object hota hai jo future me complete hone wale task (mostly async) ko represent karta hai
  jaise ki API call, file read, time delay, etc.

    Promise ek "vachan" hai ki kaam ya to hoga ya fail hoga — but response zarur milega.

----------------------------------------------------------------------------------------------------------------
- REAL LIFE EXAMPLE
Tumne pizza order kiya.
Delivery boy ne bola: "Sir, 30 min me pizza milega."
Ye hi promise hai — future me milega ya nahi.

✅ Pizza mil gaya = resolve

❌ Pizza nahi mila = reject

*/

//-------------------------------------------------------------------------------------------------------//

/*

 -SYNTAX OF PROMISE:
let promise = new Promise(function (resolve, reject) {
  // async task
  if (success) {
    resolve("Data mila ✅");
  } else {
    reject("Kuch galat ho gaya ❌");
  }
});

-USING .then() AND .catch():
promise
  .then(function (result) {
    console.log("Success:", result);  // ✅ success
  })
  .catch(function (error) {
    console.log("Error:", error);     // ❌ failure
  });

*/
//REAL LIFE EXAMPLE CODE
//------------------------------------------------------------------------------
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json(); // convert response to JSON
//   })
//   .then(function (data) {
//     console.log("Data received:", data);
//   })
//   .catch(function (err) {
//     console.log("Error occurred:", err);
//   });

//------------------------------------------------------------------------------
let pizzaOrder = new Promise(function (resolve, reject) {
  let isPizzaReady = true;

  if (isPizzaReady) {
    resolve("Pizza is ready! 🍕");
  } else {
    reject("Sorry! Pizza not ready 😢");
  }
});

pizzaOrder
  .then(function (message) {
    console.log("Success:", message);
  })
  .catch(function (error) {
    console.log("Failed:", error);
  });
