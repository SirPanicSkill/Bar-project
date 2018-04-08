/*globals jQuery, document */
$(function() {
    "use strict";
    $(".button-collapse").sideNav();
    //карусель
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
    //scrollFire
    var options = [
        {selector: '.fade1', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
        {selector: '.fade2', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
        {selector: '.fade3', offset: 200, callback: function(el) { Materialize.fadeInImage($(el)); } },
    ];
    Materialize.scrollFire(options);
    //левое меню для телефонов
    $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    //yandex maps
    jQuery('.map-open').bind('click touchstart', function(){
        jQuery('#map').slideToggle('slow');
    });
    ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [55.708791, 37.885457],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([55.708791, 37.885457], {
                hintContent: 'Москва!',
                balloonContent: 'Столица России'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }
    
});

/* после загрузки страницы */
$(document).ready(function(){
    //прелоадер
    $('.progress').delay(250).fadeOut(1500);
    //social net
    $('#soc-net').bind('click touchstart', function(){
        $('.soc-net-items').addClass('scale-in');
        $('.soc-net-bck').addClass('disp-block').bind('click touchstart', function(){
            $('.soc-net-items').removeClass('scale-in');
            $('.soc-net-bck').removeClass('disp-block');
        });
    });
});
