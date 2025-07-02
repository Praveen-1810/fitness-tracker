// Welcome Page Animation
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.querySelector("#welcome h1");
    if (welcomeMessage) {
        setTimeout(() => {
            welcomeMessage.classList.add("animated");
        }, 1000);
    }
});

// Goals Page: Add and Remove Goals
const goalForm = document.querySelector("form");
const goalList = document.querySelector(".goal-list");

if (goalForm) {
    goalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const goalInput = document.querySelector("#goal");
        const deadlineInput = document.querySelector("#deadline");

        if (goalInput.value.trim() !== "" && deadlineInput.value !== "") {
            const newGoal = document.createElement("li");
            newGoal.textContent = ${goalInput.value} by ${deadlineInput.value};
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.style.marginLeft = "10px";

            // Remove Goal Functionality
            removeBtn.addEventListener("click", () => {
                newGoal.remove();
            });

            newGoal.appendChild(removeBtn);
            goalList.appendChild(newGoal);

            // Clear Inputs
            goalInput.value = "";
            deadlineInput.value = "";
        }
    });
}

// Leaderboard Page: Dynamic Highlights
const leaderboard = document.querySelector("#leaderboard ol");
if (leaderboard) {
    const leaders = leaderboard.querySelectorAll("li");
    let index = 0;

    // Highlight Each Leader Periodically
    setInterval(() => {
        leaders.forEach((leader, i) => {
            leader.style.background = i === index ? "#ffd700" : "transparent";
            leader.style.color = i === index ? "#333" : "#555";
        });
        index = (index + 1) % leaders.length;
    }, 2000);
}

// Smooth Scrolling for Navigation (Optional)
const navLinks = document.querySelectorAll("nav a");
if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
}

// Page-Specific Background Animations
const body = document.querySelector("body");
if (body) {
    const backgrounds = {
        welcome: "url('images/welcome.gif')",
        goals: "url('images/goals-background.gif')",
        leaderboard: "url('images/leaderboard-background.gif')",
    };
    const pageId = body.id;
    if (backgrounds[pageId]) {
        body.style.backgroundImage = backgrounds[pageId];
    }
}

// Popup Modal (Optional for Notifications)
function showModal(message) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = 
        <div class="modal-content">
            <span class="close-button">×</span>
            <p>${message}</p>
        </div>
    ;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.remove();
    });

    setTimeout(() => {
        modal.remove();
    }, 5000);
}

// Example Usage: Notify User on Welcome Page
if (document.querySelector("#welcome")) {
    showModal("Welcome to Fitness Tracker! Start achieving your goals today.");
}