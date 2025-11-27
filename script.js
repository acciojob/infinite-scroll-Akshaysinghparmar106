//your code here!
const list = document.getElementById("list");
let counter = 1;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + counter++;
    list.appendChild(li);
  }
}

// Add first 10 items on load
addItems(10);

// Infinite scroll logic
window.addEventListener("scroll", function () {
  // When the user reaches the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items
  }
});
window.innerHeight + window.scrollY >= document.body.offsetHeight





