window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "lightcoral",
        "rgb(11, 233, 59)",
        "rgb(96, 4, 119)",
        "rgb(219, 13, 99)",
        "rgb(188, 238, 9)",
        "rgb(12, 5, 116)"
    ];


    console.log(sounds);

    //lets get going with the sound
    pads.forEach((pad, index ) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        });   
       
    }
});

