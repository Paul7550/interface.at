let username = [];
let password = [];
let email = [];
let usercount = 0;
var safeusername;
var safeemail;
function load() {
  username = JSON.parse(getCookie("usernames"));
  email = JSON.parse(getCookie("emails"));
  usercount = parseInt(getCookie("usercount"));
  password = JSON.parse(getCookie("passwords"));
}
function cancel() {
  document.getElementById("notmatch").hidden = true;
}
function login() {
  for (i = 0; i <= usercount; i++) {
    if (
      document.getElementById("email").value == email[i] &&
      document.getElementById("password").value == password[i]
    ) {
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("link").href = "index.html";
      setCookie("logdinuser", i);
    }
  }
  if (getCookie("logdinuser") == "") {
    document.getElementById("notmatch").hidden = false;
  }
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
