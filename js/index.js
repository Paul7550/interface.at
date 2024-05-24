var logdin = getCookie("logdinuser");
let followedlistuser = [];
let userx = logdin - 1;
let count;
let imgurl = JSON.parse(getCookie("imglist"));
followedlistuser = JSON.parse(getCookie(`followedlist${userx}`));
function load() {
    if (logdin != "") {
        document.getElementById("logout").hidden = false;
        document.getElementById("login").hidden = true;
        document.getElementById("userx").hidden = false;
        friends();
    } else {
        document.getElementById("logout").hidden = true;
        document.getElementById("login").hidden = false;
        document.getElementById("userx").hidden = true;
    }
}
function friends() {
    if (followedlistuser.length > 0) {
        document.getElementById("profilenavbar").innerHTML = "";
        for (i = 0; i < followedlistuser.length; i++) {
            const profilepic = document.createElement("div");
            const img = document.createElement("img");
            profilepic.classList.add("profilepic");
            let countX = i;
            img.id = `img${i}`;
            profilepic.appendChild(img);
            profilepic.addEventListener("click", (event) => {
                userX(countX);
            });
            document.getElementById("profilenavbar").appendChild(profilepic);
            if (imgurl[userx] != undefined) {
                document.getElementById(`img${i}`).src = imgurl[followedlistuser[i]];
            } else {
                document.getElementById(`img${i}`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24.png";
            }
        }
    }
}
function userX(greeting) {
    setCookie("userX", greeting - 1);
}
function profile() {
    setCookie("userX", logdin - 1);
}
function logout() {
    logdin = "";
    document.getElementById("logout").hidden = true;
    setCookie("logdinuser", logdin);
    load();
}
function post() {
    const main = document.createElement("div");
    main.classList.add("post");
    main.classList.add("col-sm-12");
    const profilepicture = document.createElement("div");
    profilepicture.classList.add("profilepicture");
    const image = document.createElement("img");
    image.classList.add("image");
    const username = document.createElement("div");
    username.classList.add("username");
    const date = document.createElement("div");
    date.classList.add("date");
    const description = document.createElement("div");
    description.classList.add("description");
    profilepicture.appendChild(image);
    main.appendChild(profilepicture);
    username.appendChild(date);
    main.appendChild(username);
    main.appendChild(description);
    document.getElementById("posts").appendChild(main);
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
