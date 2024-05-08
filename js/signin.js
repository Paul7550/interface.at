let username = [];
let password = [];
let email = [];
let usercount = 0;
var safeusername;
var safeemail;
var safepassword;
var userx;

function load() {
  username = JSON.parse(getCookie("usernames"));
  email = JSON.parse(getCookie("emails"));
  usercount = parseInt(getCookie("usercount"));
  password = JSON.parse(getCookie("passwords"));
}
function signin() {
  for (i = 0; i <= usercount; i++) {
    if (document.getElementById("email").value == email[i]) {
      document.getElementById("alert").hidden = false;
      return;
    }
  }

  let result = document.getElementById("email").value.includes("@");
  if (result == true) {
    createacc();
  } else {
    document.getElementById("!email").hidden = false;
    document.getElementById("email").value = "";
  }
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
    document.getElementById("link").href = "index.html";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    setCookie("logdinuser", usercount);
    store();
  } else if (
    document.getElementById("cfmpassword").value !=
    document.getElementById("password").value
  ) {
    document.getElementById("!cfmpassword").hidden = false;
  }
  document.getElementById("cfmpassword").value = "";
  document.getElementById("password").value = "";
  document.getElementById("passwordnotmatch").innerHTML = "";
}
function store() {
  XMLDocument;
  safeusername = JSON.stringify(username);
  safeemail = JSON.stringify(email);
  safepassword = JSON.stringify(password);
  setCookie("userdes", JSON.stringify([]));
  setCookie("usercolor", JSON.stringify([]));
  setCookie("imglist", JSON.stringify([]));
  //setCookie(`followedlist${userx}`, JSON.stringify([]));
  setCookie("emails", safeemail);
  setCookie("usernames", safeusername);
  setCookie("passwords", safepassword);
}
function cancel() {
  document.getElementById("alert").hidden = true;
  document.getElementById("!cfmpassword").hidden = true;
  document.getElementById("!email").hidden = true;
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
