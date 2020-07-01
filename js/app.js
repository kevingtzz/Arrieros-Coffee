//Navbar animation

var menu = document.getElementById('menu-bars');
var menu_desktop = document.getElementById('menu-list');
var home = document.getElementById("home");
var links = document.querySelectorAll("nav a");
var show_menu = false;
var menu_click = false;

menu.addEventListener("click", ()=>{
    menu.style.transform = "translateY(-65px)"
    menu_desktop.style.transform = "translateY(180px)"
    show_menu = true
    menu_click = true
    menu_desktop.addEventListener("click", ()=>{
        menu_desktop.style.transform = "translateY(-180px)"
        show_menu = false
        menu_click = false
    })
})

var lastPagePosition = pageYOffset
window.addEventListener("scroll", () => {
    if (pageYOffset > lastPagePosition && screen.width < 790) {
        menu.style.transform = "translateY(-65px)"
        menu_desktop.style.transform = "translateY(-65px)"
        show_menu = false
    } else if (pageYOffset < lastPagePosition && screen.width < 790 && show_menu == false) {
        menu.style.transform = "translateY(0px)"
        setTimeout(() => {
            let tourPosition = document.getElementById("tours").getBoundingClientRect().top
            let productsPosition = document.getElementById("products").getBoundingClientRect().top
            let aboutPosition = document.getElementById("about").getBoundingClientRect().top
            let homePosition = document.getElementById("home").getBoundingClientRect().top
            if (tourPosition == 0 || productsPosition == 0 || aboutPosition == 0) {
                menu.style.transform = "translateY(-65px)"
            } 
        }, 5)
    }    
    
    //------------------------------------- Desktop nav animation -------------------------------

    if (pageYOffset > lastPagePosition && screen.width >= 750) { 
                menu_desktop.style.transform = "translateY(-65px)"
            setTimeout(() => {
                let tourPosition = document.getElementById("tours").getBoundingClientRect().top
                let productsPosition = document.getElementById("products").getBoundingClientRect().top
                let aboutPosition = document.getElementById("about").getBoundingClientRect().top
                let homePosition = home.getBoundingClientRect().top
                if (tourPosition == 0 || productsPosition == 0 || aboutPosition == 0) {
                    menu_desktop.style.transform = "translateY(-65px)"
                } 
            }, 10)
        } else if (pageYOffset < lastPagePosition && screen.width >= 750) {
            menu_desktop.style.transform = "translateY(0px)"
        }
    lastPagePosition = pageYOffset

    if (home.getBoundingClientRect().top < -150) {          //turns background home transparent when client is on home.
        menu_desktop.style.background = "rgba(242, 239, 234, .97)"
        menu_desktop.style.boxShadow = "2px 0px 8px #888888"
        for (i = 1; i < links.length; i++) {
            links[i].style.color = "rgb(63, 63, 63)"
            links[i].style.textShadow = "none"
        }
        document.getElementById('home-icon').style.color = "rgb(63, 63, 63)"
    } else {
        if (screen.width >= 800) {
            menu_desktop.style.background = "transparent";
            menu_desktop.style.boxShadow = "none"
            for (i = 1; i < links.length; i++) {
                links[i].style.color = "rgb(214, 214, 214)"
                links[i].style.textShadow = "0px 0.5px 2px black"
            }
            document.getElementById('home-icon').style.color = "rgb(214, 214, 214)"
        }
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