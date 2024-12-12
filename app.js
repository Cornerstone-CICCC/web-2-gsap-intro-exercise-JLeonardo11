// PUT YOUR CODE HERE
gsap.timeline({repeat:-1}) // Infinite loop
  .from(".red", { duration:1, x: "-50vw",y:"-100vh", ease: "power1.inOut" },0.25)
  .to(".red", { duration: 1, x: "92vw", ease: "power1.inOut" , borderRadius:"50%", backgroundColor:"green"},2)
  .to(".red", { duration: 1, x: "150vw", ease: "power1.inOut" },3)

  .from(".green", { duration: 1, x: "150vw", y:"-200vh", ease: "power1.inOut" },0.5) // Simultaneously with red
  .to(".green", { duration: 1, y:"84vh", ease: "power1.inOut", borderRadius:"50%", backgroundColor:"blue" },2)
  .to(".green", { duration: 1, x: "150vw", ease: "power1.inOut" },3)

  .from(".blue", { duration: 1, x: "50vw",y:"100vh", ease: "power1.inOut" },0.75) // Slight delay
  .to(".blue", { duration: 1, x: "-92vw", ease: "power1.inOut", borderRadius:"50%", backgroundColor:"yellow" },2)
  .to(".blue", { duration: 1, x: "-150vw", ease: "power1.inOut" },3)

  .from(".yellow", { duration:1, x: "-50vw",y:"100vh", ease: "power1.inOut" },1)
  .to(".yellow",{ duration:1, y:"-84vh", ease: "power1 inOut", borderRadius:"50%",  backgroundColor:"red"},2)
  .to(".yellow", { duration: 1, x: "-150vw", ease: "power1.inOut" },3)
