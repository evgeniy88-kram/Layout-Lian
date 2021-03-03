;(function($){
    $(function (){
        // Toggle mobile-menu
        $('header label').on('click', function () {
            $('nav').toggleClass('nav__list');
        });
        //Hide toggle-menu
        $('nav a').on('click', function (){
            $('nav').toggleClass('nav__list');
            $('#hamburger').prop('checked', false);
        });
        //
        //Slick-slider
        $('.reviews__slick').slick({
            autoplay:true,
            autoplaySpeed: 5000,
            arrows:true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
            }]
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

