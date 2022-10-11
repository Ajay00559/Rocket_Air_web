 
function circlemove() {
    document.querySelector("#video")
        .addEventListener("mousemove", e => {


            document.querySelector(".circle").style.display = "initial"
            document.querySelector(".circle").style.scale = "1"
            document.querySelector(".circle").style.left = `${e.clientX}px`
            document.querySelector(".circle").style.top = `${e.clientY}px`
        })
    document.querySelector("#video")
        .addEventListener("mouseleave", e => {
            document.querySelector(".circle").style.left = "50%"
            document.querySelector(".circle").style.top = "50%"
            document.querySelector(".circle").style.scale = ".1"
            document.querySelector(".circle").style.display = "none"
        })
}

function drag() {
    document.querySelector(".partnerscomp")
        .addEventListener("mousemove", e => {



            document.querySelector(".drag").style.display = "initial"
            document.querySelector(".drag").style.scale = "1"
            document.querySelector(".drag").style.left = `${e.offsetX}px`
            document.querySelector(".drag").style.top = `${e.offsetY}px`
        })
    document.querySelector(".partnerscomp")
        .addEventListener("mouseleave", e => {
            document.querySelector(".drag").style.left = "50%"
            document.querySelector(".drag").style.top = "0%"
            document.querySelector(".drag").style.scale = ".1"
            document.querySelector(".drag").style.display = "none"
        })
}
function slides() {
    let allSlides = document.querySelectorAll(".sld");
    allSlides = [...allSlides];

    var hover = null;

    allSlides.forEach(function (elem) {
        elem.addEventListener("mouseover", function (dets) {
            hover = "#opener" + dets.target.dataset.index;

            document.querySelector(hover).style.zIndex = "99999";
            document.querySelector(hover).style.transition = "all cubic-bezier(0.19, 1, 0.22, 1) 1s"
            document.querySelector(hover).style.width = "100%";

        })

        elem.addEventListener("mouseleave", function (dets) {
            hover = "#opener" + dets.target.dataset
            .index;
            document.querySelector(hover).style.zIndex = "initial";
            document.querySelector(hover).style.width = "0%";
        })
    });

    document.querySelector(".circular")
        .addEventListener("mousemove", function (dets) {
            var boundvalues = document.querySelector(".circular").getBoundingClientRect()
            var xValue = dets.clientX - boundvalues.x;
            var yValue = dets.clientY - boundvalues.y;

            document.querySelector("#minicircle").style.top = yValue + "px";
            document.querySelector("#minicircle").style.left = xValue + "px";
            document.querySelector("#minicircle").style.boxShadow = "0 0 8px 2px red";
        })

    document.querySelector(".circular")
        .addEventListener("mouseleave", function (dets) {
            document.querySelector("#minicircle").style.top = 50 + "%";
            document.querySelector("#minicircle").style.left = 50 + "%";

            document.querySelector("#minicircle").style.boxShadow = "none";
        })
}
gsap.to("#work .card", {
    scrollTrigger: {

        trigger: "#work",
        pin: "#work",
        start: "top 0%",
        scrub: 1,
    },
    top: "-100%",
    ease: Power4,
    stagger: .08
})
gsap.to("#allwork .indrag", {
    scrollTrigger: {

        trigger: "#allwork",
        pin: "#allwork",
        start: "top -5%",
        scrub: 1,
    },
    top: "49%",
    ease: Power4,
    stagger: .08
})
gsap.to("#allwork", {
    scrollTrigger: {

        trigger: ".indrag",
        // pin:"#allwork",
        start: "top -25%",
        end: "top -25%",
        scrub: true,
    },
    // top: "49%",
    backgroundColor: "black",
    // color:"white",
    // ease: Power4,
    // stagger: .08
})
gsap.to("#allwork .rowstxts", {
    scrollTrigger: {

        trigger: ".indrag",
        // pin:"#allwork",
        start: "top -25%",
        end: "top -25%",
        scrub: true,
    },
    // top: "49%",
    // backgroundColor:"red",
    color: "white",
    // ease: Power4,
    // stagger: .08
})
gsap.to("#line", {
    scrollTrigger: {

        trigger: ".indrag",
        // pin:"#allwork",
        start: "top -25%",
        end: "top -25%",
        scrub: true,
    },
    // top: "49%",
    height: "1px",
    backgroundColor: "white",
    // color:"white",
    // ease: Power4,
    // stagger: .08
})
gsap.to(".indrag", {
    scrollTrigger: {

        trigger: ".indrag",
        // pin:"#allwork",
        start: "top -25%",
        end: "top -25%",
        scrub: true,
    },
    // top: "49%",
    backgroundColor: "yellow",
    color: "black",
    // ease: Power4,
    // stagger: .08
})
gsap.to(".row h1", {
    scrollTrigger: {

        trigger: "#content",
        // pin:"#allwork",
        start: "top 70%",
        end: "top 15%",
        scrub: 1,
        // markers:true,
    },
    // top: "49%",
    // backgroundColor:"yellow",
    color: "black",

    // ease: power1.easeOut,
    // stagger: .08
})
gsap.to("#line", {
    scrollTrigger: {

        trigger: "#content",
        // pin:"#allwork",
        start: "top 70%",
        end: "top 15%",
        scrub: 1,
        // markers:true,
    },
    // top: "49%",
    backgroundColor: "black",
    // color:"black",

    // ease: power1.easeOut,
    // stagger: .08
})
// function nav(){
//     const body = document.body;
// const header = document.querySelector("header");
// const main = document.querySelector("main");
// const headerHeight = document.querySelector("header").offsetHeight;
// main.style.top = headerHeight + "px";
// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//   let currentScroll = window.pageYOffset;
//   if (currentScroll - lastScroll > 0) {
//     header.classList.add("scroll-down");
//     header.classList.remove("scroll-up");
//   } else {
//     // scrolled up -- header show
//     header.classList.add("scroll-up");
//     header.classList.remove("scroll-down");
//   }
//   lastScroll = currentScroll;
// })
// }
// nav()
// proxyScroll()
slides()
circlemove();
drag()