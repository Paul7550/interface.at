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
function load() {
    for (let i = 0; i < usercount; i++) {
        email[i] = users[i].email;
    }
}
load();

function signin() {
    for (let i = 0; i <= usercount; i++) {
        if (document.getElementById("email").value == email[i]) {
            document.getElementById("alert").hidden = false;
            return;
        }
    }

    let result = document.getElementById("email").value.includes("@");
    if (result == true) {
        createacc();
    } else {
        document.getElementById("!email").hidden = false;
        document.getElementById("email").value = "";
    }
}
window.signin = signin;
function createacc() {
    if (document.getElementById("cfmpassword").value == document.getElementById("password").value) {
        create();
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        setCookie("logdinuser", usercount);
    } else if (document.getElementById("cfmpassword").value != document.getElementById("password").value) {
        document.getElementById("!cfmpassword").hidden = false;
    }
    document.getElementById("cfmpassword").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordnotmatch").innerHTML = "";
}
function create() {
    try {
        addDoc(usercollection, {
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            followerlist: [],
            followedlist: [],
            postcount: 0,
            userdes: null,
            usercoller: null,
            imglist: null,
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            window.location.replace("index.html");
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
window.create = create;
function cancel() {
    document.getElementById("alert").hidden = true;
    document.getElementById("!cfmpassword").hidden = true;
    document.getElementById("!email").hidden = true;
}
window.cancel = cancel;
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
