const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const recipeList = document.querySelector("#recipes");

btn.addEventListener("click", () => {
  recipeList.innerHTML = `<span class="loader"></span>`;
  fetch(`https://dummyjson.com/recipes/search?q=${input.value}`)
    .then((v) => v.json())
    .then((v) => {
      recipes.innerHTML = "";
      v.recipes.forEach((p) => {
        recipeList.insertAdjacentHTML("beforeend", `<img src=${p.image}>`);
        recipeList.insertAdjacentHTML("beforeend", `<span>${p.name}</span>`);
      });
    });
});
