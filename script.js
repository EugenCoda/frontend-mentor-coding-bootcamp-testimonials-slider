let slide1 = document.querySelector(".slide-1");
let slide2 = document.querySelector(".slide-2");
let button = document.querySelector(".slide-button");

button.addEventListener("click", () => {
  slide1.classList.toggle("show");
  slide2.classList.toggle("show");
});

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    slide1.classList.toggle("show");
    slide2.classList.toggle("show");
  } else if (e.keyCode == "39") {
    slide1.classList.toggle("show");
    slide2.classList.toggle("show");
  }
}
