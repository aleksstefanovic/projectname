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
    mainTextOne.innerHTML = "Curabitur tincidunt mattis iaculis. Vestibulum sed lorem fermentum, varius arcu sit amet, euismod ante. Vivamus et facilisis libero, vitae facilisis velit. Etiam sollicitudin diam massa, at " + "<span id=\"location\">viverra</span>" + " quam volutpat eget. Etiam sodales dui eget lectus sagittis, id fringilla elit lobortis. Integer dictum faucibus feugiat. Nunc a orci quam. Quisque et mauris ligula. Fusce hendrerit pretium eros, vestibulum placerat erat luctus nec. Duis lacinia nibh a ligula bibendum, et tempus arcu imperdiet. Phasellus auctor non tortor id imperdiet. Etiam iaculis nisi mi, volutpat eleifend dolor dapibus quis. Quisque eu metus fringilla, condimentum turpis vel, volutpat elit. Proin semper felis eget ornare vulputate.";

    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("lng", position.coords.longitude);

    var x = document.getElementById("location");
    x.innerHTML = localStorage.getItem("lat") + " and " + localStorage.getItem("lng");


    var continueButton = document.getElementById("continue");
    var geoLocation = document.getElementById("geoLocation");
    geoLocation.style.visibility = "hidden";
    continueButton.hidden = false;
}
