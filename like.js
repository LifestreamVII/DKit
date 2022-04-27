$(document).ready(()=>{
    $( ".dkit__cont" ).on('click', '.bouton__favoris', function () {
        $(this).toggleClass("fav--rempli");
    })
})