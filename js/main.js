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
 
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function()
    {
        let desplazamientoActual = window.pageYOffset;
        if(ubicacionPrincipal >= desplazamientoActual)
        {
            document.getElementById('myNavbar').style.top = '0';
        }else
        {
            document.getElementById('myNavbar').style.top = '-100px';            
        }
        ubicacionPrincipal = desplazamientoActual;
    }
 });
