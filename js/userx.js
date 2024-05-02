let username = [];
let password = [];
let email = [];
let usercount = 0;
let userx;
var logdin = getCookie("logdinuser");
function load() {
  userx = getCookie("userX");
  username = JSON.parse(getCookie("usernames"));
  email = JSON.parse(getCookie("emails"));
  usercount = parseInt(getCookie("usercount"));
  password = JSON.parse(getCookie("passwords"));
  show();
}
function show() {
  document.getElementById("username").innerHTML = username[userx];
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
