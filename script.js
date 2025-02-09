document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const targetDate = new Date("2025-02-26T00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "🎉 C'est l'heure ! Clique pour découvrir ta surprise ! 🎁";
            countdownElement.style.color = "#ffd700";
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days} jours, ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);
});
