var arrABC = [];
function tao() {
    var arr = [];
    var taoMang = '';
    var a = document.getElementById("ten").value;
    var sopt = parseInt(a, 10)
    for (i = 0; i < sopt; i++) {
        abc = Math.floor(Math.random() * 50)
        arrABC = arr.push(abc);
        taoMang = taoMang + ' ' + abc;

    }//
    document.getElementById("a1").innerHTML = 'Mảng ban đầu: ' + taoMang;
    document.getElementById("a2").innerHTML = '';
    document.getElementById("a3").innerHTML = '';
    //return arrABC;
}
function tang() {
    var a = document.getElementById("a1").innerText;
    var sapxeptang = '';
    var arrB = [];
    arrB = a.replace("Mảng ban đầu: ", "").split(" ");
    arrB.sort(function (a, b) { return a - b });
    for (i = 0; i < arrB.length; i++) {
        sapxeptang = sapxeptang + ' ' + arrB[i];

    }
    document.getElementById("a2").innerHTML = 'Mảng tăng dần: ' + sapxeptang;
}
function giam() {
    var a = document.getElementById("a1").innerText;
    var sapxepgiam = '';
    var arrB = [];
    arrB = a.replace("Mảng ban đầu: ", "").split(" ");
    arrB.sort(function (a, b) { return b - a });
    for (i = 0; i < arrB.length; i++) {
        sapxepgiam = sapxepgiam + ' ' + arrB[i];
    }
    document.getElementById("a3").innerHTML = 'Mảng giảm dần: ' + sapxepgiam;
}
