const buttonRandom = document.getElementById('macdinh');
const buttonRandom1 = document.getElementById('apdung');

buttonRandom.addEventListener('click', function () {
    document.getElementById('noidung').style.color = 'black';
    document.getElementById('nd1').style.color = 'black';
    document.getElementById('nd1').style.backgroundColor = '#ffffff';
});
buttonRandom1.addEventListener('click', function () {
    document.getElementById('noidung').style.color = 'red';
    document.getElementById('nd1').style.backgroundColor = 'blue';
    document.getElementById('nd1').style.color = 'yellow';
});
