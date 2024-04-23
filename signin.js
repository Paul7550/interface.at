const username = [];
const password = [];
const email = [];
let usercount = 0;
var safeusername;
function signin() {
  usercount = getCookie("usercount");
  if (!usercount) {
    usercount = 0;
  }
  for (i = 0; i <= usercount; i++) {
    if (document.getElementById("email").value == email[i]) {
      document.getElementById("").innerHTML =
        "diese Email wurde bereits verwendet"; //Name für bereits benutzter email
      return;
    }
  }

  if (
    document.getElementById("cfmpassword").value ==
    document.getElementById("password").value
  ) {
    usercount++;
    email[usercount] = document.getElementById("email");
    username[usercount] = document.getElementById("username").value;
    password[usercount] = document.getElementById("password").value;
    setCookie("usercount", usercount);
    setCookie("logdin", usercount);
    //document.getElementById("link").href = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
  } else {
    document.getElementById("").innerHTML = //hier namen für nicht gleiches passwort
      "Die Passwörter stimmen nicht überein";
  }
  document.getElementById("cfmpassword").value = "";
  document.getElementById("password").value = "";
  store();
}
function store() {
  XMLDocument;
  if (safeusername == undefined) {
    safeusername = String(username.join() + ",");
  } else {
    safeusername += String(username.join() + ",");
  }
  setCookie("usernames", safeusername);
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
