function daochuoi() {
    var x = document.getElementById("ten").value;
    var ax = x.split(" ");
    var kq = ax.reverse();
    var axx = '';
    for (i = 0; i < kq.length; i++) {
        axx = axx + ' ' + kq[i];
    }
    document.getElementById("ten").value = axx.trim();
}
function chuanhoa() {
    var x = document.getElementById("ten").value;;
    var splitStr = x.toLowerCase().split(" ");
    var str;
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1, (splitStr[i].length - 1));
        str = splitStr.join(" ");
    }
    document.getElementById("ten").value = str.trim();
}