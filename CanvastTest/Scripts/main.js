$(document).ready(function () {
    if (!Modernizr.canvas) {
        alert("This browser does not support the canvas tag.");
        return;
    }
    var $canvas = $("#main");
    var context = $canvas[0].getContext("2d");
    var w;
    var h;
    var maxVelocity = 10;
    var points = [];
    var radians = 0;
    var segments = 3;
    var pointsCount = 15;

    // Image preparation placeholder
    
    function resize() {
        w = $canvas.width();
        h = $canvas.height();
        $canvas.attr("width", w);
        $canvas.attr("height", h);
        // Resize function body placeholder
    }
    $(window).resize(resize);
    resize();

    // Randomizer placeholder

    function frame() {
        // Frame function body placeholder
    }
    frame();
});