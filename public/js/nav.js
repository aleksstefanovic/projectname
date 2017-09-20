$(document).ready(function() {
    $.get("/imports/nav.html", function(data){
        $("#nav").replaceWith(data);
    });
});
