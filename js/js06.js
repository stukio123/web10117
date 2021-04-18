var abcd = '';
var abcd1 = '';
function BangCC() {

    for (i = 9; i >= 6; i--) {
        for (j = 9; j >= 2; j--) {
            abcd = '<p>' + i + 'x' + j + '=' + i * j + '</p>' + abcd;
        }
        abcd = '<td>' + abcd + '</td>';

    }
    // document.getElementById('bcc').innerHTML = abcd;
}
function BangCC1() {

    for (i = 5; i >= 2; i--) {
        for (j = 9; j >= 2; j--) {
            abcd1 = '<p>' + i + 'x' + j + '=' + i * j + '</p>' + abcd1;
        }
        abcd1 = '<td>' + abcd1 + '</td>';

    }
    document.getElementById('bcc').innerHTML = '</tr>' + abcd1 + '</tr><tr>' + abcd + '</tr>';
}
window.onload = BangCC();
window.onload = BangCC1();