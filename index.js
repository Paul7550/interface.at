let logdin = getCookie("logdin");
function load() {
  if (logdin != "") {
    document.getElementById("signin").hidden = true;
    document.getElementById("logout").hidden = false;
  }
}
function logout() {
  logdin = "";
  document.getElementById("logout").hidden = true;
  document.getElementById("signin").hidden = false;
  setCookie("logdin", logdin);
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
