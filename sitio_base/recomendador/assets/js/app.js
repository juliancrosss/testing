var floor = 0;

/*---------------------------------------------------- 
/*  HOVER BULLETS 
--------------------------------------------------*/
    function currentfloor(floor){
        var floors = ['inicio', 'genero', 'donde', 'para', 'pisada'];
        $('#'+floors[floor]).ready(function(){
            $(".bullets #"+floors[floor-1]+"-bullet").removeClass("active");
            $(".bullets #"+floors[floor]+"-bullet").addClass("active");
        });
    }

    function updateBullet(floor){
        var floors = ['inicio', 'genero', 'donde', 'para', 'pisada'];
        $('#'+floors[floor]).ready(function(){
            $(".bullets #"+floors[floor+1]+"-bullet").removeClass("active");
            $(".bullets #"+floors[floor]+"-bullet").addClass("active");

        });
    }

$(document).ready(function() {
    $("html, body").animate({scrollTop: $("#wrapper").offset().top}, 1000);
    
     /*---------------------------------------------------- 
    /*  SLIDER INSTRUCCIONES PISADA
    --------------------------------------------------*/

     $('#instrucciones').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        pauseOnHover: false,
        nextArrow: '<div class="custom-right"></div>',
        prevArrow: '<div class="custom-left"></div>',
        responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }

        ]
    });



    /*
    ascensor
    */
    var ascensor = $('#content').ascensor({
        AscensorName:'page',
        WindowsFocus:true,
        WindowsOn:0,    
        NavigationDirection:'y',
        Direction: 'y',
        Navig:false,
        Link:false,
        ReturnURL:true,
        PrevNext:true,
        CSSstyles:true,
        KeyArrow:true,
        keySwitch:false,
        ReturnCode:false,       
        ChocolateAscensor:true,
        swipeNavigation:false,
        keyNavigation:false,
        AscensorMap: '1|5',
        ContentCoord: '1|1 & 1|2 & 1|3 & 1|4 & 1|5'
    });

    var ascensorInstance = ascensor.data('ascensor');

/*---------------------------------------------------- 
/*  TRANSICION BULLETS 
--------------------------------------------------*/

    function goTo(floor){
        ascensorInstance.scrollToFloor(floor);
    }
    

