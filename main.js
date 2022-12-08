$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect
$(window).on("scroll", function () {
    var gap = 60;
    if ($(window).scrollTop() > gap) {
        $('header').addClass('black');
        $('.navbar-brand b').addClass('white');
        $('.navbar').addClass('navbar-dark');
    } else {
        $('header').removeClass('black');
        $('.navbar-brand b').removeClass('white');
        $('.navbar').removeClass('navbar-dark');
    }
})

// toggler menu button
$('.navbar-toggler').click(function () {
    if ($('.navbar-toggler-icon').hasClass('d-none')) {
        $('.navbar-toggler-icon').removeClass('d-none')
        $('.navbar-toggler-icon-x').addClass('d-none')
    } else {
        $('.navbar-toggler-icon').addClass('d-none')
        $('.navbar-toggler-icon-x').removeClass('d-none')
    }
})