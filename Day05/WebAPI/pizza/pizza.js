const btn = document.querySelector("#btn");
const state = document.querySelector("#state");

const orderPizza = () => {
  return new Promise((success, fail) => {
    const order = confirm("피자 주문하실래여?");
    if (order) success("피자 주문 완료");
    else fail("피자 주문 취소");
  });
};

btn.addEventListener("click", () => {
  orderPizza()
    .then((v) => {
      state.innereText = v;
    })
    .catch((fail) => {
      state.innerText = fail;
    });
});
