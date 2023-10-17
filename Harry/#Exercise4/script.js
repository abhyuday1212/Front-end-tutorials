let formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  var formatValue = formatSwitchBtn.getAttribute("date-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("date-format", "24");
  } else {
    formatSwitchBtn.setAttribute("date-format", "12");
  }
});

let timetype = document.getElementById("timetype");


let crnt_dt = document.getElementById("crnt_dt");
let display_time = document.getElementById("#display_time");

setInterval(() => {
  let dt = new Date();
  crnt_dt.innerHTML = dt.toDateString();

  let hr = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();

  // Time Format
  if (hr >= 12) {
    timetype.innerHTML = "PM";
  } else {
    timetype = "AM";
  }

  //set 12 hour clock format
  var formatValue = formatSwitchBtn.getAttribute("date-format");

  if (formatValue === "12") {
    hr = hr > 12 ? hr % 12 : hr;
  }

  document.querySelector("#hr").innerHTML = hr;
  document.querySelector("#min").innerHTML = min;
  document.querySelector("#timetype").innerHTML = timetype;
  document.querySelector("#sec").innerHTML = sec;
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
