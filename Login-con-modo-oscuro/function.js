/*let buttonenabled = true, scroll = 0;
$(document).on("click", ".darkmode", function(){
 if(!buttonenabled) return; //condicional para evaluar si el botón está habilitado
 buttonenabled = false;// Deshabilita el botón para evitar múltiples clics
 $(".clip").html($("body >.container")[0].outerHTML); //clona el contenido del body
 scrollbind($(".clip .container"));
 $(".clip").scrollTop(0); //.clip esté arriba
 $(".clip .container").toggleClass("dark").scrollTop(0); //contenedor animado
 $(".clip .darkmode").toggleClass("fa-moon").toggleClass("fa-sun"); //cambia el icono de la luna al sol
 $(".clip").addClass("anim"); //agrega la clase anim para iniciar la animación
 setTimeout(function(){//espera 1 segundo
   $("body >.container").replaceWith($(".clip").html()) 
   scrollbind($("body >.container")); 
   $("body >.container").scrollTop(scroll);
   $(".clip").html("").removeClass("anim"); 
   buttonenabled = true;
 }, 1000); 
});*/


/*
 
const scrollbind = el => el.bind("scroll", function(){ //función para sincronizar el scroll
 scroll = $(this).scrollTop();
 if($(".container").length > 1)
   $(".container").scrollTop(scroll); 
});
scrollbind($(".container")); */