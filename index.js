let counter = document.querySelector("#conter");
let btn1 = document.querySelector(".btnIncrese");
let btn2 = document.querySelector(".btnDecrease");
let btn3 = document.querySelector(".btnReset");
let audio = new Audio("analog-appliance-button-2-185277.mp3");
const parentDiv = document.querySelector(".Btn");
// console.log(parentDiv);
let count = 0;

/**********************************************************************
 * @param
 *--> here using event delegation
 *@returns
 ***********************************************************************/
parentDiv.addEventListener("click", (e) => {
  const target = e.target.innerText;
  // console.log(target);

  if (target === "Increase: +1") {
    audio.play();
    count += 1;
    counter.innerText = count;
  } else if (target === "Decrease: -1") {
    audio.play();
    if (count <= 0) {
      count = 0;
    } else {
      count -= 1;
    }
    counter.innerText = count;
  } else if (target === "Reset") {
    audio.play();
    count = 0;
    counter.innerText = count;
  }
});

// btn1.addEventListener("click", (e) => {
//   audio.play();
//   count += 1;
//   counter.innerText = count;
//   // console.log(count);
// });

// btn2.addEventListener("click", (e) => {
//   audio.play();
//   if (count <= 0) {
//     count = 0;
//   } else {
//     count -= 1;
//   }
//   counter.innerText = count;
//   // console.log(count);
// });

// btn3.addEventListener("click", (e) => {
//   audio.play();
//   count = 0;
//   counter.innerText = count;
//   // console.log(count);
// });
