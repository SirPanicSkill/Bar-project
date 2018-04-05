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
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
});

/* после загрузки страницы */
$(document).ready(function(){
    //прелоадер
    $('.progress').delay(250).fadeOut(1500);
    //social net
    $('#soc-net').click('on', function(){
        $('.soc-net-items').toggleClass('scale-in');
    });
});
