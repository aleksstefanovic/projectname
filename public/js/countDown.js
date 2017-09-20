var i = 30;

function timedCount() {
    i = i - 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
