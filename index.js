$(document).ready(function(){
    let fadeOutTimeout;

    $("#floating-box").click(function () {
        $("#links-container").css("visibility", "visible").css("opacity", 1);
    });

    $("#floating-box, #links-container").mouseleave(function () {
        fadeOutTimeout = setTimeout(function() {
            $("#links-container").css("opacity", 0);
            setTimeout(function() {
                $("#links-container").css("visibility", "hidden");
            }, 300); 
        }, 500); 
    });

    $("#floating-box, #links-container").mouseenter(function () {
        clearTimeout(fadeOutTimeout); 
        $("#links-container").css("visibility", "visible").css("opacity", 1); 
    });
});