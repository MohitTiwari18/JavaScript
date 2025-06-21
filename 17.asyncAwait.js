/* 
async and await JavaScript me asynchronous code ko likhne ka modern, clean aur readable way hai
 ye Promise ka hi advanced version hai.

👉 async function ka matlab hota hai: ye function Promise return karega
👉 await ka matlab hota hai: Promise ke settle hone tak wait karo, phir aage badho


*/
function orderPizza() {
  return new Promise((resolve, reject) => {
    resolve("Pizza is ready instantly! 🍕"); // turant resolve
  });
}

async function getPizza() {
  console.log("Ordering pizza...");

  const result = await orderPizza(); // koi delay nahi

  console.log(result); // Pizza is ready instantly! 🍕
}

getPizza();
