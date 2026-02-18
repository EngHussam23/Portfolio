"use strict";

document
  .getElementById("responseMessage")
  .addEventListener("click", function () {
    // Get form values
    const fullName = document.querySelector('input[title="FulName"]').value;
    const email = document.querySelector('input[title="email"]').value;
    const mobileNumber = document.querySelector(
      'input[itle="MobileNumber"]'
    ).value;
    const message = document.querySelector('textarea[title="Msg"]').value;

    // Validate inputs
    if (!fullName || !email || !mobileNumber || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send("service_w9kybip", "template_mghttkj", {
        fullName: fullName,
        email: email,
        mobileNumber: mobileNumber,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  });
