let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let imgurl = JSON.parse(getCookie("imglist"));
let name = JSON.parse(getCookie("usernames"));
var user = getCookie("logdinuser") - 1;
btn.onclick = function () {
    sidebar.classList.toggle("active");
};
function load() {
    if (imgurl[user] != undefined || imgurl[user] != null) {
        document.getElementById(`navimg`).src = imgurl[user];
    } else {
        document.getElementById(`navimg`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24 (1).png ";
    }
    document.getElementById("usernamenav").innerHTML = name[user];
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
