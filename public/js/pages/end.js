$(document).ready(function() {
    var search = location.search;
    if (search) {
        var params = search.split("?");
        var choiceParams = params[1];
        var choiceSubParams = choiceParams.split("&");
        
        var choiceThree = choiceSubParams[0].split("=")[1]; 
        localStorage.setItem("choiceThree", choiceThree);
    }

    var lat = document.getElementById("lat");
    lat.innerHTML = localStorage.getItem("lat");

    var lng = document.getElementById("lng");
    lng.innerHTML = localStorage.getItem("lng");

    var choiceOne = document.getElementById("choiceOne");
    choiceOne.innerHTML = localStorage.getItem("choiceOne");

    var choiceTwo = document.getElementById("choiceTwo");
    choiceTwo.innerHTML = localStorage.getItem("choiceTwo");

    var choiceThree = document.getElementById("choiceThree");
    choiceThree.innerHTML = localStorage.getItem("choiceThree");

    var canvasOne = localStorage.getItem("canvasOne");
    var canvasTwo = localStorage.getItem("canvasTwo");
    var canvasThree = localStorage.getItem("canvasThree");
    var canvasFour = localStorage.getItem("canvasFour");

    canvasOne = canvasOne.toLowerCase();
    canvasTwo = canvasTwo.toLowerCase();
    canvasThree = canvasThree.toLowerCase();
    canvasFour = canvasFour.toLowerCase();

    var canvasArray = [canvasOne, canvasTwo, canvasThree, canvasFour];

    drawCanvas (canvasArray);
});



function drawCanvas (canvasArray) {
    var canvasCount = 4;

    var canvas = document.getElementById("playerCanvas"); 
    for (var i=0; i < canvasArray.length; i++) {
        var color = findFirstColor (canvasArray);
        if (canvasArray[i] === 'circle') {
            drawCircle(canvas, color); 
            canvasCount--;
        }
        if (canvasArray[i] === 'rectangle') {
            drawRectangle(canvas, color); 
            canvasCount--;
        }
        else {
            drawText (canvas, canvasArray[i], canvasCount, color);
            canvasCount--;
        }
    }
}

function findFirstColor (canvasArray) {
    for (var i=0; i < canvasArray.length; i++) {
        if (canvasArray[i] === 'red') {
            return 'red';
        }
        if (canvasArray[i] === 'green') {
            return 'green';
        }
    }
    return "white";
}

function drawRectangle (canvas, color) {
    var ctx = canvas.getContext("2d");
    ctx.rect(20,20,150,100);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawCircle (canvas, color) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
}

function drawText (canvas, text, position, color) {
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";

    if (position === 4) 
        ctx.textAlign = "center";
    else if (position === 3)
        ctx.textAlign = "right";
    else if (position === 2)
        ctx.textAlign = "left"
    else if (position === 1)
        ctx.textAlign = "center"

    ctx.strokeText(text,10,50);
}
