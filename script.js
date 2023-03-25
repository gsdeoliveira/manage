body = document.querySelector("body")
header = document.querySelector(".top")
burger_menu = document.querySelector(".burger-menu")
burger_icon = document.querySelector(".burger-icon")
burger_icon_svg = document.querySelector(".burger-icon svg")
burger_container = document.querySelector(".burger-container")
burger_navigation = document.querySelector(".burger-navigation")

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


burger_icon.addEventListener("click", () => {
    burger_icon_svg = document.querySelector(".burger-icon svg")

    if (burger_icon_svg.className.baseVal == 'close') {
        burger_icon.innerHTML = "<svg class='open' xmlns='http://www.w3.org/2000/svg' width='21' height='22'><path fill='#242D52' fill-rule='evenodd' d='M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z'/></svg>"
        burger_navigation.style.display = 'block'
        burger_container.style.opacity = '.5'
        body.style.overflow = 'hidden'
    }
    
    else {
        burger_icon.innerHTML = "<svg class='close' xmlns='http://www.w3.org/2000/svg' width='25' height='18'><g fill='#242D52' fill-rule='evenodd'><path d='M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z' /></g></svg>"
        burger_navigation.style.display = 'none'
        burger_container.style.opacity = '0'
        body.style.overflow = 'auto'
    }

})

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScrow: 2,
        draggable: true,
        dots: ".dots",
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },
        scrollLock: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScrow: 1,
                    dots: null
                }
            },
        ]
    })
  })