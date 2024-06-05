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

let username = [];
let usercount = users.length;
let searchuser;
let displayuser = [];
function load() {
    for (let i = 0; i < usercount; i++) {
        username[i] = users[i].username;
    }
    var input = document.getElementById("suche");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("search").click();
        }
    });
}
load();
function search() {
    document.getElementById("userX").replaceChildren();
    searchuser = document.getElementById("suche").value;
    let count = 0;
    for (let i = 0; i < usercount; i++) {
        if (username[i].toLowerCase().includes(searchuser.toLowerCase())) {
            displayuser[count] = username[i];
            count++;
            document.getElementById("userX").hidden = false;
            const profile = document.createElement("div");
            const pic = document.createElement("div");
            const name = document.createElement("div");
            const link = document.createElement("a");
            const img = document.createElement("img");
            profile.classList.add("profile");
            pic.classList.add("profilepicture");
            img.id = `pic${count}`;
            img.classList.add("profileimg");
            name.classList.add("username");
            link.id = `link${count}`;
            link.classList.add("name");
            let countX = i;
            name.appendChild(link);
            pic.appendChild(img);
            pic.appendChild(name);
            profile.appendChild(pic);
            name.addEventListener("click", (event) => {
                userX(countX);
            });
            document.getElementById("userX").appendChild(profile);
            document.getElementById(`pic${count}`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24.png";
            if (users[i].imglist != null) {
                document.getElementById(`pic${count}`).src = users[i].imglist;
            }
            document.getElementById(`link${count}`).innerHTML = username[i];
            document.getElementById(`link${count}`).href = "../public/userx.html";
        }
    }
}
window.search = search;

function userX(greeting) {
    setCookie("userX", greeting);
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
