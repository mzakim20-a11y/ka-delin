const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    alert("Yay! 🥰 I love you!");
});