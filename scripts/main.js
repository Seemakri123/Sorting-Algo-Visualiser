let array = [];
let speed = 100;

const a_size = document.getElementById("a_size");
const a_speed = document.getElementById("a_speed");
const a_generate = document.getElementById("a_generate");
const array_container = document.getElementById("array_container");

a_size.addEventListener("input", generateArray);
a_speed.addEventListener("input", () => {
  speed = 1000 / a_speed.value;
});
a_generate.addEventListener("click", generateArray);

function generateArray() {
  array = [];
  array_container.innerHTML = "";

  for (let i = 0; i < a_size.value; i++) {
    let value = Math.floor(Math.random() * 100) + 1;
    array.push(value);

    let bar = document.createElement("div");
    bar.classList.add("array-bar");
    bar.style.height = `${value * 3}px`;
    bar.style.width = `${100 / a_size.value}%`;
    array_container.appendChild(bar);
  }
}

window.onload = generateArray;
