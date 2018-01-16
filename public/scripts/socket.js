var wsUri = 'ws://echo.websocket.org/';

var webSocket;

$(document).ready(function() {
    if (checkSupported()) {
        connect();
        $('#btnSend').click(doSend);
    }
});

function doSend() {
    if (webSocket.readyState != webSocket.OPEN) {
        writeOutput("NOT OPEN: " + $('#txtMessage').val());
        return;
    }
    writeOutput("SENT: " + $('#txtMessage').val());
    webSocket.send($('#txtMessage').val());
}

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

function connect() {
    webSocket = new WebSocket(wsUri);
    webSocket.onopen = function (evt) { onOpen(evt) };
    webSocket.onclose = function (evt) { onClose(evt) };
    webSocket.onmessage = function (evt) { onMessage(evt) };
    webSocket.onerror = function (evt) { onError(evt) };
}

function onOpen(evt) {
    writeOutput("CONNECTED");
}
function onClose(evt) {
    writeOutput("DISCONNECTED");
}
function onMessage(evt) {
    writeOutput('RESPONSE: ' + evt.data);
}

function onError(evt) {
    writeOutput('ERROR: ' + evt.data);
}