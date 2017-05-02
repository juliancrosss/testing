$(document).ready(function(){

	var aryBox0 = '3033032-2998398-2940860-2940014-3016664-2940130-2837958-3032973-2998388-3033459-2940743-2998320';
	var aryBox1 = '880757105-3016664-3007816-3011247-3016466-3007763-3011280-3008953-3016636-3016510-880757347-3011291';
	var aryBox2 = '3033540-2939976-3022975-2940860-3033616-2940232-3033459-3033128-3028151-3033470-2940889-3033528';
	var aryBox3 = '3033506-3021005-3033160-3033073-2940743-3033107-2998418-3020990-2998340-2998468-2940160-3028191';

	/* Call AJAX Box1 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox0},
			method: 'get',
			success: function(data){
				console.log(data);
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox0').append($newProduct);
					}       
					else{
						console.log('box0: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox0').slick({
					autoplay: true,
					arrows: false,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					responsive: [
					{
						breakpoint: 640,
						settings: {
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 0);

	/* Call AJAX Box1 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox1},
			method: 'get',
			success: function(data){
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox1').append($newProduct);
					}       
					else{
						console.log('box1: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox1').slick({
					autoplay: true,
					arrows: false,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					responsive: [
					{
						breakpoint: 640,
						settings: {
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 20);

	/* Call AJAX Box2 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox2},
			method: 'get',
			success: function(data){
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox2').append($newProduct);
					}       
					else{
						console.log('box2: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox2').slick({
					autoplay: true,
					arrows: false,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					responsive: [
					{
						breakpoint: 640,
						settings: {
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 40);

	/* Call AJAX Box3 */
	setTimeout(function(){
		$.ajax({
			dataType: "json",
			url: 'http://utilsfalabella.appspot.com/apis/productList/',
			data: {'apikey': 'a02506b31c1cd46c2e0b6380fb94eb3d', 'productId': aryBox3},
			method: 'get',
			success: function(data){
				var k = 1;
				for(var j=0; j < data.length; j++){
					if(data[j].published === true && data[j].status === 'OK'){
						var $newProduct =  $('<div class="product-slide"></div>');
						var $targetProd = $('<a target="_blank" class="url-prod" href="http://www.falabella.com.co/falabella-co/product/'+ data[j].productId +'/"></a>');
						$targetProd.append('<div class="img-prod"><img src="http://falabella.scene7.com/is/image/FalabellaCO/'+ data[j].productId +'?$PNG$&wid=300&hei=300" class="img-responsive" /></div>');
						var $detail_product = $('<div class="detail"></div>');
						$detail_product.append('<h2 class="marca">'+ data[j].brand +'</h2>');
						$detail_product.append('<p class="descripcion">'+ data[j].name +'</p>');
						var $price = $('<div class="price"></div>');
						if(data[j].CMR){
							$price.append('<h3 class="cmr">$'+ data[j].CMR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						else{
							$price.append('<h3>$'+ data[j].INTERNET.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</h3>');
						}
						if(data[j].INTERNET != data[j].NORMAL){
							$price.append('<h4 class="normal">Normal: <span>$ '+ data[j].NORMAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +'</span></h4>');
						}
						var $see_more = $('<div class="more"><span>Ver producto</span></div>');

						$detail_product.append($price);
						$detail_product.append($see_more);
						$targetProd.append($detail_product);

						$newProduct.append($targetProd);
						$('#carruselBox3').append($newProduct);
					}       
					else{
						console.log('box4: '+data[j].productId + ' - ' + k++);
					}
				}
				$('#carruselBox3').slick({
					autoplay: true,
					arrows: false,
					autoplaySpeed: 4000,
					dots: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					pauseOnHover: true,
					responsive: [
					{
						breakpoint: 640,
						settings: {
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
					]
				});
			}
		});
	}, 60);
	

});