$(function() {
    function runEffect() {
        $("#effect").toggle({ percent: 50 }, 500);
    };
    $("#button").on("click", function() {
        runEffect();
    });
    $("#effect").hide();
    $("#kom").on("click", function() {
        var kom = prompt("Ostavite Vas komentar");
        if (kom != null) {
            document.getElementById("demo").innerHTML =
                alert("Hvala na komentaru! :)");
        }
    });
});