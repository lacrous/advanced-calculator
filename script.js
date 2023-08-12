
const equals = document.getElementById("equal");
const backspaces = document.getElementById("backspace");
const clears = document.getElementById("clear");

equals.addEventListener('click', equal);
backspaces.addEventListener('click', backspace);
clears.addEventListener('click', clear);

function equal() {
  result = document.getElementById("answer").value;
  document.getElementById("answer1").value = eval(result);
}

function backspace() {
  var space = document.getElementById("answer").value;
  var space = space.substring(0, space.length - 1);
  document.getElementById("answer").value = space;
}

function clear() {
  var cl = '';
  document.getElementById('answer').value = cl;
  document.getElementById("answer1").value = cl;
}



const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
const answer = document.querySelector(".answer");
const answer1 = document.querySelector(".answer1");
const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  answer.classList.toggle("actiive");
  answer1.classList.toggle("actiive");
  sun.classList.toggle("sunigo");
  moon.classList.toggle("darkso");
  isDark = !isDark;
};



