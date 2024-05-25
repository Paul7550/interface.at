var logdin = getCookie("logdinuser");
let followedlistuser = [];
let userx = logdin - 1;
let username = JSON.parse(getCookie("usernames"));
let count;
let imgurl = JSON.parse(getCookie("imglist"));
followedlistuser = JSON.parse(getCookie(`followedlist${userx}`));
function load() {
    if (logdin != "") {
        friends();
    }
}
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
            /* if (imgurl[i] != undefined || imgurl[i] != null) {
                document.getElementById(`img${i}`).src = imgurl[followedlistuser[i]];
            } else {
                document.getElementById(`img${i}`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24.png";
            } */
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
