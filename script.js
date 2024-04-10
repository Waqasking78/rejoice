gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});
document.querySelector(".page1").addEventListener("mousemove", (dets) => {
  gsap.to(".circle", {
    x: dets.x,
    y: dets.y,
  });
});
gsap.from(".page2 .elem span, .nono", {
  top: "10vw",
  //   duration: .2,
  stagger: 0.15,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    // markers: true,
    start: "-60%",
    end: "15%",
    scrub: 2,
    ease: [0.61, 1, 0.88, 1],
  },
});

gsap.from(".page3 .head p, .page3 .head h1", {
  y: 120,
  stagger: 0.1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    // markers: true,
    start: "-80%",
    end: "none",
    scrub: true,
  },
});

gsap.from(".nonom, .page5 .elem span", {
  top: "10vw",
  stagger: 0.2,
  // duration: 10,
  // color: "red",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page5",
    // markers: true,
    scrub: true,
    start: "-150%",
    end: "50%",
    ease: Power4,
  },
});

// document.querySelector(".page6").addEventListener("mousemove", (e) => {
//   console.log("move");
//   gsap.to(".page6-circle", {
//     x: e.x,
//     y: e.y,
//   });
// });

// document.querySelector(".page6").addEventListener("mouseenter", () => {
//   console.log("enter");
//   gsap.to(".page6-circle", {
//     opacity: 1,
//   });
// });
// document.querySelector(".page6").addEventListener("mouseleave", () => {
//   console.log("leave");
//   gsap.to(".page6-circle", {
//     opacity: 0,
//   });
// });

gsap.from(".nonom2, .page7 .elem span", {
  top: "10vw",
  stagger: 0.2,
  // duration: 10,
  // color: "red",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page7",
    // markers: true,
    scrub: true,
    start: "-90%",
    end: "40%",
    ease: Power4,
  },
});
gsap.from(".container-h1 h1 span",{
  y: -270,
  stagger: .1,
  // ease: Expo.out,
  // color: "red",
  scrollTrigger:{
    trigger: ".footer",
    scroller: ".main",
    start: "710%",
    end: "800%",
    // markers: true,
    scrub: 3,
  }
})


var tl = gsap.timeline()

tl.from(".loader h3",{
  x: 50,
  opacity: 0,
  duration: .7,
  stagger: .1,
})
tl.to(".loader h3",{
  x: -50,
  opacity: 0,
  duration: .7,
  stagger: .1,
})
tl.to(".loader",{
  opacity: 0,
})
tl.to(".loader",{
  display: "none",
  duration: .01,
})
tl.from("nav h1",{
  opacity: 0,
  x: "150"
},"anim")
tl.from("nav a",{
  opacity: 0,
  x: "-150"
},"anim")
tl.from(".h1-con h1 span",{
  y: 350,
  stagger: .06,
  ease: Power4
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
