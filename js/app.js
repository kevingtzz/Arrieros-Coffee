//Navbar animation
var menu = document.getElementById('menu-icon')
menu.addEventListener("click", ()=>{
    let menuList = document.getElementById('menu-list')
    menuList.classList.add('showMenu')
    menuList.addEventListener("click", ()=>{
        menuList.classList.remove('showMenu')
    })
})

var lastPagePosition = pageYOffset
window.addEventListener("scroll", () => {
    if (pageYOffset > lastPagePosition) {
        menu.style.transform = "translateY(-65px)"
        setTimeout(() => {
            let tourPosition = document.getElementById("tours").getBoundingClientRect().top
            //let productsPosition = document.getElementById("products").getBoundingClientRect().top
            //let aboutPosition = document.getElementById("about").getBoundingClientRect().top
            let homePosition = document.getElementById("home").getBoundingClientRect().top
            if (tourPosition == 0 /*|| productsPosition == 0 || aboutPosition == 0*/) {
                menu.style.transform = "translateY(-65px)"
            } 
        }, 10)
    } else if (pageYOffset < lastPagePosition) {
        menu.style.transform = "translateY(0px)"
    }
    lastPagePosition = pageYOffset
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