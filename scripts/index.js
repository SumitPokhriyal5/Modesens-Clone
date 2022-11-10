$('#topSection .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplaySpeed:1200,
    dots:false,
    autoplayTimeout:3500,
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

$('#companies .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout:4233,
    nav:true,
    navText:["<p>🠐</p>","<p>🠒</p>"],
    navSpeed:1000,
    dots:false,
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

$('#offers .owl-carousel').owlCarousel({
    margin:10,
    dots:false,
    autoplay:true,
    loop:true,
    nav:true,
    autoplaySpeed:1000,
    navSpeed:1000,
    navText:["<p>🠐</p>","<p>🠒</p>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#trend .owl-carousel').owlCarousel({
    margin:10,
    dots:false,
    autoplay:true,
    loop:true,
    nav:true,
    autoplaySpeed:1000,
    navSpeed:1000,
    navText:["<p>🠐</p>","<p>🠒</p>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

    }
})