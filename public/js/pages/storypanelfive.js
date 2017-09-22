$(document).ready(function() {
    var search = location.search;
    if (search) {
        var params = search.split("?");
        var choiceParams = params[1];
        var choiceSubParams = choiceParams.split("&");
        
        var canvasOne = choiceSubParams[0].split("=")[1]; 
        localStorage.setItem("canvasOne", canvasOne);

        var canvasTwo = choiceSubParams[1].split("=")[1]; 
        localStorage.setItem("canvasTwo", canvasTwo);

        var canvasThree = choiceSubParams[2].split("=")[1]; 
        localStorage.setItem("canvasThree", canvasThree);

        var canvasFour = choiceSubParams[3].split("=")[1]; 
        localStorage.setItem("canvasFour", canvasFour);
    }
});
