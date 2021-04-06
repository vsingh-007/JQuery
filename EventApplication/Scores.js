$(document).ready(function () {
    
    function calculateSum() {
        var sum = 0
        $("input").each(function () {
            if ($(this).val()!="")
                sum += parseFloat($(this).val())
        })
        $("#sum").text(sum.toFixed(2))
    }
    $("input").keyup(function () {
        
        calculateSum();

    });

});