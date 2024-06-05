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
const postcollection = collection(db, "posts");
const postdatas = await getDocs(postcollection);
const posts = postdatas.docs.map((doc) => doc.data());

let logdinuser = getCookie("logdinuser");
let username;
function load() {
    username = users[logdinuser].username;
    document.getElementById("username").innerHTML = username;
}
load();
function post() {
    let postimg = document.getElementById("postimg").value;
    let postdes = document.getElementById("des").value;
    try {
        const docRef = addDoc(postcollection, {
            postusername: username,
            postimg: postimg,
            postdes: postdes,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    document.getElementById("postimg").value = "";
    document.getElementById("des").value = "";
}
window.post = post;
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
