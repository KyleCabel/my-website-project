document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("message").textContent = "Your message has been sent successfully!";

});