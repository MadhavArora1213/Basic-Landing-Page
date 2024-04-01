var tl = gsap.timeline();
tl.from("#logo,#nav h3,#nav button",{
    y:-100,
    duration:0.8,
    delay:0.3,
    opacity:0,
    stagger:0.2
})
tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3
})
tl.from("#left-img,#right-img,#mid-1,#mid-2",{
   opacity:0,
   stagger:0.3
})
tl.from("h5",{
 scale:0,
    opacity:0,
    // stagger:0.3
})
tl.from("h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})
