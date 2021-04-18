function dangky() {
    var x = document.getElementById("ten").required;
    var a = document.getElementById("ten").value;
    if (a == '') {
        alert("Tên bắt buộc phải nhập");
        document.getElementById("ten").focus;
    } else {
        var a1 = document.getElementById('pass').value;
        var a2 = document.getElementById('ngaysinh').value;
        var a3 = document.getElementById('sothich').value;
        var a4 = a2.split("-");
        a5 = a4[2] + '-' + a4[1] + '-' + a4[0];
        var tagValues = document.getElementsByName('gioitinh');
        var kt;
        for (const obj of tagValues) {

            if (obj.checked === true) {
                kt = obj.value;
            }
        }
        if (kt === 'nam') {
            kq = 'Nam';
        }
        if (kt === 'nu') {
            kq = 'Nữ';
        }
        document.querySelector("#a1").innerHTML = 'Chào mừng ' + a;
        document.querySelector("#a2").innerHTML = 'Bạn là ' + kq;
        document.querySelector("#a3").innerHTML = 'Mật khẩu của bạn có ' + a1.length + ' ký tự';
        document.querySelector("#a4").innerHTML = 'Bạn sinh ngày ' + a5;
        document.querySelector("#a5").innerHTML = 'Vấn đề bạn quan tâm là ' + a3;
    }
}
