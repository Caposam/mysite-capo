/* ========================================
  |  |  |  |  Preloader |  |  |  |  |
==========================================*/

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ========================================
  |  |  |  |  Team |  |  |  |  |
==========================================*/

$(function() {
    $("#team-members").owlCarousel({
        item: 2,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class = "fa fa-angle-right"> </i>']


    });

});
/* ========================================
  |  |  |  |  Progress Bars |  |  |  |  |
==========================================*/
$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });




});
/* ========================================
  |  |  | responsive service tab  |  |  |  |
==========================================*/
$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});
/* ========================================
  |  |  |  | Portfolio Isotope |  |  |  |
==========================================*/
$(window).on('load', function() {
    //Initialize Isotope
    $("#isotope-container .row").isotope({

    });
    //filters on click
    $("#isotope-lists").on('click', 'button', function() {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio
        $("#isotope-container .row").isotope({
            filter: filterValue
        });
        // active button
        $("#isotope-lists").find('.active').removeClass('active');
        $(this).addClass('active');

    });

});