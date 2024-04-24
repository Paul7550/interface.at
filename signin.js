const username = [];
const password = [];
const email = [];
let usercount = 0;
var safeusername;
var safeemail;
safeusername = getCookie("usernames");
username = JSON.stringify(safeusername);
safeemail = getCookie("emails");
email = JSON.stringify(safeemail);
function signin() {
  for (i = 0; i <= usercount; i++) {
    if (document.getElementById("email").value == email[i]) {
      document.getElementById("emailinuse").innerHTML =
        "diese Email wurde bereits verwendet";
      return;
    }
  }

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
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
  };
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
