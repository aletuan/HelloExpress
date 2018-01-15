$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);
    $('#btnSubstract').on('click', substractNumbers);
    $('#btnMutiplication').on('click', multiplyNumbers);
    $('#btnDivision').on('click', divideNumbers);
});


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
    serverDivision(data).done(displayResult).fail(displayError);
}

function displayError(serverData, error) {
    var value = 'No result';
    if ('result' in serverData) value = serverData.result;
    $('#result').html(value + " - " + error);
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