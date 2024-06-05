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
let username;
let userdes;
let followedlist;
let followerlist;
let profileimg;
let postcount = 0;
let description;
let userx;
let logdin = getCookie("logdinuser");
function load() {
    if (getCookie("userX") == getCookie("logdinuser")) {
        document.getElementById("followdiv").hidden = true;
    }
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

    if (description != null) {
        document.getElementById("des").innerHTML = description;
    }
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].postusername == username) {
            postcount++;
            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");
            img.classList.add("card-img-top");
            img.id = `img${i}`;
            img.classList.add("img");
            card.appendChild(img);
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const username = document.createElement("h5");
            username.id = `username${i}`;
            cardBody.appendChild(username);
            const des = document.createElement("p");
            des.classList.add = "card-text";
            des.id = `des${i}`;
            cardBody.appendChild(des);
            card.appendChild(cardBody);
            document.getElementById("posts").appendChild(card);
            document.getElementById(`username${i}`).innerHTML = posts[i].postusername;
            document.getElementById(`des${i}`).innerHTML = posts[i].postdes;
            document.getElementById(`img${i}`).src = posts[i].postimg;
        }
    }
    document.getElementById("follower").innerHTML = followerlist.length + "  Follower";
    document.getElementById("followed").innerHTML = followedlist.length + "  Gefolgt";
    document.getElementById("postcount").innerHTML = postcount + "  Beiträge";
}
function follow() {
    let followedlistlogdin = users[logdin].followedlist;
    try {
        const docRef = addDoc(usercollection, {
            followedlist: followedlistlogdin,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
window.follow = follow;
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
