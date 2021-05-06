"use strict";

$(document).ready(function(){
  $('.main-slide').slick({
    dots: true,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });
});

const anchors = document.querySelectorAll('a.scroll-to');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}