// ==========================================
// ACTIVITY 5: JAVASCRIPT BASICS
// ==========================================

// 1. REUSABLE TOAST NOTIFICATION FUNCTION

function showToast(message) {

// Create a new div element
let toast = document.createElement("div");
// Assign CSS class
toast.className = "toast";
// Add notification message
toast.innerText = message;
// Add toast to webpage
document.body.appendChild(toast);
// Display notification
setTimeout(function () {
    toast.classList.add("show");
}, 100);
// Remove notification after 3 seconds
setTimeout(function () {
    toast.remove();
}, 3000);

}

// ==========================================
// 2. BOOK BUTTON CLICK EVENT
// ==========================================

document.querySelectorAll(‘a[href=”#booking-form”]’).forEach(function (button) {

button.addEventListener("click", function (event) {
    event.preventDefault();
    // Display notification
    showToast("Redirecting you to the booking form!");
    // Smoothly scroll to booking form
    setTimeout(function () {
        let bookingForm = document.getElementById("booking-form");
        if (bookingForm) {
            bookingForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            // Update URL
            history.pushState(null, "", "#booking-form");
        }
    }, 300);
});

});

// ==========================================
// 3. DIRECT URL SMOOTH SCROLLING
// ==========================================

document.addEventListener(“DOMContentLoaded”, function () {

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

let form = document.getElementById(“booking-form”);

if (form) {

form.addEventListener("submit", function (event) {
    event.preventDefault();
    showToast("Your booking details have been submitted successfully!");
});

}

// ==========================================
// ACTIVITY 7: SELECTOR FORMS AND LIVE INTERACTION
// ==========================================

// 1. SELECT FORM ELEMENTS USING DOM SELECTORS

let matchSelect = document.getElementById(“match-select”);

let standSelect = document.querySelector(”#stand-select”);

let quantityInput = document.getElementById(“ticket-quantity”);

// 2. SELECT BOOKING SUMMARY ELEMENTS

let summaryMatch = document.getElementById(“summary-match”);

let summaryStand = document.getElementById(“summary-stand”);

let summaryPrice = document.getElementById(“summary-price”);

let summaryQuantity = document.getElementById(“summary-quantity”);

let summaryTotal = document.getElementById(“summary-total”);

// 3. DEFINE TICKET PRICES FOR EACH MATCH

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

// Read selected match
let selectedMatch = matchSelect.value;
// Read selected stand
let selectedStand = standSelect.value;
// Read ticket quantity
let quantity = Number(quantityInput.value);
// Check whether match is selected
if (selectedMatch === "") {
    summaryMatch.innerText = "Not Selected";
} else {
    summaryMatch.innerText = selectedMatch;
}
// Check whether stand is selected
if (selectedStand === "") {
    summaryStand.innerText = "Not Selected";
} else {
    summaryStand.innerText = selectedStand;
}
// Display quantity
summaryQuantity.innerText = quantityInput.value || "0";
// Check whether all selections are valid
if (
    selectedMatch === "" ||
    selectedStand === "" ||
    quantity < 1 ||
    quantity > 10 ||
    !Number.isInteger(quantity)
) {
    summaryPrice.innerText = "₹0";
    summaryTotal.innerText = "₹0";
    return;
}
// 5. GET PRICE BASED ON MATCH AND STAND
let price = ticketPrices[selectedMatch][selectedStand];
// 6. CALCULATE TOTAL PRICE
let total = price * quantity;
// 7. UPDATE BOOKING SUMMARY CARD
summaryPrice.innerText = "₹" + price.toLocaleString("en-IN");
summaryTotal.innerText = "₹" + total.toLocaleString("en-IN");
// 8. DISPLAY TOAST NOTIFICATION
showToast("Booking Summary Updated Successfully!");

}

// ==========================================
// 9. ADD CHANGE EVENT LISTENERS
// ==========================================

// When match is changed

matchSelect.addEventListener(“change”, updateBookingSummary);

// When stand is changed

standSelect.addEventListener(“change”, updateBookingSummary);

// When ticket quantity is changed

quantityInput.addEventListener(“change”, updateBookingSummary);

// Update summary immediately while typing

quantityInput.addEventListener(“input”, updateBookingSummary);

// ==========================================
// END OF ACTIVITY 7
// ==========================================