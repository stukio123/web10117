let subjects = []

$("#add").click(
    () => {
        let list = '';
        let subject = $("#subject").val()
        $("#subject").val('')
        subjects.push(subject);
        
        subjects.map(element => {
            list += '<li>' + element + '</li>'
        });
        $("#subjects").html(list)
    }
)