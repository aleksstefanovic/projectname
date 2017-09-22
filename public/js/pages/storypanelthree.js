var w;

if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
        w = new Worker("../js/countDown.js");
    }
    w.onmessage = function(event) {
        if (parseInt(event.data) <= 0) {
            stopWorker();
        }
        document.getElementById("result").innerHTML = event.data;
    };
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
}

function stopWorker() {
    w.terminate();
    w = undefined;
    localStorage.setItem("choiceTwo", "1");
    var newLocation = location.replace("storypanelfour");
    open(newLocation, "_self");
}

$(document).ready(function() {
    var search = location.search;
    if (search) {
        var params = search.split("?");
        var choiceParam = params[1];
        var choiceParams = choiceParam.split("=");
        var choice = choiceParams[1];
        localStorage.setItem("choiceOne", choice);
    }
});
