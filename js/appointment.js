// =====================
// Autofill service from query parameter
// =====================
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get("service");
    if (serviceParam) {
        const serviceField = document.getElementById("service");
        if (serviceField) {
            serviceField.value = serviceParam;
        }
    }
});

// =====================
// Appointment form submission
// =====================
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const service = document.getElementById("service").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value.trim();

    if (!name || !age || !gender || !service || !date || !time) {
        alert("Please fill all required fields.");
        return;
    }

    let msg = "*APPOINTMENT REQUEST*\n";
    msg += "--------------------------------\n";
    msg += "Name: " + name + "\n";
    msg += "Age: " + age + "\n";
    msg += "Gender: " + gender + "\n";
    msg += "Appointment For: " + service + "\n";
    msg += "Date: " + date + "\n";
    msg += "Time: " + time + "\n";
    if (notes) msg += "Notes: " + notes + "\n";
    msg += "--------------------------------\n";
    msg += "Dr Muhammad Bilal\nSurgical tech (Pakistan) + Aesthetician (Canada)";

    const whatsappNumber = "923159050124";
    const whatsappURL = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(msg);

    window.open(whatsappURL, "_blank");
});
