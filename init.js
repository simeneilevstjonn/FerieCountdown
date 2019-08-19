//Generate a holiday class
class Holiday {
    //Constructor
    constructor(DateTime, CountdownNameString, CountdownFinishedString) {
        this.DateTime = DateTime;
        this.CountdownNameString = CountdownNameString;
        this.CountdownFinishedString = CountdownFinishedString;
    }

    //Method for printing strings
    PrintStrings() {
        document.getElementById("above-text").innerHTML = this.CountdownNameString;
        document.getElementById("done-container").innerHTML = this.CountdownFinishedString;
    }
}

//Generate holiday objects
let holidays = [
new Holiday(new Date("Oct 4, 2019 13:15:00"), "Nedtelling til høstferien", "Høstferie nå!"), 
new Holiday(new Date("Dec 21, 2019 10:25:00"), "Nedtelling til juleferien", "Juleferie nå!"),
new Holiday(new Date("Feb 21, 2020 13:15:00"), "Nedtelling til vinterferien", "Vinterferie nå!"),
new Holiday(new Date("Apr 3, 2020 13:15:00"), "Nedtelling til påskeferien", "Påskeferie nå!"),
new Holiday(new Date("Jun 19, 2020 10:25:00"), "Nedtelling til sommerferien", "Sommerferie nå!")
];

function findClosestHoliday() {
    let selected;
    var lowestdistance = Infinity;
    var currentDate = new Date();
    holidays.forEach(function(holiday) {
        var distance = holiday.DateTime.getTime() - currentDate.getTime();
        if (distance < lowestdistance && distance > 24 * 60 * 60 * 1000 * -1) {
            lowestdistance = distance;
            selected = holiday;
        }
    });
    return selected
}



//Init the clock
var clock;
$(document).ready(function() {

    // Grab the current date
    var currentDate = new Date();

    //Select a holiday 
    var selholiday = findClosestHoliday();

    //Check if query string auto holiday override has been provided
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("holiday")) {
        var hdarrayindex;
        switch (urlParams.get("holiday")) {
            case "a19":
                hdarrayindex = 0;
                break;
            case "c19":
                hdarrayindex = 1;
                break;
            case "w20":
                hdarrayindex = 2;
                break;
            case "e20":
                hdarrayindex = 3;
                break;
            case "s20":
                hdarrayindex = 4;
                break;    
        }
        selholiday = holidays[hdarrayindex];
    }


    // Setup countdown using selected holiday
    var futureDate = selholiday.DateTime;
    selholiday.PrintStrings();

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
        responsiveScale: 2.5,
        stop: function() {
            document.getElementById("main-container").style.display = "none";
            document.getElementById("done-container").style.display = "initial";
        },
    });
});


