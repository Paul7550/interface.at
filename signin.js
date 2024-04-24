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
}
function signin() {
  for (i = 0; i <= usercount; i++) {
    if (document.getElementById("email").value == email[i]) {
      document.getElementById("alert").hidden = false;
      return;
    }
  }
  createacc();
}
function createacc() {
  if (
    document.getElementById("cfmpassword").value ==
    document.getElementById("password").value
  ) {
    email[usercount] = document.getElementById("email").value;
    username[usercount] = document.getElementById("username").value;
    password[usercount] = document.getElementById("password").value;
    usercount++;
    setCookie("usercount", usercount);
    setCookie("logdin", usercount);
    document.getElementById("link").href = "index.html";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    setCookie("logdinuser", usercount);
    store();
  } else {
    document.getElementById("passwordnotmatch").innerHTML =
      "Die Passwörter stimmen nicht überein";
  }
  document.getElementById("cfmpassword").value = "";
  document.getElementById("password").value = "";
  document.getElementById("passwordnotmatch").innerHTML = "";
}
function store() {
  XMLDocument;
  safeusername = JSON.stringify(username);
  safeemail = JSON.stringify(email);
  setCookie("emails", safeemail);
  setCookie("usernames", safeusername);
}
function cancel() {
  document.getElementById("alert").hidden = true;
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
