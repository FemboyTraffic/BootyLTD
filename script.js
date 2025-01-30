document.getElementById("vid").volume = 0.5;

let mainActive = false;

function main() {
    if (mainActive) return;
    mainActive = true;
    $("#clickToPlay").css("opacity", "0");
    $("#main").css("opacity", "1");
    $("#widgetContainer").css("opacity", "1");
    $(".hitCount").css("opacity", "1");

    setTimeout(() => {
        $("#clickToPlay").css("display", "none");
    }, 1050);

    document.getElementById("vid").play();
}

setTimeout(() => {
    if (document.getElementById("vid").paused) {
        $("#clickToPlay").css("opacity", "1");
    } else {
        main();
    }
}, 1000);

$("#clickToPlay").click(() => {
    main();
});

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById('animated-title');
    const cursorElement = document.getElementById('cursor');
    const texts = ["Invite Only Biolink", ".gg/bootyxneko", "We Might Be Criminals"];
    const typingSpeed = 150;
    const backspaceSpeed = 100;
    const delayBeforeBackspace = 1000;
    const delayBeforeRestart = 1000;

    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let typingStarted = false;

    function type() {
        if (isTyping) {
            if (charIndex < texts[textIndex].length) {
                titleElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                isTyping = false;
                setTimeout(type, delayBeforeBackspace);
            }
        } else {
            if (charIndex > 0) {
                titleElement.textContent = titleElement.textContent.slice(0, -1);
                charIndex--;
                setTimeout(type, backspaceSpeed);
            } else {
                isTyping = true;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, delayBeforeRestart);
            }
        }
    }

    function startTypewriter() {
        if (!typingStarted) {
            typingStarted = true;
            type();
            cursorElement.style.display = 'inline';
        }
    }

    document.querySelector("#clickToPlay").addEventListener("click", startTypewriter);

    cursorElement.style.display = 'none';
});
