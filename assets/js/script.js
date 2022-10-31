//Para likes
$(`.like-btn`).each(function() {
   
   let dataLike = $(this).parent().find('span:first').data("like")
   let dataDeslike = $(this).parent().find('span:eq(1)').data("dislike")


   $(this).on("click", function(){

      if ($(this).children().hasClass("far fa-thumbs-up")) {

         //Acrescenta mais um   
         $(this).parent().find('span:first').text(dataLike + 1)

               
         //Remove uma classe e adiciona outra  
         $(this).children().removeClass("far fa-thumbs-up");
         $(this).children().addClass("fas fa-thumbs-up");

         //Se o ícone de dislike estiver clicado
         if($(this).next().children().hasClass("fas fa-thumbs-down")){

            $(this).parent().find('span:eq(1)').text(dataDeslike);
            $(this).next().children().removeClass("fas fa-thumbs-down");
            $(this).next().children().addClass("far fa-thumbs-down");
         }
      }
      
      //Se o ícone estiver clicado e clicar novamente, desmarca
      else if ($(this).children().hasClass("fas fa-thumbs-up")){ //Botão oposto

         $(this).parent().find('span:first').text(dataLike);
         $(this).children().removeClass("fas fa-thumbs-up");
         $(this).children().addClass("far fa-thumbs-up");
      }
   })
});
      
//Para dislikes
$(`.dislike-btn`).each(function() {

   $(this).on("click", function(){
      
      let id_like = $(this).prev().prev().attr('id')
      let dataLike = $(this).parent().find('span:first').data("like")
   
      let dataDeslike = $(this).parent().find('span:eq(1)').data("dislike")
      
      //Se não está marcado
      if ($(this).children().hasClass("far fa-thumbs-down")) { //Botão está clicado
         
         //Acrescenta mais um
         $(this).parent().find('span:eq(1)').text(dataDeslike + 1);
         
         //Remove uma classe e adiciona outra  
         $(this).children().removeClass("far fa-thumbs-down");
         $(this).children().addClass("fas fa-thumbs-down");

         if ($(this).prev().children().hasClass("fas fa-thumbs-up")){ //Se o like está clicado
         
            $(this).parent().find('span:first').text(dataLike);
            $(this).prev().children().removeClass("fas fa-thumbs-up");
            $(this).prev().children().addClass("far fa-thumbs-up");
         }
      }
      
      //Se está marcado
      else if ($(this).children().hasClass("fas fa-thumbs-down")){ //Se o dislike está clicado, desclica
         
         $(this).parent().find('span:eq(1)').text(dataDeslike);
         $(this).children().removeClass("fas fa-thumbs-down");
         $(this).children().addClass("far fa-thumbs-down");
      }
   })
});
    

