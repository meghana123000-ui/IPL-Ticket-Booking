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

document.querySelectorAll('a[href="#booking-form"]').forEach(function (button) {

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

        // Clear the form
        form.reset();

    });

}


// ==========================================
// END OF ACTIVITY 5
// ==========================================