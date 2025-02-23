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



  // HERO 
  document.addEventListener("DOMContentLoaded", function () {
    const events = {
        '2024-12-25': 'holiday',
        '2024-01-01': 'holiday',
        '2024-07-04': 'holiday',
        '2024-10-31': 'event-day'
    };
    
    let currentDate = new Date();
    
    function renderCalendar() {
        const monthYear = document.getElementById('currentMonthYear');
        const daysContainer = document.getElementById('calendarDays');
        daysContainer.innerHTML = '';
        
        let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        let totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        monthYear.innerText = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement('div');
            daysContainer.appendChild(emptyDiv);
        }
        
        for (let day = 1; day <= totalDays; day++) {
            let dayDiv = document.createElement('div');
            let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            let dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            
            dayDiv.innerText = day;
            if (events[dateString]) {
                dayDiv.classList.add(events[dateString]);
            }
            
            if (date.getDay() === 5) { // Friday
                dayDiv.classList.add('friday');
                if (currentDate.getMonth() >= 8 || currentDate.getMonth() <= 5) { // September to June
                    dayDiv.innerText += "\nCoding & Coffee";
                }
            }
            
            daysContainer.appendChild(dayDiv);
        }
    }
    
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    
    renderCalendar();
});