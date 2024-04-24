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
    usercount++;
    email[usercount] = document.getElementById("email").value;
    username[usercount] = document.getElementById("username").value;
    password[usercount] = document.getElementById("password").value;
    setCookie("usercount", usercount);
    setCookie("logdin", usercount);
    //document.getElementById("link").href = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
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
