// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     markers: true,
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//     pin: true,
//   },
// });

// tl.fromTo(".box", { x: 0 }, { x: 300, duration: 2 });

gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
  ScrollTrigger: {
    markers: true,
    trigger: ".second",
    scrub: true,
    start: "top top",
  },
});
