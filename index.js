let label = document.querySelector("#label #conter");
let btn1 = document.querySelector(".btnIncrese");
let btn2 = document.querySelector(".btnDecrease");
let btn3 = document.querySelector(".btnReset");
let audio = new Audio("analog-appliance-button-2-185277.mp3");

let count = 0;

btn1.addEventListener("click", (e) => {
  audio.play();
  count += 1;
  label.innerText = count;
  console.log(count);
});

btn2.addEventListener("click", (e) => {
  audio.play();
  if (count <= 0) {
    count = 0;
  } else {
    count -= 1;
  }
  label.innerText = count;
  console.log(count);
});

btn3.addEventListener("click", (e) => {
  audio.play();
  count = 0;
  label.innerText = count;
  console.log(count);
});
