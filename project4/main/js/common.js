$(function(){
    SyntaxHighlighter.all();
    $('#carousel').elastislide();
});
$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});