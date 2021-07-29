const body = document.querySelector("body");
const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", () => {

    for (i = 0; i < contents.length; i++) {
        let contenttop = contents[i].getBoundingClientRect().top;
        let triggerBottom = window.innerHeight/5 *4;

        if (contenttop<triggerBottom) {
            contents[i].classList.add("active");
        } else {
            contents[i].classList.remove("active");
        }
    }
})