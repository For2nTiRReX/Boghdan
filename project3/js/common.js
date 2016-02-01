$(document).ready(function($){
    $("#featured > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);
    $(".basket-str").click(function(){
        $(".korzina-meny").slideToggle("fast");
        return false;
    });		
});