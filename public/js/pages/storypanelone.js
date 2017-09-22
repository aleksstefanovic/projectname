function getGeoLocation () {
    var x = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "CRITICAL ERROR LOCATION NOT FOUND";
    }
}

function showPosition(position) {
    var mainTextOne = document.getElementById("main-text-one");
    mainTextOne.innerHTML = "Blue goo to find and grey to destroy, I found your lat and lng: " + "<span id=\"location\"></span>" + ", numbers I admit I've come to long. Mark your home and never leave, shudder all you please. Your project means nothing your space is my need.";

    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("lng", position.coords.longitude);

    var x = document.getElementById("location");
    x.innerHTML = localStorage.getItem("lat") + ", " + localStorage.getItem("lng");


    var continueButton = document.getElementById("continue");
    var geoLocation = document.getElementById("geoLocation");
    geoLocation.style.visibility = "hidden";
    continueButton.hidden = false;
}
