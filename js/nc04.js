var ballWidth;
var ballWidth1;
var ballWidth2;
var dx = Math.floor(Math.random() * 5) + 1;
var dx1 = Math.floor(Math.random() * 5) + 1;
var dx2 = Math.floor(Math.random() * 5) + 1;


$(document).ready(function () {
	ballWidth = $("#ngua").width();
    ballWidth1 = $("#rua").width();
    ballWidth2 = $("#tho").width();

	
});

var clear;

 var getValue = function() {
	var boxWidth = $("#frame").width();

	var ballLeft = parseInt($("#ngua").css("left"));
    var ballLeft1 = parseInt($("#rua").css("left"));
    var ballLeft2 = parseInt($("#tho").css("left"));


	if (ballLeft <= 0 || ballLeft + ballWidth > boxWidth || ballLeft1 <= 0 || ballLeft1 + ballWidth1 > boxWidth || ballLeft2 <= 0 || ballLeft2 + ballWidth2 > boxWidth) {
		dx =0;
        dx1 = 0;
        dx2 = 0;
	}
	

	$("#ngua").css("left", ballLeft + dx + "px");
    $("#rua").css("left", ballLeft1 + dx1 + "px");
    $("#tho").css("left", ballLeft2 + dx2 + "px");

}

function play() {
    clear = setInterval(getValue, 40)
}

function stop() {
    clearInterval(clear);
}

function reset() {
    location.reload();
}

