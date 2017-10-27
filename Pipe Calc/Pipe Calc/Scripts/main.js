
$("#btn1").click(function(event) {
    event.preventDefault();
    var data = {
        "Ymu": $("#DDL1").val(),
        "Yd": $("#DDL2").val(),
        "Sigmau": $("#value_1").val(),
        "Sigmay": $("#value_2").val(),
        "Yfp": $("#value_3").val(),
        "p": $("#value_4").val(),
        "D": $("#value_5").val()
    };

    $.ajax({
        url: "/Compute",
        type: "POST",
        data: data,
        success: function(result) {
            $(".answer").append("<p>" + result.Message + "</p>");
        },
        error: function(result) {
            alert("Oh no :(");
        }
    });
});

function get_shit() {
    console.log($("#DDL1").val() + " " + $("#DDL2").val());
    if ($("#DDL2").val() == "Низкое") {
        switch ($("#DDL1").val()) {
        case "H":
            return "0,82";
        case "C":
            return "0,767";
        case "B":
            return "0,637";
        }
    } else {
        switch ($("#DDL1").val()) {
        case "H":
            return "0,767";
        case "C":
            return "0,637";
        case "B":
            return "0,51";
        }
    }
}

$("#btn2").click(function(event) {
    event.preventDefault();
    $.ajax({
        url: "/Another/Compute",
        type: "POST",
        data: {
            "Sigmay": $("#value_1").val(),
            "Yfp": $("#value_2").val(),
            "p": $("#value_3").val(),
            "D": $("#value_4").val(),
            "C": $("#value_5").val(),
            "Yds": get_shit()
        },
        success: function(result) {
            $(".answer").append("<p>" + result.Message + "</p>");
        },
        error: function(result) {
            alert("Oh no :(");
        }
    });
});