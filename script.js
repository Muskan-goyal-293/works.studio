function locomotivewithscrolltriger() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
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
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  
let fotterh2 = document.querySelector(".fotterbox h2");
fotterh2.addEventListener("click",()=>{
  locoScroll.scrollTo(0);
})
}

function navanimi() {
  gsap.to("nav .right .info", {
    x: 300,
    duration: 0.8,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".main",
      start: "top 1%",
      end: "top -30%",
      scrub: true,
    },
  });
}
let gsaptl = gsap.timeline();

function loder() {
  gsaptl.to(".box1", {
    y: "-100%",
    duration: 0.5,
    ease: "expo.out",
  });
  gsaptl.from(
    ".box2",
    {
      y: "100%",
      delay: 2,
      duration: 0.3,
      ease: "expo.out",
    },
    "animi"
  );

  gsaptl.to(
    ".loader h1",
    {
      color: "black",
      delay: 2,
    },
    "animi"
  );

  gsaptl.to(".loader", {
    display: "none",
  });
}

function page2imgamini() {
  let element = document.querySelectorAll(".elem");
  let page2 = document.querySelector(".page2");
  element.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      let bg = e.getAttribute("data-img");
      page2.style.backgroundImage = `url('${bg}')`;
    });
  });
}

function page3vdoanimi() {
  let videodiv = document.querySelectorAll("#videodiv");
  videodiv.forEach((vdo) => {
    vdo.addEventListener("mouseenter", () => {
      vdo.childNodes[1].childNodes[1].play();
      vdo.childNodes[1].style.opacity = 1;
    });
  });
  videodiv.forEach((vdo) => {
    vdo.addEventListener("mouseleave", () => {
      vdo.childNodes[1].childNodes[1].load();
      vdo.childNodes[1].style.opacity = 0;
    });
  });
}

function page3textanimi() {
  let arr = [
    "India",
    "United States",
    "Australia",
    "Canada",
    "Japan",
    "Germany",
    "France",
    "Brazil",
    "Russia",
    "China",
  ];
  let textdiv = document.querySelector("#textdiv");
  let heading = textdiv.querySelector(".text h2"); // Safe targeting
  let interval;
  textdiv.addEventListener("mouseenter", () => {
    let counter = 0;
    interval = setInterval(() => {
      heading.textContent = arr[counter];
      counter++;
      if (counter === arr.length) {
        counter = 0;
        clearInterval(interval);
      }
    }, 300);
  });

  textdiv.addEventListener("mouseleave", () => {
    heading.textContent = " ";
    clearInterval(interval);
  });
}



locomotivewithscrolltriger();
navanimi();
loder();
page2imgamini();
page3vdoanimi();
page3textanimi();
