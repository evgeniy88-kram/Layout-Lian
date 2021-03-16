;(function($){
    $(function (){
        //Toggle mobile-menu
        $('.header__container__nav label').on('click', function () {
            $('nav').toggleClass('nav__list');
        });
        ////
        //Slick-slider
        $('.main-represent__slider').slick({
            // autoplay:true,
            // autoplaySpeed: 5000,
            arrows:true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 430,
                settings: {arrows: false}
            }]
        });

    });

})(jQuery);

let portfolioSlide1 = document.getElementById('portfolioSlide1'),
    portfolioSlide2 = document.getElementById('portfolioSlide2'),
    previousMenu = document.getElementById('left'),
    nextMenu = document.getElementById('right'),
    navigation = [previousMenu, nextMenu],
    j = 1,
    shareBtn = document.getElementsByClassName('portfolio__details__item__text__share'),
    shareIcons = document.getElementsByClassName('shared-icons');

for (let i = 0; i < 2; i++) {
    navigation[i].addEventListener('click', function () {
        j++;
        if (j % 2 === 0){
            portfolioSlide1.style.display = 'none';
            portfolioSlide2.style.display = 'flex';
        }
        else {
            portfolioSlide1.style.display = 'flex';
            portfolioSlide2.style.display = 'none';
        }
    });
    shareBtn[i].addEventListener('click', function () {
        shareIcons[i].style.display = 'flex';
    });
}

let slides = document.getElementsByClassName('portfolio__details__item__gallery__slides__ex'),
    poster1 = document.getElementsByClassName('portfolio__details__item__gallery__poster'),
    poster2 = document.getElementsByClassName('portfolio__details__item__gallery__poster-2');

for (let i = 0; i < slides.length; i++) {
    if (i < 4) {
        slides[i].addEventListener('click', function (){
            poster1[0].style.cssText = `background-image: url("./img/portfolio-${i+1}-big.jpg");`;
        });
    }
    if (i >= 4) {
        slides[i].addEventListener('click', function (){
            poster2[0].style.cssText = `background-image: url("./img/portfolio-${i+1}-big.jpg");`;
        });
    }
}

        // Карта Google
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 48.73161, lng: 37.61589 },
    });
    const mark = new google.maps.Marker({
        position: { lat: 48.73161, lng: 37.615 },
        map,
        title: "STIHL",
        animation: google.maps.Animation.BOUNCE
    });
    const popUpContent = "Адрес: г.Краматорск, ул.Дворцовая, 100";
    console.log(popUpContent);
    const infoWindow = new google.maps.InfoWindow({
        content: popUpContent,
    });
    mark.addListener("click", () => {
        infoWindow.open(map, mark);
    });
}
