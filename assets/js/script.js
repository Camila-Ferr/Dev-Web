//Para likes
$(`.like-btn`).click(function() {
   
   let id_like = $(this).prev().attr('id')
   let like = $(`#${id_like}`).data(`${id_like}`)

   let id_dislike = $(this).next().next().attr('id')
   let dislike = $(`#${id_dislike}`).data(`${id_dislike}`)

   if ($(this).children().hasClass("far fa-thumbs-up")) {

      //Acrescenta mais um   
      $(`#${id_like}`).text(like + 1);
            
      //Remove uma classe e adiciona outra  
      $(`#icon-${id_like}`).removeClass("far fa-thumbs-up");
      $(`#icon-${id_like}`).addClass("fas fa-thumbs-up");

      //Se o ícone de dislike estiver clicado
      if($(`#icon-${id_dislike}`).hasClass("fas fa-thumbs-down")){
         $(`#${id_dislike}`).text(dislike);
         $(`#icon-${id_dislike}`).removeClass("fas fa-thumbs-down");
         $(`#icon-${id_dislike}`).addClass("far fa-thumbs-down");
      }
   }
      
   //Se o ícone estiver clicado e clicar novamente, desmarca
   else if ($(`#icon-${id_like}`).hasClass("fas fa-thumbs-up")){ //Botão oposto
      $(`#${id_like}`).text(like);
      $(`#icon-${id_like}`).removeClass("fas fa-thumbs-up");
         $(`#icon-${id_like}`).addClass("far fa-thumbs-up");
      }
   })
      
   //Para dislikes
   $(`.dislike-btn`).click(function() {
      let id_like = $(this).prev().prev().attr('id')
      let like = $(`#${id_like}`).data(`${id_like}`)
   
      let id_dislike = $(this).next().attr('id')
      let dislike = $(`#${id_dislike}`).data(`${id_dislike}`)
      
      //Se não está marcado
      if($(`#icon-${id_dislike}`).hasClass("far fa-thumbs-down")) { //Botão está clicado
         
         //Acrescenta mais um
         $(`#${id_dislike}`).text(dislike + 1);
         
         //Remove uma classe e adiciona outra  
         $(`#icon-${id_dislike}`).removeClass("far fa-thumbs-down");
         $(`#icon-${id_dislike}`).addClass("fas fa-thumbs-down");

         if ($(`#icon-${id_like}`).hasClass("fas fa-thumbs-up")){ //Se o like está clicado
         
            $(`#${id_like}`).text(like);
            $(`#icon-${id_like}`).removeClass("fas fa-thumbs-up");
            $(`#icon-${id_like}`).addClass("far fa-thumbs-up");
         }
      }
      
      //Se está marcado
      else if ($(`#icon-${id_dislike}`).hasClass("fas fa-thumbs-down")){ //Se o dislike está clicado, desclica
         $(`#${id_dislike}`).text(dislike);
         $(`#icon-${id_dislike}`).removeClass("fas fa-thumbs-down");
         $(`#icon-${id_dislike}`).addClass("far fa-thumbs-down");
      }
   })
    

