// DOMが準備されてからJSが実行されるようにする記述
$(function(){
    let flag = true;

    $('a[href^="#"]').click(function(){
        let duration = 500;

        let href = $(this).attr("href");

        let hrefName;

        if (href == "#") {
            hrefName = 'html';
        } else {
            hrefName = href
        }

        let target = $(hrefName);
        let position = target.offset().top　- 86;

        $("html, body").animate({ scrollTop: position }, duration, "swing");
    });

    
    $('#test').click(function () { 
        $('.mv-image').animate({
            marginTop: '-=10px'
        }, 800).animate({
                marginTop: '+=10px'
        }, 800);
    });

    function rect() {
        
    }

    $('#logo').click(function () { 
        if (flag) {
            $('#logo').animate({
                marginLeft:'200px'//margin-leftをキャメルケースで書く
            });
        } else {
            $('#logo').animate({
                marginLeft:'0'//margin-leftをキャメルケースで書く
            });
        }
        flag = !flag;
    });

    $("#about button").click(function() {
        $(".about-image").toggle('slow');
    });    
});