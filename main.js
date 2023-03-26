$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:1000,
    items : 1,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(--) 00000-0000 *'
    });