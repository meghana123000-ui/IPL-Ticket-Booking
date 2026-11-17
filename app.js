// ==========================================
// ACTIVITY 5: JAVASCRIPT BASICS
// ==========================================
// 1. REUSABLE TOAST NOTIFICATION FUNCTION
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(function () {
        toast.classList.add("show");
    }, 100);
    setTimeout(function () {
        toast.remove();
    }, 3000);
}
// ==========================================
// 2. BOOK BUTTON CLICK EVENT
// ==========================================
document.querySelectorAll('a[href="#booking-form"]').forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        showToast("Redirecting you to the booking form!");
        setTimeout(function () {
            let bookingForm = document.getElementById("booking-form");
            if (bookingForm) {
                bookingForm.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                history.pushState(null, "", "#booking-form");
            }
        }, 300);
    });
});
// ==========================================
// 3. DIRECT URL SMOOTH SCROLLING
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash === "#booking-form") {
        let bookingForm = document.getElementById("booking-form");
        if (bookingForm) {
            bookingForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
});
// ==========================================
// 4. BOOKING FORM SUBMISSION
// ==========================================
let form = document.getElementById("booking-form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        showToast("Your booking details have been submitted successfully!");
    });
}
// ==========================================
// ACTIVITY 7: SELECTOR FORMS AND LIVE INTERACTION
// ==========================================
// 1. SELECT FORM ELEMENTS
let matchSelect = document.getElementById("match-select");
let standSelect = document.getElementById("stand-select");
let quantityInput = document.getElementById("ticket-quantity");
// 2. SELECT BOOKING SUMMARY ELEMENTS
let summaryMatch = document.getElementById("summary-match");
let summaryStand = document.getElementById("summary-stand");
let summaryPrice = document.getElementById("summary-price");
let summaryQuantity = document.getElementById("summary-quantity");
let summaryTotal = document.getElementById("summary-total");
// 3. DEFINE TICKET PRICES
let ticketPrices = {
    "RCB vs CSK": {
        "General": 1500,
        "Premium": 3000,
        "VIP": 5000
    },
    "MI vs KKR": {
        "General": 2000,
        "Premium": 3500,
        "VIP": 6000
    }
};
// 4. CREATE FUNCTION TO UPDATE BOOKING SUMMARY
function updateBookingSummary() {
    if (!matchSelect || !standSelect || !quantityInput) {
        return;
    }
    let selectedMatch = matchSelect.value;
    let selectedStand = standSelect.value;
    let quantity = Number(quantityInput.value);
    if (summaryMatch) {
        summaryMatch.innerText = selectedMatch || "Not Selected";
    }
    if (summaryStand) {
        summaryStand.innerText = selectedStand || "Not Selected";
    }
    if (summaryQuantity) {
        summaryQuantity.innerText = quantityInput.value || "0";
    }
    if (
        selectedMatch === "" ||
        selectedStand === "" ||
        quantity < 1 ||
        quantity > 10 ||
        !Number.isInteger(quantity) ||
        !ticketPrices[selectedMatch] ||
        !ticketPrices[selectedMatch][selectedStand]
    ) {
        if (summaryPrice) {
            summaryPrice.innerText = "₹0";
        }
        if (summaryTotal) {
            summaryTotal.innerText = "₹0";
        }
        return;
    }
    let price = ticketPrices[selectedMatch][selectedStand];
    let total = price * quantity;
    if (summaryPrice) {
        summaryPrice.innerText = "₹" + price.toLocaleString("en-IN");
    }
    if (summaryTotal) {
        summaryTotal.innerText = "₹" + total.toLocaleString("en-IN");
    }
}
// 5. ADD CHANGE EVENT LISTENERS
if (matchSelect) {
    matchSelect.addEventListener("change", updateBookingSummary);
}
if (standSelect) {
    standSelect.addEventListener("change", updateBookingSummary);
}
if (quantityInput) {
    quantityInput.addEventListener("input", updateBookingSummary);
}
// Update summary when the page loads
updateBookingSummary();
// ==========================================
// ACTIVITY 8: RESPONSIVE LAYOUT
// ==========================================
// 1. TEAM FILTERING
let teamFilter = document.getElementById("team-filter");
let matchCards = document.querySelectorAll(".match-card");
if (teamFilter) {
    teamFilter.addEventListener("change", function () {
        let selectedTeam = teamFilter.value;
        matchCards.forEach(function (card) {
            let teams = (card.dataset.teams || "").split(",");
            if (
                selectedTeam === "all" ||
                teams.includes(selectedTeam)
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
// ==========================================
// 2. GRID AND LIST VIEW TOGGLE
// ==========================================
let matchesContainer = document.getElementById("matches-container");
let gridButton = document.getElementById("grid-view");
let listButton = document.getElementById("list-view");
if (gridButton && listButton && matchesContainer) {
    // GRID VIEW
    gridButton.addEventListener("click", function () {
        matchesContainer.classList.remove("list-view");
        showToast("Grid View Enabled");
    });
    // LIST VIEW
    listButton.addEventListener("click", function () {
        matchesContainer.classList.add("list-view");
        showToast("List View Enabled");
    });
}
// ==========================================
// 3. HAMBURGER MENU
// ==========================================
let menuToggle = document.getElementById("menu-toggle");
let navMenu = document.getElementById("nav-menu");
if (menuToggle && navMenu) {
    // OPEN AND CLOSE MENU
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        let isOpen = navMenu.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.innerText = isOpen ? "✕" : "☰";
    });
    // CLOSE MENU AFTER CLICKING A NAVIGATION LINK
    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerText = "☰";
        });
    });
}
// ==========================================
// END OF ACTIVITIES 5, 7 AND 8
// ==========================================