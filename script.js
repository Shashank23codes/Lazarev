function navAnimation() {

    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav-bottom", {
            height: "22vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navAnimation();

// page2 right-elem hover Animation start here 

function page2ElemAnimation() {
    var rightElems = document.querySelectorAll(".right-elem");
    // console.log(rightElems);
    rightElems.forEach(function (elem) {
        // console.log(elem.childNodes)
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            console.log(dets);
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 120
            })
        })
    })
}
page2ElemAnimation();

//page3 animation start

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector(".page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}
page3VideoAnimation()

// page7 Animation 
var section = document.querySelectorAll(".sec1-right");
// console.log(section)
section.forEach(function (elem) {
    // console.log(elem.childNodes)
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[5].style.opacity = 1
        elem.childNodes[5].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[5].style.opacity = 0
        elem.childNodes[5].load()
    })
    console.log(elem.childNodes[7])
    elem.addEventListener("mouseenter", function () {
        gsap.to(elem.childNodes[7], {
            opacity: 1,
            scale: 1
        })
    })
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[7], {
            opacity: 0,
            scale: 0
        })
    })
    elem.addEventListener("mousemove", function (dets) {
        console.log(dets);
        gsap.to(elem.childNodes[7], {
            x: dets.x - elem.getBoundingClientRect().x - 100,
            y: dets.y - elem.getBoundingClientRect().y - 540
        })
    })
})