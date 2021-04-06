$(document).ready(function () {

    $("#btn").click(function add_two_number() {
        var in1 = $("#in1").val();
        var in2 = $("#in2").val();
        if (in1 == "" || in2 == "") {
            $("div").css("color", "red");
            $("div").append("Pls.Enter the values");
        }
        else {
            $("div").css("color", "green");
            $("div").append(parseInt(in1) + parseInt(in2));
            $("#ans").val(parseInt(in1) + parseInt(in2));
        }

    });

});