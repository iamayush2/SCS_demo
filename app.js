const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin("scrollTrigger");

let footer = document.querySelector("#footer");

// gsap.from(".foot-box", {
//   scaleX: 1.2,
//   opacity: 0.2,
//   scrollTrigger: {
//     trigger: "#footer",

//     // pin: true,
//     markers: true,
//     start: "top 70%",
//   },
// });

const splitTypes = document.querySelectorAll(".text-revel");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "char" });

  // gsap.from(text.chars, {
  //   opacity: 0,
  //   y: 100,
  //   delay: 0.01,
  //   stagger: 0.1,
  //   duration: 0.2,
  //   scrollTrigger: {
  //     trigger: "#footer",

  //     // pin: true,
  //     // markers: true,
  //     start: "top 30%",
  //     // scrub: true,
  //   },
  // });
});

const textRevel = document.querySelectorAll(".text-revel");
const insta = document.querySelector(".insta");
const changeText = document.querySelector("#changetext");
console.log(insta.textContent);
console.log(changeText.textContent);
const s = changeText.textContent;

const footBox = document.getElementsByClassName(".foot-box");

insta.addEventListener("mouseenter", function (e) {
  console.log(e.textContent);
  changeText.textContent = `${insta.textContent}`;
  changeText.style.fontSize = "11vw";
});

insta.addEventListener("mouseleave", function (e) {
  console.log(e.textContent);

  changeText.textContent = `${s}`;
  changeText.style.fontSize = "11vw";
});

textRevel.forEach(function (e) {
  console.log(e.textContent);
});

textRevel.forEach((e) => {
  e.addEventListener("mouseenter", function (eve) {
    console.log(e.textContent);

    changeText.style.fontSize = "12vw";
    let text1 = new SplitType(changeText, { types: "char" });
    console.log(text1);
    gsap.from(changeText, {
      opacity: 0.1,
      y: 100,
      // delay: 0.001,

      duration: 0.1,
    });
    changeText.textContent = `${e.textContent}`;
    const footBox = document.querySelectorAll(".foot-box");
    // footBox.forEach((e) => {
    //   e.style.display = "none";
    // });
    console.log(footBox);
    console.log(text1.chars[0]);
  });
});

textRevel.forEach((e) => {
  e.addEventListener("mouseleave", function (eve) {
    console.log(e.textContent);

    changeText.textContent = `${s}`;
    gsap.from(changeText, {
      opacity: 0,
      y: 100,

      stagger: 0.1,
      duration: 0.1,
    });
    const footBox = document.querySelectorAll(".foot-box");
    // footBox.forEach((e) => {
    //   e.style.display = "flex";
    // });
    changeText.style.fontSize = "18vw";
  });
});

function delay(n) {
  n = n || 2000;

  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  let tl = gsap.timeline();

  tl.to(".loading-screen", {
    duration: 1.1,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1.1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".loading-screen", {
    left: "-100%",
  });
}

function contentTransition() {
  var tl = gsap.timeline();
  tl.from("#first h1", {
    duration: 1,
    y: 20,
    delay: 0.2,
    stagger: 0.1,
    ease: "Expo.easeInOut",
  });
}

function tranist() {
  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1500);
          done();
        },

        async enter(data) {
          contentTransition();
        },

        async once(data) {
          contentTransition();
        },
      },
    ],
  });
}

tranist();
