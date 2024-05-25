let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let picurl = JSON.parse(getCookie("imglist"));
let names = JSON.parse(getCookie("usernames"));
var user = getCookie("logdinuser") - 1;
var logdinuser = getCookie("logdinuser");
btn.onclick = function () {
    sidebar.classList.toggle("active");
};
function loadnav() {
    if (logdinuser != "") {
        document.getElementById("logout").hidden = false;
        document.getElementById("login").hidden = true;
    } else {
        document.getElementById("logout").hidden = true;
        document.getElementById("login").hidden = false;
    }
    document.getElementById("usernamenav").innerHTML = names[user];
    if (picurl[user] != undefined || picurl[user] != null) {
        document.getElementById(`navimg`).src = picurl[user];
    } else {
        document.getElementById(`navimg`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24 (1).png ";
    }
    document.getElementById("usernamenav").innerHTML = names[user];
    load();
}
function profile() {
    setCookie("userX", logdin - 1);
}
function logout() {
    logdin = "";
    document.getElementById("logout").hidden = true;
    setCookie("logdinuser", logdin);
    load();
}
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
