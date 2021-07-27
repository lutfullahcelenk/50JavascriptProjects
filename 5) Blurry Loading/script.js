const backGround = document.querySelector("main");
const percentage = document.querySelector("div");

let loading = 0;
let blurring = 10;

page();

function page() {
    let interval = setInterval(exceed, 20);

    function exceed() {
        loading++;
        blurring--;
        if (loading == 100) {
            clearInterval(interval);
        }

        percentage.innerText = `${loading}%`;
        percentage.style.opacity = scale(loading,0,100,1,0.1)
        backGround.style.filter = `blur(${scale(loading,0,100,10,0)}px)`
    }
}

//we get this function from stackoverflow.com

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}