$(document).ready(function(){
	 $("html, body").animate({scrollTop: $(".top-wrapper").offset().top}, 1000);

	$('.tabla-ciudades ul').click(function(){
		$("html, body").animate({scrollTop: $(".tab-pane.active").offset().top}, 1000);
	});
});