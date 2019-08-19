//Init the clock
var clock;
$(document).ready(function() {

    // Grab the current date
    var currentDate = new Date();

    // Set some date in the future. høstferie
    var futureDate  = new Date("Oct 4, 2019 13:15:00");
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    //Display a message when the countdown has finished
    if (diff <= 0) {
        document.getElementById("main-container").style.display = "none";
        document.getElementById("done-container").style.display = "initial";
    }
    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'no',
        stop: function() {
            document.getElementById("main-container").style.display = "none";
            document.getElementById("done-container").style.display = "initial";
        },
    });
});
