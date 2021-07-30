const divs = document.querySelectorAll("div");
const emailLabel = document.querySelector(".email");
const emailInput = document.querySelector(".e-mail");
const passwordLabel = document.querySelector(".password");
const passwordInput = document.querySelector(".pass-word");

emailInput.addEventListener("click", () => {
    emailLabel.classList.add("focuss")
});

emailLabel.addEventListener("click", () => {
    emailLabel.classList.add("focuss")
    passwordInput.value.length == 0 ? passwordLabel.classList.remove("focuss") : null;
});

passwordLabel.addEventListener("click", () => {
    passwordLabel.classList.add("focuss")
    emailInput.value.length == 0 ? emailLabel.classList.remove("focuss") : null;
});

passwordInput.addEventListener("click", () => {
    passwordLabel.classList.add("focuss")
});