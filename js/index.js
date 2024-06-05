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

let logdin = getCookie("logdinuser");
let followedlistuser = [];
let userx = logdin - 1;
let count;
function load() {
    if (logdin != "") {
        friends();
    }
    post();
}
load();
function friends() {
    if (followedlistuser.length > 0) {
        document.getElementById("profilenavbar").innerHTML = "";
        for (i = 0; i < followedlistuser.length; i++) {
            const profilepic = document.createElement("div");
            const img = document.createElement("img");
            const link = document.createElement("a");
            profilepic.classList.add("profilepic");
            let countX = i;
            img.id = `img${i}`;
            img.classList.add("friendimg");
            link.id = `link${i}`;
            link.appendChild(img);
            profilepic.appendChild(link);
            profilepic.addEventListener("click", (event) => {
                userX(countX);
            });
            document.getElementById("profilenavbar").appendChild(profilepic);
            if (imgurl[i] != undefined || imgurl[i] != null) {
                document.getElementById(`img${i}`).src = imgurl[followedlistuser[i]];
            } else {
                document.getElementById(`img${i}`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24.png";
            }
            document.getElementById(`link${i}`).href = "../public/userx.html";
        }
    }
}
function userX(greeting) {
    setCookie("userX", greeting);
}
function profile() {
    setCookie("userX", logdin - 1);
}
function post() {
    for (let i = 0; i < posts.length; i++) {
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
