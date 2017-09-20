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
}
