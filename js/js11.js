function thongke() {
    var x = document.getElementById("ten").value;
    var char= x.trim().length;
    var w = x.split(" ").length;

    var kt=x.replaceAll(" ","");
    var wt = kt.length;
    var a=['q','w','ư','e','r','t','y',
    'u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c',
    'v','b','n','m','Q','W','Ư','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',
    '0','9','8','7','6','5','4','3','2','1'];
    var str = 'Characters: '+char+'</br>'+'Words: '+w+'</br>';
    var str1='';
     for(i=0;i<a.length;i++){
         var dem =0;
        for(j=0;j<wt;j++){
            if(a[i]===kt[j]){
                dem=dem+1;
            }
        }
        if(dem>0){
            str1= str1+"Character: "+"'"+a[i]+"'"+': '+ dem+'</br>';
        }

     }
    document.getElementById("nd").innerHTML = str.trim()+str1.trim();
}