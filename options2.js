//Set options to current setting
var urlParams = new URLSearchParams(window.location.search);

function setOpts() {
    if (urlParams.has("type")) {
        document.getElementById("typeSelect").value = urlParams.get("type");
        SetVariableForm(document.getElementById("typeSelect").selectedIndex);
    }
    if (urlParams.has("bg")) {
        document.getElementById("bgSelect").value = urlParams.get("bg");
    }
    if (urlParams.has("holiday")) {
        document.getElementById("holidaySelect").value = urlParams.get("holiday");
    }
    else if (document.getElementById("typeSelect").selectedIndex == 0) {
        document.getElementById("holidaySelect").selectedIndex = 0;
    }
    if (urlParams.has("personname") && urlParams.has("date")) {
        document.getElementById("personname").value = urlParams.get("personname");
        document.getElementById("dateselector").value = urlParams.get("date");
    }
}

function ToggleOptions() {
    setOpts();
    var o = document.getElementById("options");
    var fa = document.getElementById("optionsbuttonfa");
    if (o.style.display == "none") {
        o.style.display = "block";
        fa.className = "fas fa-angle-down";
    }
    else {
        o.style.display = "none";
        fa.className = "fas fa-angle-up";
    }
}

function SetVariableForm(type) {
    var v = document.getElementById("variables");
    switch (type) {
        case 0:
            v.innerHTML = '<div class="form-group"><label for="holidaySelect">Ferie</label><select class="form-control" id="holidaySelect" name="holiday"><option value="auto" selected>Auto</option><option value="a19">Høstferie 2019</option><option value="c19">Juleferie 2019</option><option value="w20">Vinterferie 2020</option><option value="e20">Påskeferie 2020</option><option value="s20">Sommerferie 2020</option></select></div>';
            break;
        case 4:
            v.innerHTML = '<div class="form-group"><label for="personname">Navn på person med bursdag</label><input class="form-control" type="text" name="personname" id="personname" placeholder="Ola Nordmann" required></div><div class="form-group"><label for="dateselector">Bursdagsdato</label><input class="form-control" type="date" name="date" id="dateselector" required></div>';
            break;
        default:
            v.innerHTML = "";
            break;
    }
}

function sender() {
    //Check if values are default
    if (document.getElementById("typeSelect").value == "holiday") {
        document.getElementById("typeSelect").remove();
    }
    try {
        if (document.getElementById("holidaySelect").value == "auto") {
            document.getElementById("holidaySelect").remove();
        }
    }
    catch {}
    if (document.getElementById("bgSelect").value == "animated") {
        document.getElementById("bgSelect").remove();
    }
    document.getElementById("optionsform").submit();
}