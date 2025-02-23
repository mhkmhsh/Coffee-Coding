//Responsive-navbar-active-animation-----------
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



// HERO 



// Display the specified page
function showPage(pageNum) {
    const pages = document.querySelectorAll('.form-page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('page' + pageNum).classList.add('active');
  }
  
  // Switch to the next page
  function nextPage(pageNum) {
    showPage(pageNum);
  }
  
  // Switch to the previous page
  function previousPage(pageNum) {
    showPage(pageNum);
  }
  
  // Initialize the form by showing the first page
  window.onload = function() {
    showPage(1);
  };
  
  const form = document.getElementById('multiPageForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent form from submitting normally

  // Show a success message (instead of redirecting)
  alert('Form submitted successfully!');

  // Optionally, reset the form
  form.reset();
});