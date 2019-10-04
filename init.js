//Init.js v905
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
        document.getElementById("done-text").innerHTML = this.CountdownFinishedString;
        window.document.title = this.CountdownNameString + " - FerieCountdown";
    }
}

//Generate background object
class Background {
    //Constructor
    constructor(Type, Data, SetCCCText) {
        this.Type = Type;
        this.Data = Data;
        this.SetCCCText = SetCCCText;
    }

    //Method for applying background
    SetBg() {
        if (this.Type == "static") {
            this.SetStatic(this.Data);
        }
        else if (this.Type == "staticcssbody") {
            document.getElementsByTagName("head")[0].innerHTML += "<style>" + this.Data[1] + "</style>";
            document.getElementsByTagName("body")[0].innerHTML += this.Data[2];
            this.SetStatic(this.Data[0])
        }
        if (this.SetCCCText) {
            document.getElementById("above-text").style.color = "#ccc";
            document.getElementById("done-text").style.color = "#ccc";
            document.getElementById("optionsbuttonfa").style.color = "#ccc";
            document.getElementById("mycdsbuttonfa").style.color = "#ccc";
            document.getElementsByTagName("head")[0].innerHTML += "<style>.flip-clock-label{color:#ccc!important}</style>";
        }
    }

    SetStatic(url) {
        var b = document.getElementsByTagName("body")[0];
        b.style.backgroundImage = "url(" + url + ")";
        b.style.backgroundPosition = "center";
        b.style.backgroundRepeat = "no-repeat";
        b.style.backgroundAttachment = "fixed";
    }
}

//Generate holiday objects
let holidays = [
new Holiday(new Date("Oct 4, 2019 11:15:00 UTC"), "Nedtelling til høstferien", "Høstferie nå!", new Background("static", "https://static.feriecountdown.com/resources/background/a19/static.jpg", true), null), 
new Holiday(new Date("Dec 21, 2019 09:25:00 UTC"), "Nedtelling til juleferien", "Juleferie nå!", new Background("static", "https://static.feriecountdown.com/resources/background/c19/static.jpg", false), new Background("staticcssbody", ["https://static.feriecountdown.com/resources/background/c19/static.jpg", ".snow-container{position:absolute;height:80%;width:100%;max-width:100%;top:0;overflow:hidden;z-index:2;pointer-events:none}.snow{display:block;position:absolute;z-index:2;top:0;right:0;bottom:0;left:0;pointer-events:none;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);-webkit-animation:snow linear infinite;animation:snow linear infinite}.snow.foreground{background-image:url(https://static.feriecountdown.com/resources/snow/snow-large.png);-webkit-animation-duration:15s;animation-duration:15s}.snow.foreground.layered{-webkit-animation-delay:7.5s;animation-delay:7.5s}.snow.middleground{background-image:image-url(https://static.feriecountdown.com/resources/snow/snow-medium.png);-webkit-animation-duration:20s;animation-duration:20s}.snow.middleground.layered{-webkit-animation-delay:10s;animation-delay:10s}.snow.background{background-image:image-url(https://static.feriecountdown.com/resources/snow/snow-small.png);-webkit-animation-duration:30s;animation-duration:30s}.snow.background.layered{-webkit-animation-delay:15s;animation-delay:15s}@-webkit-keyframes snow{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{-webkit-transform:translate3d(15%,100%,0);transform:translate3d(15%,100%,0)}}@keyframes snow{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{-webkit-transform:translate3d(15%,100%,0);transform:translate3d(15%,100%,0)}}",'<div class="snow-container"><div class="snow foreground"></div><div class="snow foreground layered"></div><div class="snow middleground"></div><div class="snow middleground layered"></div><div class="snow background"></div><div class="snow background layered"></div></div>'], false)),
new Holiday(new Date("Feb 21, 2020 12:15:00 UTC"), "Nedtelling til vinterferien", "Vinterferie nå!", new Background("static", "https://static.feriecountdown.com/resources/background/w20/static.jpg", false), new Background("staticcssbody", ["https://static.feriecountdown.com/resources/background/w20/animbg.jpg", ".snow-container{position:absolute;height:80%;width:100%;max-width:100%;top:0;overflow:hidden;z-index:2;pointer-events:none}.snow{display:block;position:absolute;z-index:2;top:0;right:0;bottom:0;left:0;pointer-events:none;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);-webkit-animation:snow linear infinite;animation:snow linear infinite}.snow.foreground{background-image:url(https://static.feriecountdown.com/resources/snow/snow-large.png);-webkit-animation-duration:15s;animation-duration:15s}.snow.foreground.layered{-webkit-animation-delay:7.5s;animation-delay:7.5s}.snow.middleground{background-image:image-url(https://static.feriecountdown.com/resources/snow/snow-medium.png);-webkit-animation-duration:20s;animation-duration:20s}.snow.middleground.layered{-webkit-animation-delay:10s;animation-delay:10s}.snow.background{background-image:image-url(https://static.feriecountdown.com/resources/snow/snow-small.png);-webkit-animation-duration:30s;animation-duration:30s}.snow.background.layered{-webkit-animation-delay:15s;animation-delay:15s}@-webkit-keyframes snow{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{-webkit-transform:translate3d(15%,100%,0);transform:translate3d(15%,100%,0)}}@keyframes snow{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{-webkit-transform:translate3d(15%,100%,0);transform:translate3d(15%,100%,0)}}",'<div class="snow-container"><div class="snow foreground"></div><div class="snow foreground layered"></div><div class="snow middleground"></div><div class="snow middleground layered"></div><div class="snow background"></div><div class="snow background layered"></div></div>'], false)),
new Holiday(new Date("Apr 3, 2020 11:15:00 UTC"), "Nedtelling til påskeferien", "Påskeferie nå!", new Background("static", "https://static.feriecountdown.com/resources/background/e20/static.jpg", false), null),
new Holiday(new Date("Jun 19, 2020 08:25:00 UTC"), "Nedtelling til sommerferien", "Sommerferie nå!", new Background("static", "https://static.feriecountdown.com/resources/background/s20/static.jpg", false), null),
new Holiday(new Date("Oct 2, 2020 11:15:00 UTC"), "Nedtelling til høstferien", "Høstferie nå!", new Background("static", "https://static.feriecountdown.com/resources/background/a19/static.jpg", true), null)
];

