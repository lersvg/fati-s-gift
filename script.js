document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const targetDate = new Date("2025-02-26T00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "🎉 It's time! Click to continue!";
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
        }
    }

    setInterval(updateCountdown, 1000);
});
