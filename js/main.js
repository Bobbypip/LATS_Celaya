'use strict'
$(document).ready(function(){

    var j = jQuery.noConflict();
    j('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        captions: false,
        slideWidth: 1200,
        responsive: true,
        pager: false,
        speed: 500
      });
 

    ScrollReveal().reveal('nav', {
        delay: 300,
        origin: 'bottom'
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
 });
