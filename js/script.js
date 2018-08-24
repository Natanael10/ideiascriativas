//SCRIPT EFEITO DO SCROLL OPACIDADE APAGANDO NO VIDEO
	$(document).ready(function(){
		$(window).scroll(function(){
			$('.container').css("opacity", 1 - $(window).scrollTop() / 500)
		})
	})


	//SCRIPT TITULO SERVIÇOS
//	$(document).on('scroll', function(){
//		$('h2').css("right", Math.max(700 - 0.60*window.scrollY, 110) + "px");
//	})


//SCRIPT PARA ROLAGEM SUAVE DOS MENU DE NAVEGAÇÃO
$('nav a').click(function(e){
	var id = $(this).attr('href');
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset -50
	}, 1000)
});