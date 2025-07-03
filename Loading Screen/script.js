window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("app-content").style.display = "block";
        }, 500); // Ensures the fade-out animation completes before hiding
    }, 3000);
});
