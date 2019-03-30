var nav = document.getElementById("navBar")

// Nav var animations
//var lastPagePosition = pageYOffset


/*window.addEventListener("scroll", () => {
    if (pageYOffset < lastPagePosition && screen.width > 500) {
        nav.style.background = "rgba(26,23,30,.7)"
        nav.style.boxShadow = "0px 3px 6px rgba(26,23,30,.7)"
        nav.style.top = "0"
        setTimeout(() => {
            let tourPosition = document.getElementById("tours").getBoundingClientRect().top
            let productsPosition = document.getElementById("products").getBoundingClientRect().top
            let aboutPosition = document.getElementById("about").getBoundingClientRect().top
            let homePosition = document.getElementById("home").getBoundingClientRect().top
            if (tourPosition == 0 || productsPosition == 0 || aboutPosition == 0) {
                nav.style.top = "-60px"
            } else if (homePosition == 0) {
                nav.style.background = "none"
                nav.style.boxShadow = "none"
            }
        }, 10)
    } else if (pageYOffset > lastPagePosition && screen.width > 500) {
        nav.style.top = "-60px"
    }
    lastPagePosition = pageYOffset
})*/
window.addEventListener("scroll", ()=> {
    if (pageYOffset > 100) {
        nav.style.background = "rgb(242, 239, 234)"
        nav.style.boxShadow = "0px 3px 4px rgba(0,0,0,.5)"
        document.querySelectorAll('nav ul li a')[0].style.color = "rgb(80, 77, 72)"
        document.querySelectorAll('nav ul li a')[1].style.color = "rgb(80, 77, 72)"
        document.querySelectorAll('nav ul li a')[2].style.color = "rgb(80, 77, 72)"
        document.querySelectorAll('nav ul li a')[3].style.color = "rgb(80, 77, 72)"
        document.querySelectorAll('nav ul li a')[4].style.color = "rgb(80, 77, 72)"
    } else {
        nav.style.background = "none"
        nav.style.boxShadow = "none"
        document.querySelectorAll('nav ul li a')[0].style.color = "aliceblue"
        document.querySelectorAll('nav ul li a')[1].style.color = "aliceblue"
        document.querySelectorAll('nav ul li a')[2].style.color = "aliceblue"
        document.querySelectorAll('nav ul li a')[3].style.color = "aliceblue"
        document.querySelectorAll('nav ul li a')[4].style.color = "aliceblue"
    }
})


//Swiper initialize

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000,
    },
    initialSlide: 3,
    speed: 850,
    freeMode: true,
});