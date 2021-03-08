;(function($){
    $(function (){
        // // Toggle mobile-menu
        // $('header label').on('click', function () {
        //     $('nav').toggleClass('nav__list');
        // });
        // //Hide toggle-menu
        // $('nav a').on('click', function (){
        //     $('nav').toggleClass('nav__list');
        //     $('#hamburger').prop('checked', false);
        // });
        // //
        //Slick-slider
        $('.main-represent__slider').slick({
            // autoplay:true,
            // autoplaySpeed: 5000,
            arrows:true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
            // responsive: [{
            //     breakpoint: 1250,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //         arrows: false
            //     }
            //     },
            //     {
            //         breakpoint: 900,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //             arrows: false
            //         }
            // }]
        });
        //
        //smooth scrolling
        $("body").on('click', '[href*="#"]', function(e){
            let fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
        //
    });
})(jQuery);
// Карта Google
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11.25,
        center: { lat: 48.73161, lng: 37.61589 },
    });
    const mark = new google.maps.Marker({
        position: { lat: 48.7343469, lng: 37.597213 },
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
