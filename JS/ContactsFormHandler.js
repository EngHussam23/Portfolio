document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  fetch("FormResponseEmail.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      const responseDiv = document.getElementById("responseMessage");
      if (data.status === "success") {
        responseDiv.style.color = "green";
        responseDiv.textContent = data.message;
      } else {
        responseDiv.style.color = "red";
        responseDiv.textContent = data.message;
      }
      this.reset();
    })
    .catch((error) => {
      const responseDiv = document.getElementById("responseMessage");
      responseDiv.style.color = "red";
      responseDiv.textContent = "An error occurred while sending the message.";
    });
});
