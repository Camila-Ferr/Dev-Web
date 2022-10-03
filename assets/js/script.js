//Chama a função no início do script
$(document).ready(function () {
   mostrar();
});


//função de escuta que passa por todos os spans e fazem eles serem exibidos na tela
function mostrar() {
   const ids = ["series", "eventos", "homenagens","leitura"]

   
   for (const obj of ids) {
      let like = $(`#like-${obj}`).data(`like-${obj}`)
      let dislike = $(`#dislike-${obj}`).data(`dislike-${obj}`)

      $(`#like-${obj}`).text(like);
      $(`#dislike-${obj}`).text(dislike);

      //Para likes
      $(`#like-btn-${obj}`).on('click', function click(e) {
      
         //Se não está marcado
         if ($(`#icon-like-${obj}`).hasClass("far fa-thumbs-up")) { //Botão está clicado

            //Acrescenta mais um
            $(`#like-${obj}`).text(like + 1);
            //Remove uma classe e adiciona outra  
            $(`#icon-like-${obj}`).removeClass("far fa-thumbs-up");
            $(`#icon-like-${obj}`).addClass("fas fa-thumbs-up");

            //Se o ícone de dislike estiver clicado
            if($(`#icon-dislike-${obj}`).hasClass("fas fa-thumbs-down")){
               $(`#dislike-${obj}`).text(dislike);
               $(`#icon-dislike-${obj}`).removeClass("fas fa-thumbs-down");
               $(`#icon-dislike-${obj}`).addClass("far fa-thumbs-down");
            }
         }
      
         //Se o ícone estiver clicado e clicar novamente, desmarca
         else if ($(`#icon-like-${obj}`).hasClass("fas fa-thumbs-up")){ //Botão oposto
         
            $(`#like-${obj}`).text(like);
            $(`#icon-like-${obj}`).removeClass("fas fa-thumbs-up");
            $(`#icon-like-${obj}`).addClass("far fa-thumbs-up");
         }
      })
      
      //Para dislikes
      $(`#dislike-btn-${obj}`).on('click', function click(e) {
      
         //Se não está marcado
         if ($(`#icon-dislike-${obj}`).hasClass("far fa-thumbs-down")) { //Botão está clicado
   
            //Acrescenta mais um
            $(`#dislike-${obj}`).text(dislike + 1);
            //Remove uma classe e adiciona outra  
            $(`#icon-dislike-${obj}`).removeClass("far fa-thumbs-down");
            $(`#icon-dislike-${obj}`).addClass("fas fa-thumbs-down");

            if ($(`#icon-like-${obj}`).hasClass("fas fa-thumbs-up")){ //Se o like está clicado
         
               $(`#like-${obj}`).text(like);
               $(`#icon-like-${obj}`).removeClass("fas fa-thumbs-up");
               $(`#icon-like-${obj}`).addClass("far fa-thumbs-up");
            }
         }
         
         //Se está marcado
         else if ($(`#icon-dislike-${obj}`).hasClass("fas fa-thumbs-down")){ //Se o dislike está clicado, desclica
            
            $(`#dislike-${obj}`).text(dislike);
            $(`#icon-dislike-${obj}`).removeClass("fas fa-thumbs-down");
            $(`#icon-dislike-${obj}`).addClass("far fa-thumbs-down");
         }
      })
   }
}

    

