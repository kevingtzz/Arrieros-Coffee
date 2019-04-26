//Navbar animation
var menu = document.getElementById('menu-icon')
menu.addEventListener("click", ()=>{
    let menuList = document.getElementById('menu-list')
    menuList.classList.add('showMenu')
    menuList.addEventListener("click", ()=>{
        menuList.classList.remove('showMenu')
    })
})


/*
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
});*/