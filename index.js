(function ($) {
  
    $('.fade_carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        fade: true,
        imagesLoaded: true
    });
    
    let $carousel = $('.fade_carousel').flickity({
        fade: true,
    });

    $carousel.on( '.carousel-nav', function() {
      $carousel.flickity('resize');
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

  