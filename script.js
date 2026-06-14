let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let amPm = document.querySelector(".am-pm");
function timeFunct() {
  let time = new Date();
  if (time.getHours() < 12) {
    amPm.innerText = "AM";
  } else {
    amPm.innerText = "PM";
  }
  let hours = time.getHours();
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  hrs.innerText = hours < 10 ? "0" + hours : hours;
  mins.innerText =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  secs.innerText =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
}
function callFunction() {
  setInterval(timeFunct, 1000);
}
callFunction();

// Dark Mode

let container = document.querySelector(".container");
let mainBox = document.querySelector(".main-box");
let box = document.querySelectorAll(".box");
let darkBtn = document.querySelector("#dark-mode");
let middleSpan = document.querySelectorAll(".middle-span");
let img = document.querySelector("img");

function addDarkTheme() {
  container.classList.add("dark");
  mainBox.classList.add("dark");
  darkBtn.classList.add("dark");
  img.classList.add("dark");
  box.forEach((el) => {
    el.classList.add("dark");
  });
  middleSpan.forEach((el) => {
    el.classList.add("dark");
  });
  amPm.classList.add("dark");
}
function removeDarkTheme() {
  container.classList.remove("dark");
  mainBox.classList.remove("dark");
  darkBtn.classList.remove("dark");
  img.classList.remove("dark");
  box.forEach((el) => {
    el.classList.remove("dark");
  });
  middleSpan.forEach((el) => {
    el.classList.remove("dark");
  });
  amPm.classList.add("dark");
}

let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  addDarkTheme();
}

darkBtn.addEventListener("click", () => {
  if (container.classList.contains("dark")) {
    removeDarkTheme();
    localStorage.setItem("theme", "light");
  } else {
    addDarkTheme();
    localStorage.setItem("theme", "dark");
  }
});
