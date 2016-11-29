function navbar() {
    var x = document.getElementById("navbarTop");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