/*
 * Autumn, winter and summer image (c) Odd Skjæveland
 * Animated snow css by Justin Patrick Schwinghamer on Codepen https://codepen.io/jpschwinghamer/pen/QwwbgO
 * Classroom by archideaphoto on Adobe stock
 * Fireworks by totojang1977 on Adobe Stock
 * Birthday Cake by Studio Romantic on Adobe Stock
 * Christmas Tree by Mari79 on Adobe Stock
 * Easter Image by Romolo Tavani on Adobe Stock
 */

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

//get next weekend
function getWeekend() {
    let today = new Date();
    let day = today.getDay();
    switch (day) {
        case 0:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate()-2, 13, 15);
        case 1:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate()+4, 13, 15);
        case 2:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate()+3, 13, 15);
        case 3:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate()+2, 13, 15);
        case 4:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate()+1, 13, 15);
        case 5:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 15);
        case 6:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate()-1, 13, 15);
    }
}

//get weekday end
function getDayEnd() {
    let today = new Date();
    let day = today.getDay();
    switch (day) {
        case 1:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 20);
        case 2:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 15);
        case 3:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 20);
        case 4:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 20);
        case 5:
            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 15);
        default:
            return 0;
    }
}

//generate dayend Holiday object
function getDayEndObj() {
    let de = getDayEnd();
    if (de != 0) {
        return new Holiday(de, "Skoledagen slutter om:", "Skoledagen er slutt!", new Background("static", "https://static.feriecountdown.com/resources/background/de/static.jpg", false), null);
    }
    else {
        return new Holiday(new Date(0), null, "Nå er det helg!", new Background("static", "https://static.feriecountdown.com/resources/background/de/static.jpg", false), null);
    }
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

    //Set default variables
    let scale = 2.5;
    let face = 'DailyCounter';

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
            case "a20":
                hdarrayindex = 5;
                break;      
        }
        selholiday = holidays[hdarrayindex];
    }

    //Check if a custom type has been provided
    if (urlParams.has("type")) {
        var hd = selholiday;
        switch (urlParams.get("type")) {
            case "Nyttår":
            case "newyear":
                hd = new Holiday(bdayValiDATE(new Date("Jan 1, 2020 00:00:00").getTime()), "Nedtelling til nyttår", "2020 nå!", new Background("static", "https://static.feriecountdown.com/resources/background/ny/static.png", true), null);
                break;  
            case "Bursdag":
            case "birthday":
                if (urlParams.has("personname") && urlParams.has("date")) {
                    let names = urlParams.get("personname");
                    if (names.charAt(names.length-1).toLowerCase() != "s") {
                        names += "s"
                    }
                    hd = new Holiday(bdayValiDATE(new Date(urlParams.get("date")).getTime()), "Nedtelling til " + names +" bursdag", "Gratulerer med dagen, " + urlParams.get("personname") + "!", new Background("static", "https://static.feriecountdown.com/resources/background/bd/static.jpg", false), null);
                }
                break;
            case "dayend":
                hd = getDayEndObj();
                break;
            case "weekend":
                hd = new Holiday(getWeekend(), "Nedtelling til helg", "Helg nå!", new Background("static", "https://static.feriecountdown.com/resources/background/de/static.jpg", false), null);
                break;
            case "nationalday":
                hd = new Holiday(bdayValiDATE(new Date("May 17, 2020 00:00:00 +0200").getTime()), "Nedtelling til 17. mai", "17. mai nå!", new Background("static", "https://static.feriecountdown.com/resources/background/17may.jpg", true), null);
                break;
            case "halloween":
                hd = new Holiday(bdayValiDATE(new Date("2019-10-31T00:00").getTime()), "Nedtelling til halloween", "Halloween i dag!", new Background("static", "https://static.feriecountdown.com/resources/background/hw/halloween.jpg", true), null);
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
        case "custom": 
            if (urlParams.has("url")) {
                let cbg = new Background("static", urlParams.get("url"), urlParams.has("ccc"));
                cbg.SetBg();
            }
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

    //Check if countdown is less than 24 hrs
    if (diff < 24 * 60**2) {
        scale = 3.5;
        face = "HourlyCounter";
    }

    //Display a message when the countdown has finished
    if (diff <= 0) {
        document.getElementById("main-container").style.display = "none";
        document.getElementById("done-container").style.display = "initial";
    }
    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: face,
        countdown: true,
        language: 'no',
        responsiveScale: scale,
        stop: function() {
            document.getElementById("main-container").style.display = "none";
            document.getElementById("done-container").style.display = "initial";
        },
    });
});