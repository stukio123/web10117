var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 100, 100, 0, 2 * Math.PI);
ctx.stroke();

// var ctx1 = c.getContext("2d");
// ctx1.beginPath();
// ctx1.fillStyle = "#FF0EEE";
// ctx1.fillRect(50, 50, 100, 100);

var ctx2 = c.getContext("2d");
ctx2.beginPath();
ctx2.fillStyle = "#FF0000";
ctx2.fillRect(50, 50, 100, 100);