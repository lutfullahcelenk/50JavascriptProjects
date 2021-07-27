const input = document.querySelector(".Search");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    if (input.className == "Search") {
        opening();
    } else {
        closing();
    }

})

function opening() {
    input.className = "Search-open";

}

function closing() {
    
    if(input.value !== ""){
        window.open("https://google.com");
        input.className= "Search-open";
        input.value = "";
    }else{
        input.className = "Search";
    }
}