const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter",()=>{
    left.classList.add("active");
    right.classList.add("passive");
});

left.addEventListener("mouseleave",()=>{
    left.classList.remove("active");
    right.classList.remove("passive");
});

right.addEventListener("mouseenter",()=>{
    right.classList.add("active");
    left.classList.add("passive");
});

right.addEventListener("mouseleave",()=>{
    right.classList.remove("active");
    left.classList.remove("passive");
});