$(document).ready(function(){
    $("#title__menu").click(function(e) {
        e.preventDefault();
        var linkMenu = $(this).find('a')


        var currentClass = $(linkMenu).attr('class');
        if(currentClass === 'close-menu'){
            $(this).addClass('big');
            $(linkMenu).attr('class', 'open-menu');
            $(linkMenu).find('i.icon-icon_menu').fadeOut('100', function() {
                $(linkMenu).find('i.icon-icon_close').fadeIn(100);
                $('ul.header__top_menu_list').addClass('open__list');
            });



        }else{
            $(this).removeClass('big');
            $(linkMenu).attr('class', 'close-menu');
            $(linkMenu).find('i.icon-icon_close').fadeOut('100', function() {
                $(linkMenu).find('i.icon-icon_menu').fadeIn(100);
                $('ul.header__top_menu_list').removeClass('open__list');
            });
        }
        console.log(currentClass);
    })
})