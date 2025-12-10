const player = document.getElementById("player");

document.querySelectorAll(".animal img").forEach(img => {
    img.addEventListener("click", () => {
        const sound = img.getAttribute("data-sound");
        player.src = sound;
        player.play();
    });
});