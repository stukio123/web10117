let arr=['HTML', 'CSS', 'JQUERY', 'JAVASCRIPT']
$("#text").html(arr[0])

let list = ''

arr.map(element => {
    list += '<li>' + element + '</li>'
});

$("ol").html(list)

$("ol").click(
    (event) => {
        let text = event.target.innerHTML
        $("#text").html(text)       
    }
)

$("#delete").click(
    () => {
        list = ''
        arr.splice(arr.length - 1, 1)
        console.log(arr)


        arr.map(element => {
            list += '<li>' + element + '</li>'
        });

        $("#text").html(arr[0] ? arr[0] : '' )

        $("ol").html(list)
    }
)

let color = () => {
    $("#text").css('color', $("#color").val())
}

$("input[name=text]").click(
    (event) => {
        if(event.target.id == "shadow")
            $("#text").css('text-shadow', '5px 5px 10px black')
        else
            $("#text").css('text-shadow', 'none')
    }
)