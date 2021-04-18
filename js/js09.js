function thaythe() {
    var x = document.getElementById("ten").value;
    var a = document.getElementById("pass").value;
    var a2 = document.getElementById('ngaysinh').value;
    var kq = x.replaceAll(a,a2);
    document.getElementById("ten").value = kq;
}