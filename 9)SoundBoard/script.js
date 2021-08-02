// const names = ["Applause", "Boo", "Gasp", "Tada", "Victory", "Wrong"];
const audios = document.querySelectorAll("audio");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    let counter = 0;
    button.addEventListener("click", () => {
        counter++;
        let song = button.innerText;
        let audio = document.getElementById(song);
        if (counter > 1 || !audio.paused || !audio.ended) {
            audio.pause();
            audio.currentTime = 0;
        }
        counter--;
        audio.play();
    })
})