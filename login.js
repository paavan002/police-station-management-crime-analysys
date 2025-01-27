document.getElementById('loginf').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const pid = document.getElementById('pid').value;
    const password = document.getElementById('password').value;

    if (name === 'admin' && pid === '1234' && password === 'pass') {
        displayMessage('Login successful!', 'success');
        window.location = "confidential.html"; // Redirect on successful login
    } else {
        alert('Invalid credentials. Please try again.', 'error');
    }
});

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // Add class for styling
}
