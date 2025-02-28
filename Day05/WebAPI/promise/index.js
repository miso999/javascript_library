//pending 대기중
//fulfilled 완료
const bro = new Promise((success, fail) => {
  setTimeout(() => {
    success("두유");
  });
});

console.log(bro);

const miso = new Promise((success, fail) => {
  setTimeout(() => {
    success(() => alert("두유 보고싶다"));
  }, 3000);
});

miso.then((v) => v());
