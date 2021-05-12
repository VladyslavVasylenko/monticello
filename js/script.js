"use strict";

//main slide
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

//scroll
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

var ulContainer = document.getElementById("active");

// Get all buttons with class="btn" inside the container
var li = ulContainer.getElementsByClassName("conteiner-menu-list__link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}