/*---------------------------------------------------- 
/*  PRODUCTOS DE ACUERDO A ELECCION
--------------------------------------------------*/

    var eleccion = 0;
    var opt1, opt2, opt3, opt4 = "";

    /*---------------------------------------------------- 
    /*  INICIO
    --------------------------------------------------*/
    
    currentfloor(0);
    $('#inicio .action a').click(function(){
        currentfloor(1);
        ascensorInstance.next();
        $('.top-wrapper').addClass('none');
        $("html, body").animate({scrollTop: $("#wrapper").offset().top}, 1000);
    });   

    /*---------------------------------------------------- 
    /*  GENERO
    --------------------------------------------------*/
    $('#genero .options .option').click(function(){
        currentfloor(2);
        opt1 = $(this).data('opcion');
        if ($(this).data('opcion')=='mujer') {
            console.log('Seleccionaste ' + opt1);
            $('#donde .options .ciudad .link img.desktop').attr('src', 'assets/images/donde_ciudad_mujer.jpg');
            $('#donde .options .campo .link img.desktop').attr('src', 'assets/images/donde_campo_mujer.jpg');
            ascensorInstance.next();
        }
        else{
            console.log('Seleccionaste ' + opt1);
            $('#donde .options .ciudad .link img.desktop').attr('src', 'assets/images/donde_ciudad.jpg');
            $('#donde .options .campo .link img.desktop').attr('src', 'assets/images/donde_campo.jpg');
            ascensorInstance.next();
        }
    });

    $('#genero .volver').click(function(){
        ascensorInstance.prev();
        $('.top-wrapper').removeClass('none');
        $("html, body").animate({scrollTop: $("#wrapper").offset().top}, 1000);
        currentfloor(0);
        updateBullet(0);
    });

    /*---------------------------------------------------- 
    /*  LUGAR
    --------------------------------------------------*/
    $('#donde .options .option').click(function(){
        currentfloor(3);
        opt2 = $(this).data('opcion');
        if ($(this).data('opcion')=='ciudad') {
            console.log('Seleccionaste ' + opt2);
            ascensorInstance.next();
        }
        else{
            console.log('Seleccionaste ' + opt2);
            ascensorInstance.next();
        }
    });

    $('#donde .volver').click(function(){
        ascensorInstance.prev();
        $("html, body").animate({scrollTop: $("#wrapper").offset().top}, 1000);
        currentfloor(1);
        updateBullet(1);
    });


    /*---------------------------------------------------- 
    /*  PARA
    --------------------------------------------------*/

    $('#para a.link').click(function(){
        currentfloor(4);
        opt3 = $(this).data('opcion');
        console.log(opt1 + " , " + opt2);
        elegir();
        if(eleccion == 1 || eleccion == 8 || eleccion == 9 || eleccion == 10 ||  eleccion == 11 || eleccion == 18 || eleccion == 19 || eleccion == 20){
            resultado(eleccion);
        }
        /*
        else if ($(this).data('opcion')=='divertirme') {
            console.log('Seleccionaste ' + opt3);
        }
        else if ($(this).data('opcion')=='mantenerme') {
            console.log('Seleccionaste ' + opt3);
            $('.link').attr('href','#pisada');
        }
        else{
            console.log('Seleccionaste ' + opt3);
            $('.link').attr('href','#pisada');
        }
        */
        else{
            ascensorInstance.next();
        }
    });

    $('#para .options .option').click(function(){
        currentfloor(4);
        opt3 = $(this).data('opcion');
        console.log(opt3);
        elegir();
        if(eleccion == 1 || eleccion == 8 || eleccion == 9 || eleccion == 10 ||  eleccion == 11 || eleccion == 18 || eleccion == 19 || eleccion == 20){
            resultado(eleccion);
            window.location.reload();
        }
        else{
            ascensorInstance.next();
        }
    });

    $('#para .volver').click(function(){
        ascensorInstance.prev();
        $("html, body").animate({scrollTop: $("#wrapper").offset().top}, 1000);
        currentfloor(2);
        updateBullet(2);
    });


    /*---------------------------------------------------- 
    /*  PISADA
    --------------------------------------------------*/
    $('#pisada a.link').click(function(){
        opt4 = $(this).data('opcion');
        console.log(opt4);
        
        if ($(this).data('opcion')=='pronadora') {
            console.log('Seleccionaste ' + opt4);
            $('.link').attr('href','#pisada');//Resultado
        }
        else if ($(this).data('opcion')=='neutra') {
            console.log('Seleccionaste ' + opt4);
            $('.link').attr('href','#pisada');//Resultado
        }
        else{
            console.log('Seleccionaste ' + opt4);
            $('.link').attr('href','#pisada');//Resultado
        }
        
        elegir();
        resultado(eleccion);
    });

    $('#pisada .options .option').click(function(){
        opt4 = $(this).data('opcion');
        console.log(opt4);
        elegir();
        resultado(eleccion);
    });

    $('#pisada .volver').click(function(){
        ascensorInstance.prev();
        $("html, body").animate({scrollTop: $("#wrapper").offset().top}, 1000);
        currentfloor(3);
        updateBullet(3);        
    });


    /*---------------------------------------------------- 
    /*  RESULTADOS
    --------------------------------------------------*/
    function elegir(){
        if(opt1=='mujer' && opt2=='ciudad' && opt3=='divertirme'){ eleccion = 1;}
        if(opt1=='mujer' && opt2=='ciudad' && opt3=='mantenerme' && opt4=='pronadora'){ eleccion = 2;}
        if(opt1=='mujer' && opt2=='ciudad' && opt3=='mantenerme' && opt4=='neutra'){ eleccion = 3;}
        if(opt1=='mujer' && opt2=='ciudad' && opt3=='mantenerme' && opt4=='supinadora'){ eleccion = 4;}
        if(opt1=='mujer' && opt2=='ciudad' && opt3=='competir' && opt4=='pronadora'){ eleccion = 5;}
        if(opt1=='mujer' && opt2=='ciudad' && opt3=='competir' && opt4=='neutra'){ eleccion = 6;}
        if(opt1=='mujer' && opt2=='ciudad' && opt3=='competir' && opt4=='supinadora'){ eleccion = 7;}
        if(opt1=='mujer' && opt2=='campo' && opt3=='divertirme'){ eleccion = 8;}
        if(opt1=='mujer' && opt2=='campo' && opt3=='mantenerme'){ eleccion = 9;}
        if(opt1=='mujer' && opt2=='campo' && opt3=='competir'){ eleccion = 10;}
        if(opt1=='hombre' && opt2=='ciudad' && opt3=='divertirme'){ eleccion = 11;}
        if(opt1=='hombre' && opt2=='ciudad' && opt3=='mantenerme' && opt4=='pronadora'){ eleccion = 12;}
        if(opt1=='hombre' && opt2=='ciudad' && opt3=='mantenerme' && opt4=='neutra'){ eleccion = 13;}
        if(opt1=='hombre' && opt2=='ciudad' && opt3=='mantenerme' && opt4=='supinadora'){ eleccion = 14;}
        if(opt1=='hombre' && opt2=='ciudad' && opt3=='competir' && opt4=='pronadora'){ eleccion = 15;}
        if(opt1=='hombre' && opt2=='ciudad' && opt3=='competir' && opt4=='neutra'){ eleccion = 16;}
        if(opt1=='hombre' && opt2=='ciudad' && opt3=='competir' && opt4=='supinadora'){ eleccion = 17;}
        if(opt1=='hombre' && opt2=='campo' && opt3=='divertirme'){ eleccion = 18;}
        if(opt1=='hombre' && opt2=='campo' && opt3=='mantenerme'){ eleccion = 19;}
        if(opt1=='hombre' && opt2=='campo' && opt3=='competir'){ eleccion = 20;}
    }


    /*---------------------------------------------------- 
    /*  LINK A FALABELLA.COM.CO
    --------------------------------------------------*/

    console.log('Eleccion = ' + eleccion);

    function resultado(eleccion){
        switch(eleccion){
            case 1:
                console.log('Caso #1');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770977/');
                break;
            case 2:
                console.log('Caso #2');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770978/');
                break;
            case 3:
                console.log('Caso #3');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770980/');
                break;
            case 4:
                console.log('Caso #4');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770979/');
                break;
            case 5:
                console.log('Caso #5');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770981/');
                break;
            case 6:
                console.log('Caso #6');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770982/');
                break;
            case 7:
                console.log('Caso #7');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770983/');
                break;
            case 8:
                console.log('Caso #8');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770987/');
                break;
            case 9:
                console.log('Caso #9');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770988/');
                break;
            case 10:
                console.log('Caso #10');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770989/');
                break;
            case 11:
                console.log('Caso #11');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770970/');
                break;
            case 12:
                console.log('Caso #12');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770971/');
                break;
            case 13:
                console.log('Caso #13');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770972/');
                break;
            case 14:
                console.log('Caso #14');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770973/');
                break;
            case 15:
                console.log('Caso #15');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770974/');
                break;
            case 16:
                console.log('Caso #16');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770975/');
                break;
            case 17:
                console.log('Caso #17');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770976/');
                break;
            case 18:
                console.log('Caso #18');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770984/');
                break;
            case 19:
                console.log('Caso #19');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770985/');
                break;
            case 20:
                console.log('Caso #20');
                $('.link').attr('href','http://www.falabella.com.co/falabella-co/category/cat3770986/');
                break;

        }
    }
});