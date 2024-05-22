var logdin = getCookie("logdinuser");
let followedlistuser = [];
let userx = logdin - 1;
let count;
followedlistuser = JSON.parse(getCookie(`followedlist${userx}`));
function load() {
  if (logdin != "") {
    document.getElementById("logout").hidden = false;
    document.getElementById("login").hidden = true;
    document.getElementById("userx").hidden = false;
  } else {
    document.getElementById("logout").hidden = true;
    document.getElementById("login").hidden = false;
    document.getElementById("userx").hidden = true;
  }
  if (followedlistuser.length > 0) {
    document.getElementById("noFriends").hidden = true;
  }
}
function friends() {
  for (i = 0; i < followedlistuser.length; i++) {
    const link = document.createElement("a");
    const img = document.createElement("img");
    link.id = "link";
    img.classList.add("profilepic");
    link.appendChild(img);
    link.addEventListener("click", (event) => {
      userX(followedlistuser[i]);
    });
    document.getElementById("profilenavbar").appendChild(link);
    document.getElementById("link").href = "userx.html";
  }
}
function userX(greeting) {
  setCookie("userX", greeting - 1);
}
function profile() {
  setCookie("userX", logdin - 1);
}
function logout() {
  logdin = "";
  document.getElementById("logout").hidden = true;
  setCookie("logdinuser", logdin);
  load();
}
function post() {
  const main = document.createElement("div");
  main.classList.add("post");
  main.classList.add("col-sm-12");
  const profilepicture = document.createElement("div");
  profilepicture.classList.add("profilepicture");
  const image = document.createElement("img");
  image.classList.add("image");
  const username = document.createElement("div");
  username.classList.add("username");
  const date = document.createElement("div");
  date.classList.add("date");
  const description = document.createElement("div");
  description.classList.add("description");
  profilepicture.appendChild(image);
  main.appendChild(profilepicture);
  username.appendChild(date);
  main.appendChild(username);
  main.appendChild(description);
  document.getElementById("posts").appendChild(main);
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
