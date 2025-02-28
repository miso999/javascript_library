const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const data = document.querySelector("#data");

btn.addEventListener("click", () => {
  data.innerHTML = `<span class="loader"></span>`;
  fetch(`https://fakerapi.it/api/v2/books?_quantity=${+input.value}`)
    .then((v) => v.json())
    .then((v) => {
      data.innerHTML = "";
      v.data.forEach((book) => {
        data.insertAdjacentHTML("beforeend", `<div>${book.title}</div>`);
      });
    });
});
