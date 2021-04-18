function myFunction(p1,p2) {
    var d = new Date();
    var a1= document.getElementById(p1).value;
    var a2= document.getElementById(p2).value;
    var a3 =d.getFullYear();
    var a4 =a3- parseInt(a2, 10)
    document.getElementById('ten').innerText ='Chào bạn '+a1+'!';
    document.getElementById('tuoi').innerText ='Tuổi của bạn là ' + a4;
}