function giaiPTB2(p1,p2,p3) {

    var a = document.getElementById(p1).value;
    var b = document.getElementById(p2).value;
    var c = document.getElementById(p3).value;

    // var a2 = document.getElementById(p).value;
    //if()

    var a1 = parseInt(a, 10);
    var b1 = parseInt(b, 10);
    var c1 = parseInt(c, 10);
    var delta = Math.pow(b1, 2) - 4 * a1 * c1;
     //window.alert(a1);
    if (delta < 0) {
        document.getElementById('ten').innerText = 'PT vo nghiem';
    }
    if (delta == 0) {
        document.getElementById('ten').innerText = 'PT co nghiem kep';
        var x = -b1 / 2 / a1;
        document.getElementById('tuoi').innerText = 'X1 = X2 = ' + x;
    }
    if (delta > 0) {
        document.getElementById('ten').innerText = 'PT co 2 nghiem';
        // window.alert(delta);
        var x1 = (-b1 + Math.sqrt(delta)) / 2 / a1;
        var x2 = (-b1 - Math.sqrt(delta)) / 2 / a1;
        document.getElementById('tuoi').innerText = 'X1 = ' + x1;
        document.getElementById('tuoi1').innerText = 'X2 = ' + x2;
        // window.alert(x1);
        // window.alert(x2);
    }


    parseInt(a1, 10)
    // var a3 = d.getFullYear();
    // var a4 = a3 - parseInt(a2, 10)
    // document.getElementById('ten').innerText = 'Chào bạn ' + a1 + '!';
    // document.getElementById('tuoi').innerText = 'Tuổi của bạn là ' + a4;
}