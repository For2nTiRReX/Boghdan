$(document).ready(function($){
        $('#mega-1').dcVerticalMegaMenu({
            rowItems: '3',
            speed: 'fast',
            effect: 'show',
            direction: 'right'
        });
$(function($){	
    $('a.zoom').easyZoom();
});  
    $(".basket-str").click(function(){
        $(".korzina-meny").slideToggle("fast");
        return false;
    });	
});