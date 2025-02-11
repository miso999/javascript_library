// const tl = gsap.timeline();
// tl.fromTo(".first", { y: 20 }, { y: 0, opacity: 1, duration0: 3 });
// tl.fromTo(".second", { y: 20 }, { y: 0, opacity: 1, duration0: 3 });
// tl.to("text_bottom"), { x: 200, duration: 2 };
// gsap.to("text_bottom", { backgroundColor: "green", duration: 1 });

const t2 = gsap.timeline(); //reapeat -1은 무한반복
t2.fromTo(".sub > .first", { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
t2.fromTo(".sub > .second", { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
t2.fromTo(".sub > .third", { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
t2.fromTo(".sub > .fourth", { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
