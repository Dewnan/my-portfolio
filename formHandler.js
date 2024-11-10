document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbyHfm7faJdxWcoWxsdAZ76C8vqagKPKRq35Z1fLZmHitbgqe-MLK-psEx-mhQJsWGw/exec", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        const responseDiv = document.getElementById("response");
        
        if (data.status === "success") {
            responseDiv.textContent = "Form submitted successfully!";
            responseDiv.className = "success"; // Apply success styling
        } else {
            responseDiv.textContent = "Error: " + data.message;
            responseDiv.className = "error"; // Apply error styling
        }

        // Hide the message and clear the form after 3 seconds (3000ms)
        setTimeout(() => {
            responseDiv.textContent = ""; // Clear message text
            responseDiv.className = ""; // Remove any class

            // Reset the form fields
            document.getElementById("myForm").reset();
        }, 3000); // 3 seconds delay
    })
    .catch(error => {
        const responseDiv = document.getElementById("response");
        responseDiv.textContent = "Error: " + error.message;
        responseDiv.className = "error"; // Apply error styling

        // Hide the message and clear the form after 3 seconds
        setTimeout(() => {
            responseDiv.textContent = ""; // Clear message text
            responseDiv.className = ""; // Remove any class

            // Reset the form fields
            document.getElementById("myForm").reset();
        }, 3000); // 3 seconds delay
    });
});
