// GET https://icanhazdadjoke.com/
let btn = document.getElementById("btn");
btn.addEventListener("click", async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
});
