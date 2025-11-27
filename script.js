//your code he
const list = document.getElementById("list");
let num = 1;

// Function to add numbers to the list
function addNumbers(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = num++;
    list.appendChild(li);
  }
}

// Add first 10 numbers on page load
addNumbers(10);

// Infinite scroll logic
window.addEventListener("scroll", () => {
  // Check if user reached bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addNumbers(2); // Add 2 new numbers
  }
});
window.innerHeight + window.scrollY >= document.body.offsetHeight




