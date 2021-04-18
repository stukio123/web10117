function thuchien(p1, p2, p3) {

    var a = document.getElementById(p1).value;
    var b = document.getElementById(p2).value;
    var tagValues = document.getElementsByName(p3);
    var kq;
    var kt;
    var a1 = parseInt(a, 10);
    var b1 = parseInt(b, 10);
    for (const obj of tagValues) {

        if (obj.checked === true) {
            kt = obj.value;
        }

    }
    if (kt === 'Cộng') {
        kq = a1 + b1;
    }
    if (kt === 'Trừ') {
        kq = a1 - b1;
    }
    if (kt === 'Nhân') {
        kq = a1 * b1;
    }
    if (kt === 'Chia') {
        kq = a1 / b1;
    }
    //window.alert(kq);
    document.getElementById('kq').innerText = kq;
}
