const btn = document.getElementById("switch");
const page = document.getElementsByTagName("html")[0];
const img = document.querySelector("#profile img");

btn.addEventListener("click", () => {
    if(page.getAttribute("class") == "light") {
        page.setAttribute("class", "");
        img.setAttribute("src", "./assets/avatar.png");
    } else {
        page.setAttribute("class", "light");
        img.setAttribute("src", "./assets/avatar-light.png");
    }
})