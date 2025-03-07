document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Show confirmation message
    let name = document.querySelector("input[name='name']").value;
    alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon.`);
    
    // Clear form fields after submission
    document.getElementById("contact-form").reset();
});
