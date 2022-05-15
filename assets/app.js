let controller;
let slideScene;

function animateSlide() {
  //Init controller
  controller = new ScrollMagic.Controller();
  //Select some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //loop over each slide
  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-image");
    const img = slide.querySelector("image");
    const revealText = slide.querySelector(".reveal-text");
    //GSAP
    gsap.to(revealImg, 1, { x: "100%" });
    gsap.to(img, 1, { scale: 2 });
  });
}
