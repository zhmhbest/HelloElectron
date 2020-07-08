document.querySelector('button').onclick = function(e) {
    $.ajax({
        url: "http://127.0.0.1:25538/",
        type: 'GET',
        data: {},
        dataType: 'text',
        success: function(res) {
            console.log(res);
        },
        error: function(err) {
            console.error(err);
        }
    });
}