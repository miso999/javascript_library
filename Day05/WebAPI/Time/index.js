// console.log("김밥");
// //setTimeout
// setTimeout(() => {
//   console.log("ㅎㅇ");
// }, 1000);
// console.log("떡볶이");

// setInterval(() => {
//   console.log("두유는 귀엽다");
// }, 2000);

const time = document.querySelector("#time");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

setInterval(() => {
  time.innerText = +time.innerText == 0 ? 0 : +time.innerText - 1;
}, 1000);

btn.addEventListener("click", () => {
  time.innerText = +input.value;

  setInterval(() => {
    time.innerText = +time.innerText == 0 ? 0 : +time.innerText;
  });
});

clearInterval(() => {
  if (+time.innerTtext <= 0) {
    clearInterval(a);
    console.log("ㅋㅋ");
    time.innerText = 0;
  } else {
    console.log("ㄹㅇ?");
    time.innerText = +time.innerText - 1;
  }
}, 1000);
