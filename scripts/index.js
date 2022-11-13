var swiper = new Swiper("#topSection .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay:{
        delay:4000
    },
    speed:1200,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper("#companies .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay:{
        delay:5000
    },
    speed:1000,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper("#offers .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed:1000,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        680: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 3,
        }
      },
    // autoplay:{
    //     delay:4000
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper("#trend .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed:1000,
    breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        680: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1000: {
          slidesPerView: 4,
        }
      },
    // autoplay:{
    //     delay:4000
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let women=document.querySelector('#category .item:nth-child(1)');
  women.onclick=()=>{
    window.location='index.html'
  };
  

  let men=document.querySelector('#category .item:nth-child(2)');
  men.onclick=()=>{
    window.location.href='mens.html'
  };
