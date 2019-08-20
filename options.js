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
            v.innerHTML = '<input type="radio" name="holiday" value="auto" checked> Auto<br><input type="radio" name="holiday" value="a19"> Høstferie 2019<br><input type="radio" name="holiday" value="c19"> Juleferie 2019<br><input type="radio" name="holiday" value="w20"> Vinterferie 2020<br><input type="radio" name="holiday" value="e20"> Påskeferie 2020<br><input type="radio" name="holiday" value="s20"> Sommerferie 2020';
            break;
        case 1:
            v.innerHTML = "";
            break;
        case 2:
            v.innerHTML = '<input type="type" name="personname" placeholder="Navn på person med bursdag" style="width: 200px"><br>Bursdagsdato:<br><input type="date" name="date" style="width: 200px">';
            break;
    }
}
