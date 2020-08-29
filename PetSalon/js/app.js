$(function() {
  'use strict';

  $('#about').on('click', function() {
    $('main').load("../about.html", function(){
    if(initAbout) initAbout();
      });
  });
  $('#services').on('click', function() {
    $('main').load("../services.html",function(){
      if(initServices) initServices();
    });
});
  $('#register').on('click', function() {
    $('main').load("../register.html",function(){
      if(initRegister) initRegister();

    });
});
});
