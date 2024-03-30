document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get form values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var ign = document.getElementById("ign").value;

    // Validate password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    var playerId = generatePlayerId();

    alert("Registration Successful!\n\nEmail: " + email + "\nPlayer ID: " + playerId + "\nIGN: " + ign );
    window.location = 'homepage.html';
    
});

// Function to generate random Player ID
function generatePlayerId() {
    var playerId = "";
    for (var i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) {
            playerId += " ";
        }
        playerId += Math.floor(Math.random() * 10);
    }
    return playerId;
}