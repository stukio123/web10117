function abc() {
    var kt;
    var tagValues = document.getElementsByName('c');
    for (const obj of tagValues) {

        if (obj.checked === true) {
            kt = obj.value;
        }

        if (kt === '10') {
            // document.getElementById('inputImage').style.width = 103;
            // document.getElementById('inputImage').style.height = 77;
            document.getElementById("inputImage").className = "a10";
        }
        if (kt === '25') {
            // document.getElementById('inputImage').style.width = 256;
            // document.getElementById('inputImage').style.height = 194;
            document.getElementById("inputImage").className = "a25";
        }
        if (kt === '50') {
            // document.getElementById('inputImage').style.width = 512;
            // document.getElementById('inputImage').style.height = 384;
            document.getElementById("inputImage").className = "a50";
        }
    }
}