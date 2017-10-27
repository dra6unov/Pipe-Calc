
$('.btn-primary').click(function (event) {
	event.preventDefault();
    $.ajax({
        url: '/Compute',
        type: 'POST',
        data: { 'first': parseInt($('#value_1').val()), 'second': parseInt($('#value_2').val()), 'third': parseInt($('#value_3').val())},
        success: function (result) {
            $('.answer').append('<p>' + result.Message.first + '</p>')
            $('.answer').append('<p>' + result.Message.second + '</p>')
            $('.answer').append('<p>' + result.Message.third + '</p>')
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
});