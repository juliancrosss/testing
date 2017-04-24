$(document).ready(function(){

	/*---------------------------------------------------- 
	/*  FUNCIONES CABEZOTE
	----------------------------------------------------*/
	/*$.ajax({
        type: "POST",
        url: "/falabella-co/cart/includes/miniCartQuantity.jsp",
        success: function(data) {
            var quantity=parseInt(data,10);
            if(quantity>0){
                $('.products-count').html(quantity);
            }
            else{
            	$('.products-count').html('0');
            }       
        }
    });*/

	$(".search-container input").keyup(function(event){
		if(event.keyCode == 13){
			var searchQuery = $('.search-container input').val();
			if( searchQuery == '' ){
				alert('Ingresa la palabra, producto o código de lo que quieres buscar.');
			}
			else{
				document.location.href = 'http://www.falabella.com.co/falabella-co/search/?Ntt=' + searchQuery;
			}
		}
	});
 
	$('.search-container > .search-button').click(function(){
		var searchQuery = $('.search-container input').val();
		if( searchQuery == '' ){
			alert('Ingresa la palabra, producto o código de lo que quieres buscar.');
		}
		else{
			document.location.href = 'http://www.falabella.com.co/falabella-co/search/?Ntt=' + searchQuery;
		}
	});

	$('.mobile-falabella-header-innner-container .search-button').click(function(){
		var searchQuery = $('.mobile-falabella-header-innner-container .search-inner-container input').val();
		if( searchQuery == '' ){
			alert('Ingresa la palabra, producto o código de lo que quieres buscar.');
		}
		else{
			document.location.href = 'http://www.falabella.com.co/falabella-co/search/?Ntt=' + searchQuery;
		}
	});


});
