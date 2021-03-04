$(function(){
    $(".slider__inner, .news__slider-inner").slick({
        nextArrow: '<botton type="botton" class="slick-btn slick-next"></botton>',
        prevArrow: '<botton type="botton" class="slick-btn slick-prev"></botton>',
        infinite: false
    });

    $("select").styler();

    $(".header__btn-menu").on("click", function(){
        $(".menu ul").slideToggle();
    })
});