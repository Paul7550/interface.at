let username = [];
let password = [];
let email = [];
let usercount = 0;
let userx;
let userdes = [];
let usercolor = [];
let imgurl = [];
let followerlistx = [];
let followedlistuser = [];
var logdin = getCookie("logdinuser");
function load() {
    userx = getCookie("userX");
    followedlistuser = JSON.parse(getCookie(`followedlist${userx}`));
    followerlistx = JSON.parse(getCookie(`followerlist${userx}`));
    username = JSON.parse(getCookie("usernames"));
    email = JSON.parse(getCookie("emails"));
    usercount = parseInt(getCookie("usercount"));
    password = JSON.parse(getCookie("passwords"));
    usercolor = JSON.parse(getCookie("usercolor"));
    imgurl = JSON.parse(getCookie("imglist"));
    userdes = JSON.parse(getCookie("userdes"));
    userx++;
    if (userx == logdin) {
        document.getElementById("editprofilebutton").hidden = false;
        document.getElementById("contact").hidden = true;
    }
    userx--;
    show();
}
function edit() {
    document.getElementById("editdes").hidden = false;
    document.getElementById("backroundcolor").hidden = false;
    document.getElementById("url").hidden = false;
}
function img() {
    imgurl[userx] = document.getElementById("imgurl").value;
    let saveimg = JSON.stringify(imgurl);
    setCookie("imglist", saveimg);
    document.getElementById("imgurl").value = "";
    document.getElementById("url").hidden = true;
    show();
}
function clearimg() {
    imgurl[userx] = undefined;
    let saveimg = JSON.stringify(imgurl);
    setCookie("imglist", saveimg);
    document.getElementById("url").hidden = true;
    show();
}
function follow() {
    followerlistx[followerlistx.length] = userx;
    let safefollowerlistx = JSON.stringify(followerlistx);
    setCookie(`followerlist${userx}`, safefollowerlistx);
    followedlistuser[followedlistuser.length] = userx;
    let safefollowerlistuser = JSON.stringify(followedlistuser);
    setCookie(`followedlist${logdin - 1}`, safefollowerlistuser);
}
function savecolor() {
    usercolor[userx] = document.getElementById("backround").value;
    let safeusercolor = JSON.stringify(usercolor);
    setCookie("usercolor", safeusercolor);
    document.getElementById("backroundcolor").hidden = true;
    document.getElementById("profile").style.backgroundColor = usercolor[userx];
    show();
}
function show() {
    document.getElementById("profile").style.backgroundColor = usercolor[userx];
    document.getElementById("username").innerHTML = username[userx];
    if (userdes[userx] == undefined) {
        document.getElementById("des").innerHTML = "no Bio yet";
    } else {
        document.getElementById("des").innerHTML = userdes[userx];
    }
    if (imgurl[userx] != undefined) {
        document.getElementById("profileimg").src = imgurl[userx];
    } else {
        document.getElementById("profileimg").src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24.png";
    }
    document.getElementById("followercounter").innerHTML = followerlistx.length;
    document.getElementById("followedcounter").innerHTML = followedlistuser.length;
}

function savedes() {
    userdes[userx] = document.getElementById("inputdes").value;
    let safeuserdes = JSON.stringify(userdes);
    setCookie("userdes", safeuserdes);
    document.getElementById("editdes").hidden = true;
    show();
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
