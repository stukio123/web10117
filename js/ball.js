var ballHeight;
var ballWidth;
var dx = 4;
var dy = 5;

$(document).ready(function () {
	ballWidth = $("#ball").width();
	ballHeight = $("#ball").height();
	setInterval(Play, 20);
});

function Play() {
	var boxWidth = $("#frame").width();
	var boxHeight = $("#frame").height();
	var ballLeft = parseInt($("#ball").css("left"));
	var ballTop = parseInt($("#ball").css("top"));

	if (ballLeft < 0 || ballLeft + ballWidth > boxWidth) {
		dx = -dx;
	}

	if (ballTop <=0 || ballTop + ballHeight > boxHeight) {
		dy = -dy;
	}

	$("#ball").css("left", ballLeft + dx + "px");
	$("#ball").css("top", ballTop + dy + "px");
}