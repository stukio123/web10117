const buttonRandom = document.getElementById('maunen');
    const buttonRandom1 = document.getElementById('mauchu');
    const colors = [
        '#00aefd',
        '#ffa400',
        '#07a787',
        '#ff7870',
        'black',
        'pink',
        'yellow',
        '#e74c3c',
        '#2979ff',
    ];
    buttonRandom.addEventListener('click', function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('maunen').style.backgroundColor = randomColor;
    });
    buttonRandom1.addEventListener('click', function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('mauchu').style.backgroundColor = randomColor;
    });
    function thuchien() {
        var nd =document.querySelector("#ten").value;
        var maunen = document.getElementById('maunen').style.backgroundColor;
        var mauchu = document.getElementById('mauchu').style.backgroundColor;

        document.getElementById('noidung').innerHTML = '<h1>'+nd+'</h1>';
        document.getElementById('noidung').style.backgroundColor = maunen;
        document.getElementById('noidung').style.color = mauchu;

    }