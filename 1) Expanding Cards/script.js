const pictures = document.querySelectorAll(".panel");

pictures.forEach(element => {
    element.addEventListener("click", () => {
        remove();
        element.setAttribute("class", "active")
    })
});

function remove() {
    pictures.forEach(element => {
        element.setAttribute("class", "panel")
    });
}

// it is important to use different fucntions in javaScript. By this way we use one
// function in another function. it gives our codes flexibility.orders of lines 
// are crucial for working of the script 