(function() {
    var e = document.createElement('script');
    e.src = document.location.protocol + '//connect.facebook.net/es_ES/all.js';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
}());

window.fbAsyncInit = function() {
  FB.init({
    appId      : '848463841935085',
        oauth   : true,
        status  : true, // check login status
        cookie  : true, // enable cookies to allow the server to access the session
        xfbml   : true // parse XFBML
  });

};

function facebookShare(){
    FB.ui({
        method: 'share',
        href: document.location.href,
    }, function(response){});
}

function twittershare(){
    window.open("https://twitter.com/intent/tweet?text=+Todos+los+estilos+que+quieres+las+mejores+marcas+VoyConTenisYPunto.+http://bit.ly/2d1qVuM",'_blank', 'width=700,height=465');
}

