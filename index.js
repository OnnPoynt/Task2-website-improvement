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
  slide.style.transform = "translateX(-100vw)";
  for (i = 0; i < 2; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};


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


function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('open');

  if (mobileMenu.classList.contains('open')) {
    // Add event listener to close menu when clicking outside
    document.addEventListener('click', closeMenuOnClickOutside);
  } else {
    // Remove event listener when the menu is closed
    document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const mobileMenu = document.getElementById('mobileMenu');
  const burgerMenu = document.querySelector('.burger-menu');

  if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
    // If the click is outside of the mobile menu and burger menu, close the mobile menu
    mobileMenu.classList.remove('open');
    document.removeEventListener('click', closeMenuOnClickOutside);
  }
}



const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(emailInput.value)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Please enter a valid email address.";
  }
}

function validatePhone() {
  const phoneNumber = phoneInput.value.replace(/\D/g, "");
  if (phoneNumber.length > 11) {
    phoneInput.value = phoneNumber.substring(0, 11);
  }
  if (/^\d{11}$/.test(phoneNumber)) {
    phoneError.textContent = "";
  } else {
    phoneError.textContent = "Please enter a valid 11-digit phone number.";
  }
}

function redirectToThankYouPage() {
  // Perform any necessary form validation before redirection
  // If everything is valid, redirect to the thankyou.html page
  window.location.href = "/thankyou.html";
}
