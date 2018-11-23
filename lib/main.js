'use strict';

$(document).ready(function () {

  // Click Function Navbar Burger
  $('.navbar-burger').click(function () {
    // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
    $('#cta').toggleClass('is-hidden');
    $('.navbar-item').toggleClass('has-text-black');
  });

  // Scroll Function
  $(window).scroll(function () {
    // Check if px scrolled
    if ($(this).scrollTop() > 200) {
      $('.navbar').removeClass('is-white').addClass('is-primary');
      $('.navbar-item').addClass('has-text-white');
    } else {
      $('.navbar').addClass('is-white').removeClass('is-primary');
      $('.navbar-item').removeClass('has-text-white');
    }
  });
});