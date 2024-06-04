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
let username;
let userdes;
let followedlist;
let followerlist;
let profileimg;
let postcount;
let description;
let userx;
function load() {
    userx = users[getCookie("userX")];
    username = userx.username;
    userdes = userx.userdes;
    followedlist = userx.followedlist;
    followerlist = userx.followerlist;
    profileimg = userx.imglist;
    postcount = userx.postcount;
    description = userx.description;
    show();
}
load();
function show() {
    document.getElementById("username").innerHTML = username;
    if (profileimg != null) {
        document.getElementById("profileimg").src = profileimg;
    }
    document.getElementById("follower").innerHTML = followerlist.length;
    document.getElementById("followed").innerHTML = followedlist.length;
    document.getElementById("postcount").innerHTML = postcount;
    if (description != null) {
        document.getElementById("des").innerHTML = description;
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
