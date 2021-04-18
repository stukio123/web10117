$("img").mouseover(
    () => {
        $('img').css('transform','scale(1.5)')  
    }
)
$("img").mouseout(
    () => {
        $('img').css('transform','scale(1)')  
    }
)