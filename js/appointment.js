document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value;

    if (!name || !age || !gender || !service || !date || !time) {
        alert("Please fill all required fields.");
        return;
    }

    let msg = `📆 *APPOINTMENT REQUEST*
--------------------------------
👤 Name: ${name}
🎂 Age: ${age}
⚧ Gender: ${gender}
📝 Appointment For: ${service}
📅 Date: ${date}
⏰ Time: ${time}
${notes ? "📝 Notes: " + notes : ""}
--------------------------------
📍 Dr Muhammad Bilal
Surgeon + Aesthetic CPD (UK)
`;

    // FIXED: Use plain number with country code, no spaces, no +
    const whatsappNumber = "923159050124";
    const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(msg);

    window.open(whatsappURL, "_blank");
});
