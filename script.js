document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const questionsSection = document.getElementById("questions-section");
    const messageSection = document.getElementById("message-section");
    const form = document.getElementById("security-questions");

    const targetDate = new Date("February 26, 2025 00:00:00").getTime();
    const interval = setInterval(function () {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            clearInterval(interval);
            countdownElement.style.display = "none";
            questionsSection.classList.remove("hidden");
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
        }
    }, 1000);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const answers = {
            q1: "Lasagna",
            q2: "I don't have one",
            q3: "Love at First Sight",
            q4: "Hacharat"
        };

        if (
            document.getElementById("q1").value.trim().toLowerCase() === answers.q1.toLowerCase() &&
            document.getElementById("q2").value.trim().toLowerCase() === answers.q2.toLowerCase() &&
            document.getElementById("q3").value.trim().toLowerCase() === answers.q3.toLowerCase() &&
            document.getElementById("q4").value.trim().toLowerCase() === answers.q4.toLowerCase()
        ) {
            questionsSection.style.display = "none";
            messageSection.classList.remove("hidden");
        } else {
            alert("Oops! Some answers are incorrect. Try again!");
        }
    });
});
