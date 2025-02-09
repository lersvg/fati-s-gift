document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("February 09, 2025 19:20:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} days, ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "🎉 Happy Birthday, Fatima Ezzahra! 🎉";
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
