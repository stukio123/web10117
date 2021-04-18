$("input").click(
    (event) => {
        let positionX = $("#shape").css('margin-left')
        let positionY = $("#shape").css('margin-top')
        let numberX = parseInt(positionX.slice(0,positionX.lastIndexOf('px')))
        let numberY = parseInt(positionY.slice(0,positionY.lastIndexOf('px')))
        switch(event.target.id)
        {
            case "right":
                numberX += 10
                $("#shape").css('margin-left', numberX + 'px')
                break
            case "left":
                numberX -= 10
                $("#shape").css('margin-left', numberX + 'px')
                break
            case "down":
                numberY += 10
                $("#shape").css('margin-top', numberY + 'px')
                break
            case "up":
                numberY -= 10
                $("#shape").css('margin-top', numberY + 'px')
                break
            
        }
    }
)