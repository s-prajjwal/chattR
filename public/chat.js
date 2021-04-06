const socket = io.connect("http://localhost:5000");

const message = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
    const data = {
        message: {
            content: "hi"
        },
        conversation: {
            mode: false,
            uuid: "2c94cf3a91cef51ca18e9b0990cb1b1e"
        },
        channel_type: "web"
    }
    apiCall();
    socket.emit("query", {
        message: message.value
    })
});

function apiCall() {
    $.ajax({
        url: "https://c6.avaamo.com/web_channel/channel/0bb27887-9589-45b2-bdf2-c6f5ad41ebe5/",
        type: 'POST',
        dataType: 'json',
        "crossDomain": true,
        "data": JSON.stringify(data),
        "headers": {
            'se-t': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYXllcl9pZCI6ImYwNGUzMTM1LTYwOWMtNGQ',
            'Access- Control - Allow - Origin': '* '
        },
        "contentType": 'application/json; charset=utf-8',
        "success": function (result) {
            console.log("result", result);
        },
        "error": function (error) {
            console.log(error);
        }
    });

}