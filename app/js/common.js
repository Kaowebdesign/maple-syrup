$( document ).ready(function() {
    $(".owl-carousel").owlCarousel({
        items:1,
        dots:false,
        nav:true,
        loop:true,
        navContainerClass:'barrel__dotsWrap',
        navClass:['barrel__navItem barrel__navItem_prev','barrel__navItem barrel__navItem_next'],
        navText:['<i class="fa fa-arrow-left barrel__arrow"></i>','<i class="fa fa-arrow-right barrel__arrow"></i>']
    });
});