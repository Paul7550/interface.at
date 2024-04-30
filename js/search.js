let username = [];
let password = [];
let email = [];
let usercount = 0;
var safeusername;
var safeemail;
var safepassword;
let searchuser;
let usernameX;
let count = 0;
function load() {
  username = JSON.parse(getCookie("usernames"));
  email = JSON.parse(getCookie("emails"));
  usercount = parseInt(getCookie("usercount"));
  password = JSON.parse(getCookie("passwords"));
}
function clear() {
  document.getElementById("userX").hidden = true;
}
function search() {
  searchuser = document.getElementById("suche").value;
  for (i = 0; i < usercount; i++) {
    if (username[i].includes(searchuser) == true) {
      count++;
      document.getElementById("userX").hidden = false;
      document.getElementById(`name${count}`).innerHTML = username[i];
    }
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
