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
var usercount = users.length;
let email = [];
let password = [];
function load() {
    for (let i = 0; i < usercount; i++) {
        email[i] = users[i].email;
        password[i] = users[i].password;
    }
}
load();
function cancel() {
    document.getElementById("notmatch").hidden = true;
}
window.cancel = cancel;
function login() {
    for (let i = 0; i <= usercount; i++) {
        if (
            document.getElementById("email").value == email[i] &&
            document.getElementById("password").value == password[i]
        ) {
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("link").href = "index.html";
            i++;
            setCookie("logdinuser", i);
        }
    }
    if (getCookie("logdinuser") == "") {
        document.getElementById("notmatch").hidden = false;
    }
}
window.login = login;
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
