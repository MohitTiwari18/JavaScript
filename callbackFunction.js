/*
- Why use callback?

| Reason                                     | Explanation                                     |
| ------------------------------------------ | ----------------------------------------------- |
| ✅ Code ko modular banata hai               | Ek function doosre ke baad execute hota hai     |
| ✅ Async code handle karta hai              | setTimeout, fetch, etc.                         |
| ✅ Reusable aur flexible                    | Same function me alag-alag callback de sakte ho |
| ✅ Event driven programming ke liye perfect | React, Node.js me extensively used              |

------------------------------------------------------------------------------------------------------

Callback function ek aisa function hota hai jo kisi doosre function ke andar
 argument ke roop me pass kiya jata hai, aur later usse call kiya jata hai.

 Yani:
-Tum ek function banao
-Us function me ek aur function pass karo
-Jab pehla function chalta hai, to baad me tumhara passed function bhi chala diya jata hai — yehi hota hai callback
*/
function gharKaKaam(kamKhatmHua) {
  console.log("Maa: Jhaadu pocha karlo!");
  kamKhatmHua(); // call kar liya baad me
}

function maaKoBatana() {
  console.log("Beta: Ho gaya kaam maa!");
}

gharKaKaam(maaKoBatana);
