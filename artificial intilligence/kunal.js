var tl = gsap.timeline();
tl.from("#logo img  ", {
  y: -200,
  duration: 0.4,
  delay: 0.2,
  opacity: 0.9,
});
tl.from("#logo h3  ", {
  y: -200,
  duration: 0.4,
  delay: 0.2,
  opacity: 0.9,
});
tl.from("#lokhande h4 ", {
  y: -200,
  duration: 0.4,
  delay: 0.2,
  opacity: 0.9,
  stagger: 0.2,
});
tl.from("#lokhande button", {
  y: -200,
  duration: 0.4,
  delay: 0.2,
  opacity: 0.9,
});

tl.from("#main p ", {
  x: -450,
  duration: 0.9,
  delay: 0.6,
  opacity: 0.2,
  stagger: 1,

});
tl.from("#main p1", {
  x: 450,
  duration: 0.4,
  delay: 0.2,
  opacity: 0,
  stagger: 1,
});

tl.from("#main p2 button", {
  x: -400,
  duration: 0.4,
  delay: 0.2,
  stagger: 1,
  /*    opacity: 0.9, */
});
tl.from("#g img", {
/*   x: 500, */
  duration: 0.9,
  delay: 0.6,
  opacity: 0,
  scale: 0.5,
  rotation : 360,
  stagger: 1,   
});
