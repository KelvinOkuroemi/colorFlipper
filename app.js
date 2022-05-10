const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // Get random color index position
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

// copy function
// let copy = document.getElementById("copy-button")
// console.log(copy)
// copy.addEventListener("click",copyToClipboard)

function copyToClipboard() {
  let input;
  input = document.getElementById("copy").textContent;
  console.log(input)
  navigator.clipboard.writeText(input);
}

