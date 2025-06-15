/*

👉 DOM = Document Object Model
Jab browser HTML page load karta hai, to us page ka structure JavaScript ke liye ek object 
form mein convert ho jaata hai — usi ko DOM kehte hain.

Simple language: DOM se JavaScript HTML elements ko dekh sakta hai, change kar sakta hai, 
delete ya add bhi kar sakta hai.

👉 🛠DOM Manipulation ka Use Kab Hota Hai?

-Button click par text change karna
-User form bhar raha ho to live validation dena
-Real-time countdown timer
-Light/Dark mode switch
-Live search results, etc.


👉 📌 Common DOM Methods:
Method	                        ||                            Use                              
-----------------------------------------------------------------------------------        
getElementById()            	||                ID se element find karna         
getElementsByClassName()    	||            Class name se sab elements lana          
getElementsByTagName()	        ||              Tag name se elements lana          
querySelector()	                ||            CSS selector se ek element lana          
querySelectorAll()	            ||          CSS selector se multiple elements lana         


*/

// ---------------------------------- DOM MANIPULATION WITH HTML CODE -----------------------------------

/*
// ========================= 1. Change background color ============\===========================
<button onclick="changeColor()">Change Background</button>

<script>
function changeColor() {
  document.body.style.backgroundColor = "lightblue";
}
</script>


// =============================== 2. Input field se value lena ================================
<input type="text" id="nameInput" placeholder="Enter name" />
<button onclick="showName()">Show Name</button>

<p id="output"></p>

<script>
function showName() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("output").innerText = `Hello, ${name}!`;
}
</script>

*/
