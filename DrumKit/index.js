window.addEventListener("keydown", function (e) {
    // targetting audio element with their data key
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if (!audio) return;// stops the function to call all together
    audio.currentTime = 0;// rewind from the start
    audio.play();// plays the audio

    // When button on keyboard is clicked this will add the class playing which will give nice effect to the boxes
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.add("playing");
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    // skips if it is not a transform
    this.classList.remove("playing");
}

const keys = document.getElementsByClassName("key");

Array.from(keys).forEach(key => key.addEventListener("transitionend", removeTransition));
