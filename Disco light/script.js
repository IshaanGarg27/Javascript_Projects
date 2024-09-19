const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");
let intervalId;

function changeColor() {
  let hex = "#";
  const hexString = "0123456789ABCDEF";
  for (let i = 1; i <= 6; i++) {
    hex += hexString[Math.floor(Math.random() * 16)];
  }
  return hex;
}

start.addEventListener("click", function (e) {
  function bgChange() {
    document.body.style.backgroundColor = changeColor();
  }

  intervalId = setInterval(bgChange, 1000);
});

stop.addEventListener("click", function (e) {
  clearInterval(intervalId);
});
