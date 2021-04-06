$(document).ready(function () {

    $("button").click(function () {

        var item = $("#in1").val();
        if (item == "") {
            alert("Enter task details!!");
        }
        else {
            $("#res").append(item+"<br />");
        }


    });

});