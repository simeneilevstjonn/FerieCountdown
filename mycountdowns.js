function ToggleMyCDS() {
    var m = document.getElementById("mycds");
    var fa = document.getElementById("mycdsbuttonfa");
    if (m.style.display == "none") {
        RenderMyCDS();
        m.style.display = "block";
        fa.className = "fas fa-angle-left";
    }
    else {
        m.style.display = "none";
        fa.className = "fas fa-angle-right";
    }
}

class Countdown {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    }
}

function RenderMyCDS() {
    var n = document.getElementById("mcdtitle");
    n.value = document.title.replace(" - FerieCountdown", "");
    var cds = localStorage.getItem("mycds");
    var arr = JSON.parse(cds);
    var list = document.getElementById("mcdslist");
    list.innerHTML = "";
    if (arr != null) {
        var i = 0;
        arr.forEach(function(obj) {
            if (obj != null) {
                list.innerHTML += '<li><a href="' + obj.href + '">' + obj.name + '</a><a href="javascript:void(0)" onclick="DeleteMCD(' + i + ')" class="delbtn">&nbsp;<i class="fas fa-trash"></i></li>';
            }
            i++;
        });
    }
    else {
        list.innerHTML = "Du har ikke lagret en countdown enda";
    }
}

function AddMCD() {
    var n = document.getElementById("mcdtitle");
    var cds = localStorage.getItem("mycds");
    var arr = JSON.parse(cds);
    if (arr == null) {
        arr = new Array();
    }
    arr.push(new Countdown(n.value, document.location.href));
    localStorage.setItem("mycds", JSON.stringify(arr));
    RenderMyCDS();
}

function DeleteMCD(index) {
    var cds = localStorage.getItem("mycds");
    var arr = JSON.parse(cds);
    if (arr == null) {
        return
    }
    arr[index] = null;
    localStorage.setItem("mycds", JSON.stringify(arr));
    RenderMyCDS();
}
