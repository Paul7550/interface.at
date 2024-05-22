let username = [];
let password = [];
let email = [];
let usercount = 0;
var safeusername;
var safeemail;
var safepassword;
let searchuser;
let userx = 0;
let displayuser = [];
function load() {
  username = JSON.parse(getCookie("usernames"));
  email = JSON.parse(getCookie("emails"));
  usercount = parseInt(getCookie("usercount"));
  password = JSON.parse(getCookie("passwords"));
  var input = document.getElementById("suche");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search").click();
    }
  });
}
function search() {
  document.getElementById("userX").replaceChildren();
  searchuser = document.getElementById("suche").value;
  let count = 0;
  for (i = 0; i < usercount; i++) {
    if (username[i].includes(searchuser)) {
      displayuser[count] = username[i];
      count++;
      document.getElementById("userX").hidden = false;
      const node = document.createElement("div");
      const link = document.createElement("a");
      const name = document.createElement("span");
      link.id = `link${count}`;
      node.appendChild(link);
      name.id = `name${count}`;
      link.appendChild(name);
      let countX = i;
      node.addEventListener("click", (event) => {
        userX(countX);
      });
      document.getElementById("userX").appendChild(node);
      document.getElementById(`name${count}`).innerHTML = username[i];
      document.getElementById(`link${count}`).href = "../public/userx.html";
    }
  }
}

function userX(greeting) {
  setCookie("userX", greeting);
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
