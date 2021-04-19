$(function () {
    // Previsualização 
    setTimeout(() => {
        $(".preloader").fadeOut().remove();
    }, $(document).load());

    // Função de ativo
    function mudarAtivo(element) {
        $("body").on("click", ".navItem", function (e) {
            e.preventDefault();
            if ($(this).hasClass("active")) {
                return;
            } else {
                $(element).removeClass("active");
                $(this).addClass("active");
            }
        });
    }
    mudarAtivo(".navItem");

    // Alterar as telas
    function mudarTelas() {
        $(".navegacaoHeader li a").map((element, index) => {
            // console.log(index);
            $(index).on("click", function (e) {
                let id = $(this).attr("id");
                $("section").map((el, index) => {
                    let classeSessao = $(index).hasClass(id);
                    if (classeSessao == true) {
                        let page = $(index).removeClass("dsNone");
                    } else {
                        $(index).addClass("dsNone").removeClass("dsActivo");
                    }
                });
            });
        });
    }
    mudarTelas();

    function btnProfissionalEducacao() {
        $("#btnProfissional").on("click", function () {
            $("#sessaoEducacao").fadeOut(400, function () {
                $("#sessaoProfissional").addClass("animated bounceInLeft slower").fadeIn(400);
            });
        });

        $("#btnEducacao").on("click", function () {
            $("#sessaoProfissional").fadeOut(400, function () {
                $("#sessaoEducacao").addClass("animated bounceInRight").fadeIn(400);
            });
        });
    }
    btnProfissionalEducacao();




});