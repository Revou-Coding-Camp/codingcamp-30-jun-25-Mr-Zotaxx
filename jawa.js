// js/script.js
// Set username from localStorage or prompt
document.addEventListener('DOMContentLoaded', () => {
    // Get username
    const storedName = localStorage.getItem('userName');
    const userNameElement = document.getElementById('user-name');
    
    if (storedName) {
        userNameElement.textContent = storedName;
    } else {
        const userName = prompt('Please enter your name:');
        if (userName) {
            localStorage.setItem('userName', userName);
            userNameElement.textContent = userName;
        }
    }
    
    // Form submission handling
    const messageForm = document.getElementById('message-us');
    const formOutput = document.querySelector('.form-output');
    
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const birthDate = document.getElementById('birth-date').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !birthDate || !gender || !message) {
            alert('Please fill all fields');
            return;
        }
        
        // Get current date/time
        const now = new Date();
        const currentTime = now.toLocaleString();
        
        // Display output
        document.getElementById('current-time').textContent = currentTime;
        document.getElementById('output-name').textContent = name;
        document.getElementById('output-birth-date').textContent = birthDate;
        document.getElementById('output-gender').textContent = gender;
        document.getElementById('output-message').textContent = message;
        
        // Show output section
        formOutput.style.display = 'block';
        
        // Scroll to output
        formOutput.scrollIntoView({ behavior: 'smooth' });
        
        // Reset form
        messageForm.reset();
    });
    
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});