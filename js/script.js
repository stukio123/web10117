let content = `<h2>CHƯƠNG I. HTML</h2>
                <br>
                HTML (Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản được dùng để tạo ra hầu hết các trang web
                <h2>CHƯƠNG II. CSS</h2>
                <br />
                CSS là ngôn ngữ định kiểu , một bộ quy tắc để mô tả cách hiển thị của các đối tượng trên trang web
                <h2>CHƯƠNG III. Javascript</h2>
                <br />

                Javascript là ngôn ngữ lập trình xử lý trang web động phía client
                <h2>CHƯƠNG IV. JQUERY</h2>
                <br />
                
                jQuery là một thư viện các hàm Javascript giúp nhà phát triển giảm thiểu số lượng mã lệnh khi viết code với Javascript
                `;
$('#content').html(content);


$("#findAndPlace").click(
    () => {
            let newContent = '';
            let find = $('#find').val();
            let replace = $('#replace').val();
            if($('#check').prop("checked") == true)
                newContent = content.replaceAll(find,replace);
            else
            {
                newContent = content.replaceAll(find,replace);
            }
        $('#content').html(newContent);
    }
)

$("#reset").click(
    () => {
        $('#content').html(content);
    }
)
