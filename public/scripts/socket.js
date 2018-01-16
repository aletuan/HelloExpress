var wsUri = 'ws://echo.websocket.org/';

var webSocket;

$(document).ready(function() {
    if (checkSupported()) {
        //connect();
        //$('#btnSend').click(doSend);
    }
});

function writeOutput(message) {
    var output = $('#divOutput');
    output.html(output.html() + "<br />" + message);
}

function checkSupported() {
    if (window.WebSocket) {
        writeOutput('WebSockets supported');
        return true;
    }
    else {
        writeOutput('WebSocket does not supported');
        $('#btnSend').attr('disabled', 'disabled');
        return false;
    }
}