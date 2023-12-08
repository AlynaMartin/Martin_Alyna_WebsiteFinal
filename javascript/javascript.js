$(document).ready(function(){
    $("#hamburger-menu").click(function(){
        $("#mobile-nav").fadeIn("slow");
    });
    $("#close-menu").click(function(){
        $("#mobile-nav").fadeOut("slow");
    });
});