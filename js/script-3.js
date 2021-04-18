$("#color").click(
    () => {
        $("tr:nth-child(even)").css("background-color", "red");
    }
)

$("#normal").click(
    () => {
        $("tr:nth-child(even)").css("background-color", "#f2f2f2");
    }
)