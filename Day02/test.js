// gsap.to(".box", {
//   x: 100,
//   stagger: 0.5,
//   duration: 1,
// });

//gsap.to(타겟, {어떻게});
//~로
gsap.to(".box", { backgroundColor: "green", duration: 1 });
//~으로부터
gsap.from(".box", { backgroundColor: "green", duration: 1 });
//~에서 ~로
gsap.fromTo(".box", { x: 0 }, { x: 100, duration: 2 });
