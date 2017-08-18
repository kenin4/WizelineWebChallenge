function sendLongUrl() {
    if ($('#longUrl').val().length == 0) {
        alert('The URL field cannot be empty');
        return;
    }
    console.log($('#urlShortenerForm').serialize());
    var originalUrl = $('#longUrl').val();

    $.post("http://localhost:3030", $('#urlShortenerForm').serialize(), function(data) {

        $('#generatedShortUrl').attr('href', 'http://cut.me:3030/' + data._id);
        $('#generatedShortUrl').html('cut.me/' + data._id);

        $('#succesDialog').show('slow');

        getAllUrls();
    })
}

function getAllUrls() {
    $('#allRecords').empty();


    $.ajax({
        url: "http://localhost:3030",
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function(response) {
            console.log(response);
            var table = $('#allRecords');

            if(response.length > 0)
                $('#infoTable').show();
            else
                $('#no-info').show();
            



            for (i = 0; i < response.length; i++)
                $('#allRecords').prepend('<tr><td> <a href="http://cut.me:3030/' + response[i]._id + '" target="_blank">cut.me:3030/' + response[i]._id + ' </a> </td><td> ' + response[i].longUrl + '</td>' + '<td> ' + dateFormat(response[i].createdDate) + '</td></tr>');
        },
        error: function(xhr, status) {
            alert("No se puede conectar a la base de datos");
        }
    });
}



function dateFormat(string)
{
    var aux = string.split('T');
    var timeComponents = aux[0].split('-');
    return timeComponents[0] + '/' + timeComponents[1] + '/' + timeComponents[2];
}

$(document).ready(function() {
    //$('#send').click(sendLongUrl);
    getAllUrls();

    $("#urlShortenerForm").submit(function(event) {
        sendLongUrl();
        event.preventDefault();
    });
});