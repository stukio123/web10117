$("#count").click(
    () => {
        let from = new Date($("#from").val())
        let to = new Date($("#to").val())
        
        let clock = new Date(new Date().getTime() / 1000);
        
        from = Math.abs(from - clock) / 1000;
        to = Math.abs(to - clock) / 1000;

        let days = Math.floor((to - from) / 86400);

        $('#days').html('Số ngày là: ' + days)
        
    }
)