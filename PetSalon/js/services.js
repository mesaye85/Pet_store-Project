$(function() {
    'use strict';

 $('#image1').on('click', function() {
    $('main').load("../register.html",function(){
      if(initRegister) initRegister();

    });
});

$('#image2').on('click', function() {
    $('main').load("../register.html",function(){
        if(initRegister) initRegister();
    
    });
});        

    $('#image3').on('click', function() {
     $('main').load("../register.html",function(){
         if(initRegister) initRegister();
        
    });
});
});