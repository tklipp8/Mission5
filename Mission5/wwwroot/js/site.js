// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// A function that calculates the total cost of turtoring (hours * rate) using jquery while checking to see if the number is negative
$(document).ready(function () {
    $("#calculate").click(function () {
        var hours = $("#hours").val();
        var rate = 5;
        var total = hours * rate;
        if (hours < 0 || rate < 0) {
            alert("Please enter a positive number");
        }
        else {
            $("#cost").val(total);
        }
    });
});
