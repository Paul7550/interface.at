let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
function load() {
    if (imgurl[userx] != undefined || imgurl[userx] != null) {
        document.getElementById(`navimg`).src = imgurl[userx];
    } else {
        document.getElementById(`navimg`).src = "../sources/person_24dp_FILL0_wght400_GRAD0_opsz24 (1).png ";
    }
}
