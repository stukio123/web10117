let number = 0
let arr = []
let i = 0

$("#create").click(
    () => {
        $("#output").val('')
        number = $('#number').val()
        for(i = 0; i < number; i++)
        {
            arr[i] = Math.floor(Math.random() * 50);
        }
        output = arr.join()
        $("#output").val(output)
    }
)

$("#even").click(
    () => {
        i = 0
        while(i < arr.length)
        {
            if(arr[i] % 2 == 0)
                arr.splice(i, 1);
            else
                i++
        }
        output = arr.join()
        $("#output").val(output)
    }
)

$("#left").click(
    () => {
        arr.push(arr[0])
        arr.splice(0, 1);
        output = arr.join()
        $("#output").val(output)
    }
)

$("#right").click(
    () => {
        arr.unshift(arr[arr.length - 1])
        arr.splice(arr.length - 1, 1);      
        output = arr.join()
        $("#output").val(output)
    }
)