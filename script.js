




function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
   let parent =  document.createElement("span");
   let child =  document.createElement("span");

   parent.classList.add("parent");
   child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);

})
}

revealToSpan();



var tl = gsap.timeline();
tl.from(".child span",{
  x: 100,
  duration : 1 ,
  stagger : .2,
  opacity : 0,
  delay: 1,
  ease : Power3.easeInOut
})



tl.to(".parent .child",{
  y: "-100%",
  duration : 1 ,
  delay: 1,
  ease : Circ.easeInOut
})

tl.to("#loader",{
  height : 0,
  duration : 1 ,
  ease : Circ.easeInOut
 
})
tl.to("#green",{
  height : "100%",
  top: 0,
  duration : 1 ,
  delay: -.8,
  ease : Circ.easeInOut
 
})
tl.to("#green",{
  height : 0,
  duration : 1 ,
  delay: -.5,
  ease : Circ.easeInOut

 
})

tl.from(".row h1 , .row2 h1 , .row .text", {
  y: 100,
  stagger : .2,
  scale:1,
  opacity : 0,
  scrub:2,
  ease : Power3.easeInOut
})
tl.from(".row2 h3",{
  x: -100,
  stagger : .2,
  opacity : 0,
  ease : Power3.easeInOut
})



Shery.makeMagnet("#im  img, #akash img , #hans img" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });








tl2 = gsap.timeline();

tl2.from("#im img",{
    y: 100,
    opacity : 0,
    delay : 3.8,
    duration:1,

    stagger:0.2
})

tl2.from("#akash img",{
    y: 100,
    opacity : 0,

    stagger:0.2
})
tl2.from("#hans img",{
    y: 100,
    opacity : 0,

    stagger:0.2
})
tl2.from("#home i",{
    x: 100,
    opacity : 0,

    stagger:0.2
})


