$("ul").mouseover(
    (event) => {
        event.target.classList.add("active");

    }
)

$("ul").mouseout(
    (event) => {
        event.target.classList.remove("active");
    }
)