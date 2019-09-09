function ToggleOptions() {
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
            v.innerHTML = '<div class="form-group"><label for="personname">Navn på person med bursdag</label><input class="form-control" type="text" name="personname" id="personname" placeholder="Ola Nordmann"></div><div class="form-group"><label for="dateselector">Bursdagsdato</label><input class="form-control" type="date" name="date" id="dateselector"></div>';
            break;
        default:
            v.innerHTML = "";
            break;
    }
}