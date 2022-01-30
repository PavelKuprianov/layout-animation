document.addEventListener('DOMContentLoaded', function() {

  gsap.to(".hero__title", {duration: 1, ease: "none", opacity: 1, y: -40, delay: 0.5 });

  gsap.to(".hero__btn", {duration: 1, ease: "none", opacity: 1, y: -30, delay: 0.5 });

  gsap.to(".hero__descr", {duration: 0.9, ease: "none", opacity: 1, delay: 1.5 });

  gsap.to("#img1", {duration: 0.5, ease: "none", opacity: 1, delay: 1.9 });

  gsap.to("#img2", {duration: 0.4, ease: "none", opacity: 1, delay: 2.3});

  gsap.to("#img3", {duration: 0.4, ease: "none", opacity: 1, delay: 2.6});
})

let tl;
document.querySelector('.burger').addEventListener('click', () => {
  animateFunc();
});


function animateFunc() {

  tl = gsap.timeline();

  tl.to(".menu", {duration: 1, ease: "none", display: "block", zIndex: 100, opacity: 1}, "someLabel")

  .to(".close", {duration: 1, ease: "none", zIndex: 100, opacity: 1}, 0.2)

  .fromTo(".menu__top", {height: 0, padding: 0}, {ease: "back.out(2)", height: 80, paddingTop: 100, duration: 0.7}, 0.6)

  .to(".menu__nav", {duration: 1, ease: "none", opacity: 1, y: -30}, 0.8)

  .to(".social", {duration: 1, ease: "none", opacity: 1, y: -30}, "<+=0.7")

  .to(".menu__right", {duration: 1, ease: "none", opacity: 1, y: -30}, ">-=1");

}

  document.querySelector('.close').addEventListener('click', function() {
    console.log('GGGGGGGGGGG')
    tl.reverse(0);
  });
