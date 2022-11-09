$('#topSection .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplaySpeed:1200,
    
    // animateOut:'slideOutLeft',
    nav:true,
    navSpeed:1200,
    dotsSpeed:1200,
    navText:["<p>🠐</p>","<p>🠒</p>"],
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})