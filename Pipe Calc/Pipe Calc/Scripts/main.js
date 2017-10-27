
$('#btn1').click(function (event) {
    event.preventDefault();
   data= {
        "Ymu" : $("#DDL1").val(),

        "Yd" : $("#DDL2").val(),
            
        "Sigmau" : $("#value_1").val(),
        "Sigmay": $("#value_2").val(),
        "Yfp": $("#value_3").val(),
        "p": $("#value_4").val(),
        "D": $("#value_5").val()
        };
	
    $.ajax({
        url: '/Compute',
        type: 'POST',
        data: data,
        success: function (result) {
            $('.answer').append('<p>' + result.Message + '</p>')
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
});


$('#btn2').click(function (event) {
    event.preventDefault();
    data = {
        "Sigmay": $("#value_1").val(),
        "Yfp": $("#value_2").val(),
        "p": $("#value_3").val(),
        "D": $("#value_4").val(),
        "C": $("#value_5").val()
    };
    if ($("#DDL1").val() == "H") {
        switch ($("#DDL2").val()) {
            case "Низкое":
                data["Yds"] = "0.82";
                break;
            case "Среднее":
                data["Yds"] = "0.767";
                break;
        }
    }
    else if ($("#DDL1").val() == "C") {
        switch ($("#DDL2").val()) {
            case "Низкое":
                data["Yds"] = "0.767";
                break;
            case "Среднее":
                data["Yds"] = "0.637";
                break;
        }
    }
    else {
        switch ($("#DDL2").val()) {
            case "Низкое":
                data["Yds"] = "0.637";
                break;
            case "Среднее":
                data["Yds"] = "0.51";
                break;
        }
    }
    $.ajax({
        url: '/Another/Compute',
        type: 'POST',
        data: data,
        success: function (result) {
            $('.answer').append('<p>' + result.Message + '</p>')
        },
        error: function (result) {
            alert('Oh no :(');
        }
    });
});