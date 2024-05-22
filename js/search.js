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

var input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
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
      const node = document.createElement("div");
      const link = document.createElement("a");
      const name = document.createElement("span");
      link.id = `link${count}`;
      node.appendChild(link);
      name.id = `name${count}`;
      node.addEventListener("click", (event) => {
        userX(count);
      });
      link.appendChild(name);
      document.getElementById("userX").appendChild(node);
      document.getElementById(`name${count}`).innerHTML = username[i];
      document.getElementById(`link${count}`).href = "../public/userx.html";
    }
  }
}

function userX(greeting) {
  setCookie("userX", greeting - 1);
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
