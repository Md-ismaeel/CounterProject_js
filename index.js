let label = document.querySelector("#label #conter");
let btn1 = document.querySelector(".btnIncrese");
let btn2 = document.querySelector(".btnDecrease");
let btn3 = document.querySelector(".btnReset");

let count = 0;

btn1.addEventListener("click", (e) => {
  count += 1;
  label.innerText = count;
  console.log(count);
});

btn2.addEventListener("click", (e) => {
  if (count <= 0) {
    count = 0;
    // btn2.disabled = true;
  } else {
    // btn2.disabled = false;
    count -= 1;
  }
  label.innerText = count;
  console.log(count);
});

btn3.addEventListener("click", (e) => {
  count = 0;
  label.innerText = count;
  console.log(count);
});
