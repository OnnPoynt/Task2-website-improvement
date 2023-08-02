(function ($) {
  
    $('.fade_carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        fade: true,
        imagesLoaded: true,
        
    });
    

    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Change '100' to the scroll position where you want the color change to happen
          $('header').addClass('navbar-scrolled');
        } else {
          $('header').removeClass('navbar-scrolled');
        }
      });
    });

    
})(jQuery)

////////////////////////////////////////

window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTop');

    // Show and enable the button when the user scrolls down by 30px
    if (window.scrollY >= 30) {
      scrollToTopBtn.style.display = 'block';
      scrollToTopBtn.disabled = false;
    } else {
      // Hide and disable the button when the user is at the top
      scrollToTopBtn.style.display = 'none';
      scrollToTopBtn.disabled = true;
    }
  });

  // Scroll to the top when the button is clicked
  document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
//////////////////////////////////

const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 2; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (i = 0; i < 2; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

// btn[2].onclick = function () {
//   slide.style.transform = "translateX(-1600px)";
//   for (i = 0; i < 4; i++) {
//     btn[i].classList.remove("active");
//   }
//   this.classList.add("active");
// };

// btn[3].onclick = function () {
//   slide.style.transform = "translateX(-2400px)";
//   for (i = 0; i < 4; i++) {
//     btn[i].classList.remove("active");
//   }
//   this.classList.add("active");
// };


function loopTopSlider(){
  var sliderSize = $('.slide .logos img').width();
  $('.slide .logos').css({'width':sliderSize*2+'px'});
  $('.slide .logos').find('img').clone().appendTo('.slide .logos');  //appends 2 images
};
$(function(){
  loopTopSlider();
});




$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
