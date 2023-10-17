const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  var formatValue = formatSwitchBtn.getAttribute("date-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("date-format", "24");
  } else {
    formatSwitchBtn.setAttribute("date-format", "12");
  }
});

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ms = document.getElementById("ms");
let timetype = document.getElementById("timetype");
let period = "AM";

let crnt_dt = document.getElementById("crnt_dt");
let display_time = document.getElementById("#display_time");

// let newDate = new Date(2030, 5, 6, 9, 3, 2, 34);
setInterval(() => {
  let dt = new Date();
  crnt_dt.innerHTML = dt.toDateString();

  hr.innerHTML = dt.getHours();
  min.innerHTML = dt.getMinutes();
  sec.innerHTML = dt.getSeconds();

  // Time Format
  if (hr >= 12) {
    timetype.innerHTML = "PM";
  } else {
    timetype.innerHTML = "AM";
  }

  //set 12 hour clock format
  var formatValue = formatSwitchBtn.getAttribute("date-format");

  if (formatValue === "12") {
    hr = hr > 12 ? hr % 12 : hr;
  }
}, 1000);

// toggle-switch button

const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");
dotmenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});
