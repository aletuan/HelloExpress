var milliseconds = 1000;
var opacity = 0.5;

$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);
    $('#btnSubstract').on('click', substractNumbers);
    $('#btnMutiplication').on('click', multiplyNumbers);
    $('#btnDivision').on('click', divideNumbers);
    $('#btnShowMessage').click(displayTimeAsync);
    $('#messageOk').click(hideMessageAsync);
});

function displayCoverAsync() {
    return $('#cover').fadeTo(milliseconds, opacity).promise();
}

function showMessageContentAsync(message) {
    $('#message').html(message);
    $('#messageBox').show();
    return $('#messageContent').slideDown(milliseconds).promise();
}


function showMessageAsync(message) {
    var coverPromise = displayCoverAsync();
    var messagePromise = coverPromise.pipe(function () {
        return showMessageContentAsync(message);
    });
    return messagePromise;
}

function displayTimeAsync() {
    var message = 'The time is now ' + getTime();
    return showMessageAsync(message);
}

function getTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    return hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
}

function hideMessageContentAsync(message) {
    console.log("hideMessageContentAync is called");
    var promise = $('#messageContent').slideUp(milliseconds).promise();
    promise.done(function () { $('#messageBox').hide()});
    return promise;
}

function hideCoverAsync() {
    return $('#cover').fadeOut(milliseconds).promise();
}

function hideMessageAsync() {
    console.log("hideMessageAsync is called");
    var messagePromise = hideMessageContentAsync();
    var coverPromise = messagePromise.pipe(function () {
        return hideCoverAsync();
    });

    return coverPromise;
}

/*
function addNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.getJSON('/addition', data, function (data) {
            $('#result').html(data.result);
}); }
*/

function addNumbers() {
    var data = getFormData();
    serverAddition(data).done(displayResult);
}

function getFormData() {
    var x = $('#x').val();
    var y = $('#y').val();
    return { "x": x, "y": y};
}

function serverAddition(data) {
    return $.getJSON('/addition', data);
}

function displayResult(serverData) {
    $('#result').html(serverData.result);
}

/*
function substractNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.post('/substract', data, function (data) {
            $('#result').html(data.result);
},'json'); }
*/

function substractNumbers() {
    var data = getFormData();
    serverSubtraction(data).done(displayResult);
}

function serverSubtraction(data) {
    return $.post('/substract', data, 'json');
}

/*
function multiplyNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}
*/

function multiplyNumbers() {
    var data = getFormData();
    serverMultiplication(data).done(displayResult);
}

function serverMultiplication(data) {
    console.log("serverMultiplication is called");
    return $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        dataType: 'json',
        cache: false
    });
}

function divideNumbers() {
    var data = getFormData();
    serverDivision(data).done(displayResult);
}

function serverDivision(data) {
    return $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false
    });
}

/*
function divideNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $('#result').html(data.result);
        }
    }); 
}
*/

/*
function addNumbers() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var result = document.getElementById('result');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonObject = JSON.parse(xmlhttp.response);
            result.innerHTML = jsonObject.result;
        }
    }

    //xmlhttp.open('GET', '/addition?x=' + x + "&y=" + y, false);
    xmlhttp.open('GET', '/addition?x=' + x + "&y=" + y, true);
    xmlhttp.send();

    //var jsonObject = JSON.parse(xmlhttp.response);
    //result.innerHTML = jsonObject.result;
}
*/