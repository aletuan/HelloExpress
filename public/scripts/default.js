$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers);
    $('#btnSubstract').on('click', substractNumbers);
    $('#btnMutiplication').on('click', multiplyNumbers);
    $('#btnDivision').on('click', divideNumbers);
});

function addNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.getJSON('/addition', data, function (data) {
            $('#result').html(data.result);
}); }

function substractNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.post('/substract', data, function (data) {
            $('#result').html(data.result);
},'json'); }

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