$(document).ready(()=>{
    function createModal(){
        $("#dkit__section").prepend(`
            <div class="dkit__modal-src__cont">
                <div class="dkit__modal-src">
                    <div class="dkit__modal-src__html"></div>
                    <div class="dkit__modal-src__css"></div>
                </div>
            </div>
        `);
    }

    $( ".dkit__cont" ).on('mousedown', '*[selectable]', function (e) {
        if (e.which == 2){
            createModal();
        }
    });

    $( ".dkit__cont" ).on('mouseout', '*[selectable]', function () {
        if (hover){
            $(this).removeAttr("style");
            $(".dkit__code-overlay").remove();
        }
    });
})