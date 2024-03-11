// function openNav() {
//     document.getElementById("nav").style.transform="translateY(0%)";


// }    

// function closeNav() {
//     document.getElementById("nav").style.transform="translateY(-150%)";
// }


function myFunction() {
    var menu = document.getElementById("nav");
    var navbar = document.getElementById("navbar");
    if (menu.style.transform === "translateY(0%)") {
        menu.style.transform = "translateY(-200%)";
    } else {
        menu.style.transform = "translateY(0%)";
    }

}


// --------------button menu for swatch buttons script---------

const list = document.querySelectorAll('.btn');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));



// --------------navigation bar scroll open---------


// const header = document.getElementById("navbar");
// const sticky = header.offsetTop;

// console.log(sticky)

// window.addEventListener('scroll', () => {

//     if (window.pageYOffset > (80)) {
//         header.classList.add('sticky');
//     } else (
//         header.classList.remove('sticky')
//     )
// })


//-----------gsap animation start-----------------

var nav = gsap.timeline()


nav.from(".loading-animation", {
    y: -10,
    duration: .5,
    stagger: .1,
    opacity: 0,

})

nav.to(".loading__screen", {
    y: ("-100%"),
    duration: 1,
})


nav.from(".nav-animation", {
    y: ("-300%"),
    duration: 1,
    stagger: .3,
    opacity: 0,
    ease: "back.out(1.7)",
})


var hero = gsap.timeline()

hero.from(".left-animation", {
    x: -100,
    duration: 1,
    opacity: 0,
    delay: 2.5,
})


hero.from(".right-animation", {
    x: 100,
    duration: 1,
    opacity: 0,
})

hero.from(".bottom-animation", {
    y: 100,
    duration: 1,
    opacity: 0,
})


gsap.from(".hero-img-animation", {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
})


let tl = gsap.timeline({

});

tl.fromTo(".scroll-animation", {
    y: 200,
    opacity: 0,
    stagger: 0.1,
    // duration: 1,
    ease: "power4",
}, {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    // duration: 1,
    ease: "power4",
    markers: true,
    scrollTrigger: {
        trigger: ".scroll-animation",
        start: "15% 100%",
        end: "15% -120%",
        scrub: 1,
    }
})


tl.fromTo(".animation__left", {
    x: "-100%",
    rotate: -60,
    opacity: 0,
    stagger: .1,
}, {
    x: 0,
    rotate: 0,
    opacity: 1,
    stagger: .1,
    scrollTrigger: {
        trigger: "animation__left",
        start: "30% 120%",
        end: "30% -120%",
        scrub: 1,
    }
})

tl.fromTo(".animation__right", {
    x: "100%",
    rotate: 60,
    opacity: 0,
    stagger: .1,
}, {
    x: 0,
    rotate: 0,
    opacity: 1,
    stagger: .1,
    scrollTrigger: {
        trigger: "animation__left",
        start: "30% 120%",
        end: "30% -120%",
        scrub: 1,
    }
})



tl.from(".resume__animation", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "resume__animation",
        start: "55% 100%",
        end: "35% -120%",
        scrub: 2,
    }
})

tl.fromTo(".animation-box-left", {
    x: -200,
    opacity: 0.1,
    duration: 1,
    stagger: 1,
}, {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "resume__animation",
        start: "55% 85%",
        end: "40% -120%",
        scrub: 2,
    }
})

tl.fromTo(".animation-box-right", {
    x: 200,
    opacity: 0.1,
    duration: 1,
    stagger: 1,
}, {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "resume__animation",
        start: "55% 85%",
        end: "40% -120%",
        scrub: 1,
    }
})

tl.from(".skill__animation", {
    y: 200,
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
        trigger: "skill__animation",
        start: "68% 100%",
        end: "55% -120%",
        scrub: 2,
    }
})


tl.from(".form__animation", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: .2,
    scrollTrigger: {
        trigger: "form__animation",
        start: "85% 100%",
        end: "65% -100%",
        scrub: 2,
    }
})