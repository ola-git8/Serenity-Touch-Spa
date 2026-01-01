window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// gsap section
gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({defaults: {duration: 1, ease: "power1.out"}});

tl.from("#hero-section", {opacity: 0})
.from("#hero-text", {opacity: 0, y: 50},  "-=0.5")
 .from("#hero-subtitle", {opacity: 0, x: 50}, "-=0.5")
 .from("#hero-btn", {opacity: 0, y: 50}, "-=0.5")

 
//  ABOUT SECTION ANIMATION
let aboutTl = gsap.timeline({
  defaults: { duration: 1, ease: "power2.out" },
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

aboutTl
  .from("#about-head", { opacity: 0, y: 30 })
  .from("#about-img", { opacity: 0, y: 30 }, "-=0.4")
  .from("#about-p", { opacity: 0, y: 30 }, "-=0.4")
  .from("#about-p2", { opacity: 0, y: 30 }, "-=0.4");

// services section

let serviceTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: "top 75%",
  }
});

serviceTl
  .from("#service-head", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  })
  .from(".service-card", {
    opacity: 0,
    y: 40,
    scale: 0.9,
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.3
  }, "-=0.2");

  // testimonals section

  let testimonalTl = gsap.timeline({
    scrollTrigger:{
      trigger: "#testimonal",
      start: "top 75%"
    }
  })

  testimonalTl
  .from("#testimonial-head", {opacity: 0, y: 30, duration: 0.6, ease:"power2.out"})
  .from(".testimonial-card", {opacity: 0, y: 40, scale: 0.9, duration: 0.6, ease:"back.out(1.7)", stagger:0.3}, "-=0.2");


  // CTA

  let CtaTl = gsap.timeline({
    scrollTrigger:{
      trigger: "#CTA",
      start: "top 75%"
    }
  })

  CtaTl
  .from(".cta-title", {opacity: 0, x: 30, duration: 0.8, ease:"power2.out"})
  .from(".cta-text", {opacity: 0, y: 30, duration: 0.8}, "-=0.3")
  .from(".btn-cta", {opacity: 0, y: 30, duration: 0.8}, "-=0.3")


  // contact section
  let contactTl = gsap.timeline({
    scrollTrigger:{
      trigger: "#contact",
      start: "top 75%"
    }
  })

  contactTl
  .from("#contact-head", {opacity: 0, y: 30, duration: 0.8, ease:"power2.out"})
  .from(".contact-input", {opacity: 0, y: 30, duration: 0.8, stagger:0.2}, "-=0.3")
  .from("#contact-btn", {opacity: 0, y: 30, duration: 0.8}, "-=0.3")
