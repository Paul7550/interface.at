let username = [];
let password = [];
let email = [];
let usercount = 0;
let userx;
let userdes = [];
let usercolor = [];
let followedlist = [];
let followedlistx = [];
let imgurl = [];
var logdin = getCookie("logdinuser");
function load() {
  //imgurl = JSON.parse(getCookie("imglist"));
  userx = getCookie("userX");
  username = JSON.parse(getCookie("usernames"));
  email = JSON.parse(getCookie("emails"));
  usercount = parseInt(getCookie("usercount"));
  password = JSON.parse(getCookie("passwords"));
  userdes = JSON.parse(getCookie("Userdes"));
  usercolor = JSON.parse(getCookie("Usercolor"));

  if (userx == logdin) {
    document.getElementById("editprofilebutton").hidden = false;
    document.getElementById("contact").hidden = true;
  }
  show();
}
function edit() {
  document.getElementById("editdes").hidden = false;
  document.getElementById("backroundcolor").hidden = false;
}
function follow() {
  followedlist[followedlist.length] = username[userx];
  let safefollowed = JSON.stringify(followedlist);
  setCookie(`folowedlist${logdin}`, safefollowed);
}
function img() {
  imgurl[logdin] = document.getElementById("url").value;
  let saveimg = JSON.stringify(imgurl);
  setCookie(`imglist${logdin}`, saveimg);
  show();
}
function savecolor() {
  usercolor[logdin] = document.getElementById("backround").value;
  let safeusercolor = JSON.stringify(usercolor);
  setCookie("Usercolor", safeusercolor);
  document.getElementById("backroundcolor").hidden = true;
  document.getElementById("profile").style.backgroundColor = usercolor[logdin];
  show();
}
function show() {
  document.getElementById("profile").style.backgroundColor = usercolor[userx];
  document.getElementById("username").innerHTML = username[userx];
  document.getElementById("des").innerHTML = userdes[userx];
  document.getElementById("followedcounter").innerHTML = followedlistx[userx];
  document.getElementById("profileimg").src = imgurl[userx];
}
function savedes() {
  userdes[logdin] = document.getElementById("inputdes").value;
  let safeuserdes = JSON.stringify(userdes);
  setCookie("Userdes", safeuserdes);
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
