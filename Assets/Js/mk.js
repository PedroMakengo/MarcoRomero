$(function () {
    // Previsualização 
    setTimeout(() => {
        $(".preloader").fadeOut().remove();
    }, $(document).load());

    // Função de ativo
    function mudarAtivo(element){
        $("body").on("click", element, function(){
            
            if($(this).hasClass("active")){
                return;
            }else {
                $(element).removeClass("active");
                $(this).addClass("active");
            }
        });
    }
    mudarAtivo(".navItem");

    
}, (jQuery));