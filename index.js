function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) { return; }
    //if the wav is already playing then you've to set time back to start
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    //could use timeout, but not perfect to remove the classList
    // better: transition end event: event when the transition on an element was
    // fired
}

function removeTransition(e) {
    //skip if no tranform event
    if (e.propertyName !== "transform") return;
    // this is done when transition ended
    // this is the key, because the listener was refering to it
    this.classList.remove('playing');
}
window.onload = function () {
    window.addEventListener("keydown", playSound);
    //musst be inside a function
    let keys = document.querySelectorAll(".key");
    // let nodes = [];
    // nodes = Array.prototype.slice.call(nodes);
    // must loop over each element
    keys.forEach(key => {
        // Listen to the event 'transitionend', that means the transition ended
        // -> call function removeTransition
        key.addEventListener('transitionend', removeTransition);
    });
}