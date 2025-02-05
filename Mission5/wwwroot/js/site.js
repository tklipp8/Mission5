//Lloyd Klippel
// A function that calculates the total cost of turtoring (hours * rate) using jquery while checking to see if the number is negative
$(document).ready(function () {
    $("#calculate").click(function () {
        //Get's how many hours were inputted from the calculator web page
        var hours = $("#hours").val();
        //Hard coded rate because the rate will not change, and I don't want the user to enter their own
        var rate = 5;
        var total = hours * rate;
        //Checks if the number is positive
        if (hours < 0 || rate < 0) {
            alert("Please enter a positive number");
        }
        else {
            $("#cost").val(total);
        }
    });
});
