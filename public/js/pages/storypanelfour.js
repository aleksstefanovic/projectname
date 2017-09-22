$(document).ready(function() {
    var search = location.search;
    if (search) {
        var params = search.split("?");
        var choiceParam = params[1];
        var choiceParams = choiceParam.split("=");
        var choice = choiceParams[1];
        localStorage.setItem("choiceTwo", choice);
    }

    var canvasOne = document.getElementById("canvasOne");
    canvasOne.value = localStorage.getItem("canvasOne");

    var canvasTwo = document.getElementById("canvasTwo");
    canvasTwo.value = localStorage.getItem("canvasTwo");

    var canvasThree = document.getElementById("canvasThree");
    canvasThree.value = localStorage.getItem("canvasThree");

    var canvasFour = document.getElementById("canvasFour");
    canvasFour.value = localStorage.getItem("canvasFour");
});
