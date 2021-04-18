$("div").mouseover(
    (event) => {
        let output = '';
        switch(event.target.id)
        {
            case "red":
                output = `<b style="color: red;">Màu bạn chọn là màu Đỏ: rgb(255,0,0)</b>`
                break
            case "blue":
                output = `<b style="color: blue;">Màu bạn chọn là màu Xanh dương: rgb(0,0,255)</b>`
                break
            case "green":
                output = `<b style="color: green;">Màu bạn chọn là màu Xanh lá cây: rgb(0,255,0)</b>`
                break
            case "purple":
                output = `<b style="color: purple;">Màu bạn chọn là màu Tím: rgb(255,0,255)</b>`
                break
        }
        $("#output").html(output)
    }
)