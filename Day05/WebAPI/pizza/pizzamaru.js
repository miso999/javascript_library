const makeDough = () => {
  return new Promise((success, fail) => {
    console.log("도우 만들기");
    success("도우 준비함");
  });
};

const makeTomato = () => {
  return new Promise((success, fail) => {
    console.log("토마토 바르기기");
    success("토마토바름");
  });
};

const makeCheese = () => {
  return new Promise((success, fail) => {
    console.log("치즈 뿌리기");
    success("치즈 뿌려짐");
  });
};

const packPizza = () => {
  return new Promise((success, fail) => {
    console.log("화덕에 넣음");
    success("맛있는 피자 등장");
  });
};

makeDough(() => {
  return new Promise((success, fail) => {
    console.log("도우만들기");
    success("도우 준비함")
  });
});

const makeTomato2 (()=>
    return new Promise((suuccess,fail)=>{
        
    }))

