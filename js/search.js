let username = [];
let password = [];
let email = [];
let usercount = 0;
var safeusername;
var safeemail;
var safepassword;
let searchuser;
let userx = 0;
let count = 0;
let displayuser = [];
function load() {
  username = JSON.parse(getCookie("usernames"));
  email = JSON.parse(getCookie("emails"));
  usercount = parseInt(getCookie("usercount"));
  password = JSON.parse(getCookie("passwords"));
}

function search() {
  searchuser = document.getElementById("suche").value;
  for (i = 0; i < usercount; i++) {
    if (username[i].includes(searchuser) == true) {
      displayuser[count] = username[i];
      count++;
      document.getElementById("userX").hidden = false;
      document.getElementById(`name${count}`).innerHTML = username[i];
      document.getElementById(`link${count}`).href = "../public/userx.html";
    }
  }
}

function userX(greeting) {
  switch (displayuser[greeting]) {
    case displayuser[0]:
      setCookie("userX", 0);
      break;
    case displayuser[1]:
      setCookie("userX", 1);
      break;
    case displayuser[2]:
      setCookie("userX", 2);
      break;
    case displayuser[3]:
      setCookie("userX", 3);
      break;
    case displayuser[4]:
      setCookie("userX", 4);
      break;
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
