const time = document.querySelector("#time");
setInterval(() => {
  const data = new Date().toLocaleString();
  time.innerText = Date;
}, 1000);
