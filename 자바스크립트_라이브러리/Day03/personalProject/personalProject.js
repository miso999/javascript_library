gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".white_second_main_page",
    markers: true,
    start: "top center",
  },
});

t1.to(".white_second_main_page", {
  y: 0,
  opacity: 1,
  backgroundColor: "#ffffff",
  duration: 1,
  stagger: 0.5,
})
  .fromTo(
    ".image_like",
    { y: 20, opacity: 0 },
    { y: 0, duration: 0.5, opacity: 1 },
    "<"
  )
  .fromTo(
    ".image_bear",
    { y: 20, opacity: 0 },
    { y: 0, duration: 0.5, opacity: 1 },
    "<"
  )
  .fromTo(
    ".image_traveller",
    { y: 20, opacity: 0 },
    { y: 0, duration: 0.5, opacity: 1 },
    "<"
  )
  .fromTo(
    ".image_shinhan",
    { y: 20, opacity: 0 },
    { y: 0, duration: 0.5, opacity: 1 },
    "<"
  )
  .fromTo(
    ".image_purpleBear",
    { y: 20, opacity: 0 },
    { y: 0, duration: 0.5, opacity: 1 },
    "<"
  )
  .fromTo(
    ".image_good",
    { y: 20, opacity: 0 },
    { y: 0, duration: 0.5, opacity: 1 },
    "<"
  );

//첫번째 문구
const tt1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blue_first_main_text",
    markers: true,
    start: "top center",
  },
});

tt1.fromTo(
  ".blue_first_main_text",
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, stagger: 0.5 }
);

//두번째->세번째
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".pink_third_main_page",
    markers: true,
    start: "top center",
  },
});

t2.fromTo(
  ".pink_third_main_page",
  { y: 60, opacity: 0, backgroundColor: "#ffffff" },
  { y: 0, opacity: 1, backgroundColor: "#ebc3ce", duration: 1, stagger: 0.5 }
);

//세번째->네번째
const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".white_fourth_main_page",
    markers: true,
    start: "top center",
  },
});

t3.to(".white_fourth_main_page", {
  y: 0,
  opacity: 1,
  backgroundColor: "#ffffff",
  duration: 1,
  stagger: 0.5,
});

//네번째->다섯번째
const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".yellow_fifth_main_page",
    markers: true,
    start: "top center",
  },
});

t4.fromTo(
  ".yellow_fifth_main_page",
  { y: 60, opacity: 0, backgroundColor: "#ffffff", duration: 1, stagger: 0.5 },
  { y: 0, opacity: 1, backgroundColor: "#f2d9a1", duration: 1, stagger: 0.5 }
);

//다섯번째->여섯번째

const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".white_last_main_page",
    markers: true,
    start: "top center",
  },
});

t5.to(".white_last_main_page", {
  y: 0,
  opacity: 1,
  backgroundColor: "#ffffff",
  duration: 1,
  stagger: 0.5,
});
