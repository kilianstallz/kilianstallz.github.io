'use strict';

$(document).ready(function () {

  // Click Function Navbar Burger
  $('.navbar-burger').click(function () {
    // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
    $('#cta').toggleClass('is-hidden');
  });

  // Scroll Function
  $(window).scroll(function () {
    // Check if 600px scrolled
    if ($(this).scrollTop() > 200) {
      $('.navbar').removeClass('is-transparent').addClass('is-primary');
      $('.navbar-item').addClass('has-text-white');
    } else {
      $('.navbar').addClass('is-transparent').removeClass('is-primary');
      $('.navbar-item').removeClass('has-text-white');
    }
  });
});