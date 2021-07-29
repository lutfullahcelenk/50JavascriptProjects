const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let numberOfActive = 1

next.addEventListener("click",()=>{
    numberOfActive++;
    if(numberOfActive>circles.length){
        numberOfActive = circles.length
    }

    progressBar();
})

prev.addEventListener("click",()=>{
    numberOfActive--;

    if(numberOfActive<1){
        numberOfActive = 1
    }

    progressBar();
})

function progressBar(){
    for(i=0; i<circles.length; i++){
        if(i<numberOfActive){
            circles[i].classList.add("active");
        }
        else{
            circles[i].classList.remove("active");
        }
    }

    const actives = document.querySelectorAll(".active");
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(numberOfActive===1){
        prev.disabled = true;
    }else if(numberOfActive===circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}