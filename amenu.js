// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  
  $(document).ready(function () {
    setTimeout(function () { test(); });
  });
  
  $(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
  });
  
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { test(); });
  });
  
  // --------------add active class-on another-page move----------
  jQuery(document).ready(function ($) {
    var path = window.location.pathname.split("/").pop();
  
    if (path == '') {
      path = 'index.html';
    }
  
    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass('active');
  });
  
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $(".menu").css("transform", "translate(-50%, calc(-50% + " + scrollTop / 3 + "px))");
  });
  
  
   // CAR SWIPER STUFF FROM THEIR JS FILE
   const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //responsive breakpoints
    breakpoints:{
      0: {
      slidesPerView:1
    },
  
    620: {
      slidesPerView:2
    },
    1024: {
      slidesPerView:3
    },
    }
  
  });



  // img jq
 
    $(document).ready(function() {
      const images = [
          {
              src: "img/grid11.webp",
              alt: "Image 1",
              text: "Sophmore Year: HTML, CSS, Bootstrap"
          },
          {
              src: "img/grid12.webp",
              alt: "Image 2",
              text: "Junior Year: Javascript, Refine HTML and CSS skills"
          },
          {
              src: "img/grid13.jpg",
              alt: "Image 3",
              text: "Senior Year: JQuery, Vue, NJIT projects"
          }
      ];
  
      images.forEach(image => {
          const imageHTML = `
              <div class="col-md-4 col-sm-12 text-center">
                  <div class="image-container">
                      <img src="${image.src}" alt="${image.alt}" class="responsive-img">
                  </div>
                  <div class="info-container" style="display: none;">
                      <p>${image.text}</p>
                  </div>
              </div>
          `;
          $('#image-gallery').append(imageHTML);
      });
  
      // Toggle the info container when image is clicked
      $('#image-gallery').on('click', '.responsive-img', function() {
          const infoContainer = $(this).closest('.col-md-4').find('.info-container');
          infoContainer.toggle();  // Toggle visibility of the text container
      });
  });
  