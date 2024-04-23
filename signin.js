const username = [];
const password = [];
let usercount = 0;
var safeusername;
function signin() {
  for (i = 0; i <= usercount; i++) {
    if (
      document.getElementById("username") != username[i] &&
      document.getElementById("cfmpassword") ==
        document.getElementById("password")
    ) {
      username[usercount] = document.getElementById("username");
      password[usercount] = document.getElementById("passwort");
    }
  }
  store();
}
function store() {}
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
