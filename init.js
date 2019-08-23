//Init.js V 23.08.19-1
//Author: Simen Eilevstjønn
//Generate a holiday class
class Holiday {
    //Constructor
    constructor(DateTime, CountdownNameString, CountdownFinishedString, StaticBg, AnimatedBg) {
        this.DateTime = DateTime;
        this.CountdownNameString = CountdownNameString;
        this.CountdownFinishedString = CountdownFinishedString;
        this.StaticBg = StaticBg;
        this.AnimatedBg = AnimatedBg;
    }

    //Method for printing strings
    PrintStrings() {
        document.getElementById("above-text").innerHTML = this.CountdownNameString;
        document.getElementById("done-container").innerHTML = this.CountdownFinishedString;
        window.document.title = this.CountdownNameString + " - FerieCountdown";
    }
}

//Generate background object
class Background {
    //Constructor
    constructor(Type, Url, SetCCCText) {
        this.Type = Type;
        this.Url = Url;
        this.SetCCCText = SetCCCText;
    }

    //Method for applying background
    SetBg() {
        if (this.Type == "static") {
            var b = document.getElementsByTagName("body")[0];
            b.style.backgroundImage = "url(" + this.Url + ")";
            b.style.backgroundPosition = "center";
            b.style.backgroundRepeat = "no-repeat";
            b.style.backgroundAttachment = "fixed";
        }
        if (this.SetCCCText) {
            document.getElementById("above-text").style.color = "#ccc";
            document.getElementById("done-container").style.color = "#ccc";
            document.getElementById("optionsbuttonfa").style.color = "#ccc";
            document.getElementsByTagName("head")[0].innerHTML += "<style>.flip-clock-label{color:#ccc!important}</style>";
        }
    }
}

//Generate holiday objects
let holidays = [
new Holiday(new Date("Oct 4, 2019 13:15:00"), "Nedtelling til høstferien", "Høstferie nå!", new Background("static", "https://static.feriecountdown.com/resources/background/a19/static.jpg", true), new Background("static", "https://static.feriecountdown.com/resources/background/a19/static.jpg", true)), 
new Holiday(new Date("Dec 21, 2019 10:25:00"), "Nedtelling til juleferien", "Juleferie nå!", null, null),
new Holiday(new Date("Feb 21, 2020 13:15:00"), "Nedtelling til vinterferien", "Vinterferie nå!", null, null),
new Holiday(new Date("Apr 3, 2020 13:15:00"), "Nedtelling til påskeferien", "Påskeferie nå!", null, null),
new Holiday(new Date("Jun 19, 2020 10:25:00"), "Nedtelling til sommerferien", "Sommerferie nå!", null, null)
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

//birthday validation
function bdayValiDATE(dateparam) {
    let now = new Date();
    let date = new Date(dateparam);
    if (date.getTime() + 24 * 60 * 60 * 1000 > now.getTime()) {
        return date;
    }
    else {
        let y = date.getFullYear() + 1;
        let ny = now.getFullYear();
        if (y < ny) {
            return bdayValiDATE(date.setFullYear(ny));
        }
        else {
            return bdayValiDATE(date.setFullYear(y));
        }
    }
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
    if (urlParams.has("holiday") && urlParams.get("holiday") != "auto") {
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

    //Check if a custom type has been provided
    if (urlParams.has("type")) {
        var hd = selholiday;
        switch (urlParams.get("type")) {
            case "Nyttår":
                hd = new Holiday(new Date("Jan 1, 2020 00:00:00"), "Nedtelling til nyttår", "2020 nå!", null, null);
                break;  
            case "Bursdag":
                if (urlParams.has("personname") && urlParams.has("date")) {
                    hd = new Holiday(bdayValiDATE(new Date(urlParams.get("date")).getTime()), "Nedtelling til " + urlParams.get("personname") +"s bursdag", "Gratulerer med dagen, " + urlParams.get("personname") + "!", null, null);
                }
                break;
        }
        selholiday = hd;
    }


    //Check if a background ovveride has been provided
    var bgtype = null;
    if (urlParams.has("bg")) {
        bgtype = urlParams.get("bg");
    }
    switch (bgtype) {
        case "static":
            if (selholiday.StaticBg != null) {
                selholiday.StaticBg.SetBg()
            }
            break;
        case "plain":
            break;
        default:
            if (selholiday.AnimatedBg != null) {
                selholiday.AnimatedBg.SetBg()
            }
            else if (selholiday.StaticBg != null) {
                selholiday.StaticBg.SetBg()
            }
            break;
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


