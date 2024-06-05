import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAzZeIwnnXu8IfnPEyiYkpiQ4HPtL06wrQ",
    authDomain: "interface-9ded2.firebaseapp.com",
    projectId: "interface-9ded2",
    storageBucket: "interface-9ded2.appspot.com",
    messagingSenderId: "79716050631",
    appId: "1:79716050631:web:5088a98020dab9bc4400e2",
    measurementId: "G-WH8FSJXYEX",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usercollection = collection(db, "users");
const userdatas = await getDocs(usercollection);
const users = userdatas.docs.map((doc) => doc.data());
let logdin = getCookie("logdinuser");
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let names;
let picurl;
if (logdin != "") {
    let logdinuser = users[getCookie("logdinuser")];
    picurl = logdinuser.imglist;
    names = logdinuser.username;
}

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
function loadnav() {
    document.getElementById(`navimg`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24 (1).png ";
    if (logdin != "") {
        document.getElementById("logout").hidden = false;
        document.getElementById("login").hidden = true;
        document.getElementById("usernamenav").innerHTML = names;
        if (picurl != undefined || picurl != null) {
            document.getElementById(`navimg`).src = picurl;
        }
    } else {
        document.getElementById("logout").hidden = true;
        document.getElementById("login").hidden = false;
    }
}
loadnav();
function profile() {
    logdin = getCookie("logdinuser");
    setCookie("userX", logdin);
}
window.profile = profile;
function logout() {
    logdin;
    document.getElementById("logout").hidden = true;
    setCookie("logdinuser", "");
    load();
}
window.logout = logout;
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
