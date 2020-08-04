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
    let zero = 0;
    let upOffset = 0;
    window.onscroll = function()
    {
        let desplazamientoActual = window.pageYOffset;
        console.log(ubicacionPrincipal + ": " + desplazamientoActual);
        if(ubicacionPrincipal >= desplazamientoActual)
        {
            upOffset = upOffset+3;
            if(upOffset> 0){upOffset = 0; }
            document.getElementById('myNavbar').style.top = (upOffset)+'px';
            zero = window.pageYOffset;
        }else
        {
            upOffset = upOffset-3;
            if(upOffset<-89){upOffset = -89; }
            console.log('2: '+upOffset);
            document.getElementById('myNavbar').style.top = (upOffset)+'px';
            
        }
        ubicacionPrincipal = desplazamientoActual;
    }
 });
