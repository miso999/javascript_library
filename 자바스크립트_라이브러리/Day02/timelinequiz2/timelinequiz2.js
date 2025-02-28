const tl = gsap.timeline();
tl.fromTo(".text > .first", { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
tl.fromTo(".text > .second", { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
