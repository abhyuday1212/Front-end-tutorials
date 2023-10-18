let timeformatbtn = document.querySelector(".time-format-btn");
let formatValue = "12"; 

timeformatbtn.addEventListener("click", () => {
  timeformatbtn.classList.toggle("active");

  if (formatValue === "12") {
    timeformatbtn.setAttribute("time-format-val", "24");
    formatValue = "24"; 
  } else {
    timeformatbtn.setAttribute("time-format-val", "12");
    formatValue = "12"; 
  }
});

let timetype = document.getElementById("timetype");
let crnt_dt = document.getElementById("crnt_dt");

setInterval(function updateClock(){
  let dt = new Date();
  crnt_dt.innerHTML = dt.toDateString();

  let hr = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();

  // Time Format
  if (hr >= 12) {
    timetype.innerHTML = "PM";
  } else {
    timetype.innerHTML = "AM";
  }

  // Set 12-hour clock format
  if (formatValue === "12") {
    hr = hr > 12 ? hr % 12 : hr;
  }

  document.querySelector("#hr").innerHTML = hr;
  document.querySelector("#min").innerHTML = min;
  document.querySelector("#sec").innerHTML = sec;
}, 1000);

// Toggle-switch button

let dotmenuBtn = document.querySelector(".dot-menu-btn");
let dotmenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", (e) => {
  dotmenu.classList.toggle("active");
  e.stopPropagation(); 
   clearInterval(intervalId);
});

document.addEventListener("click", (e) => {
  if (!dotmenu.contains(e.target) && !dotmenuBtn.contains(e.target)) {
    dotmenu.classList.remove("active");
    intervalId = setInterval(updateClock, 1000); // Restart the clock update interval
  }
});





