var logdin = getCookie("logdinuser");
function load() {
  if (logdin != "") {
    document.getElementById("logout").hidden = false;
    document.getElementById("login").hidden = true;
    document.getElementById("userx").hidden = false;
  } else {
    document.getElementById("logout").hidden = true;
    document.getElementById("login").hidden = false;
  }
}
function profile() {
  logdin--;
  setCookie("userX", logdin);
}
function logout() {
  logdin = "";
  document.getElementById("logout").hidden = true;
  setCookie("logdinuser", logdin);
  load();
}
function post() {
  const node = document.createElement("div");
  node.classList.add("rechts");
  document.getElementById("liste1").appendChild(node);
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
