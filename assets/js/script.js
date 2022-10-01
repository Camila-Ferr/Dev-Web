$("#like-btn-series").click(function () {
    let like = $("#like").data("like")
    let dislike = $("#dislike").data("dislike")

    $("#like").addClass("badge badge-secondary")
    $("#dislike").addClass("badge badge-secondary")

    $("#like").text(like)
    $("#dislike").text(dislike)
 })

 $("#like-btn-series").click(function () {
    let like = $("#like-series").data("like-series")
    let dislike = $("#dislike-series").data("dislike-series")

    if ($("#icon-like-series").hasClass("far fa-thumbs-up")) { //Botão está clicado
       $("#like-series").text(like + 1);
       $("#icon-like-series").removeClass("far fa-thumbs-up");
       $("#icon-like-series").addClass("fas fa-thumbs-up");

       if ($("#icon-dislike-series").hasClass("fas fa-thumbs-down")){ //Botão oposto
          $("#dislike-series").text(dislike);
          $("#icon-dislike-series").removeClass("fas fa-thumbs-down");
          $("#icon-dislike-series").addClass("far fa-thumbs-down");
       }
       return;
    }
    //Botão não está clicado
    $("#like-series").text(like);
    $("#icon-like-series").removeClass("fas fa-thumbs-up");
    $("#icon-like-series").addClass("far fa-thumbs-up");
    return;
 })
    

