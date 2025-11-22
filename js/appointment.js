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

    const msg = `\u{1F4C6} *APPOINTMENT REQUEST*
--------------------------------
\u{1F464} Name: ${name}
\u{1F382} Age: ${age}
\u{269B} Gender: ${gender}
\u{1F4DD} Appointment For: ${service}
\u{1F4C5} Date: ${date}
\u{23F0} Time: ${time}
${notes ? "\u{1F4DD} Notes: " + notes : ""}
--------------------------------
\u{1F4CD} Dr Muhammad Bilal
Surgeon + Aesthetic CPD (UK)
`;

    const whatsappNumber = "923159050124"; // Country code + number, no spaces or +
    const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(msg);

    window.open(whatsappURL, "_blank");
});
