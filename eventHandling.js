// ----------------------------- ✅ 10. Event Handling in JavaScript ---------------------------------

/*
🔷 Event Handling Kya Hota Hai?
👉 Jab user koi action perform karta hai (jaise button click, mouse move, key press, form submit),
 to JavaScript usko detect karta hai — isko Event Handling kehte hain.

📌 JavaScript ke through hum decide karte hain ki kis event pe kya response hona chahiye.

-----------------------------------------------------------------------------------------------------------------
🧠 Kuch Common Events:
Event	                            ||                          Kab Trigger Hota Hai?
-----------------------------------------------------------------------------------------------------------------
click	                            ||                          Jab button ya koi bhi element click ho
mouseover                           ||                          	Jab mouse kisi element ke upar aaye
keydown	                            ||                          Jab koi key press ho keyboard se
submit	                            ||                          Jab form submit ho
change	                            ||                          Jab input field ka value change ho
load	                            ||                          Jab page completely load ho jaye

*/

/*
=================================== Events handling code with JS =================================================
✅ Example 1: Button Click Event
<button id="myBtn">Click Me</button>
<p id="msg"></p>

<script>
  document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("msg").innerText = "You clicked the button!";
  });
</script>


✅ Example 2: Mouse Over Event
<h2 id="hoverMe">Hover over me!</h2>

<script>
  document.getElementById("hoverMe").addEventListener("mouseover", function () {
    alert("Mouse is over the text!");
  });
</script>

✅ Example 3: Key Press Event
<input type="text" id="inputBox" placeholder="Type something..." />

<script>
  document.getElementById("inputBox").addEventListener("keydown", function (event) {
    console.log("You pressed:", event.key);
  });
</script>

✅ Example 4: Form Submit Event
<form id="myForm">
  <input type="text" id="name" placeholder="Your Name" />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 🔒 Prevent page reload
    let name = document.getElementById("name").value;
    alert("Hello, " + name);
  });
</script>

*/
