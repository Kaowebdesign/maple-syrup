$(document).ready(function() {
    // vars
    let prodsBtn = $('#prodsCard .prodsCard__arrow');
    // barrel carousel
    $("#barrelCarousel").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navContainerClass: 'barrel__dotsWrap',
        navClass: ['barrel__navItem barrel__navItem_prev', 'barrel__navItem barrel__navItem_next'],
        navText: ['<i class="fa fa-arrow-left barrel__arrow"></i>', '<i class="fa fa-arrow-right barrel__arrow"></i>']
    });
    $("#partnerCarousel").owlCarousel({
        items: 3,
        nav: false,
        loop: true,
        dotsClass: 'partners__dots mt-5',
        dotClass: 'partners__dot',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1140: {
                items: 3
            }
        }
    });
    // button for prods cards
    prodsBtn.on('click', function(e) {
        e.preventDefault();
        let thisParent = $(this).parent().parent();
        thisParent.find('.prodsCard__backDuo').toggleClass('prodsCard__backDuo_active');
        thisParent.find('.prodsCard__back').toggleClass('prodsCard__back_hide');
    });
});