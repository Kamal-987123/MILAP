// script.js
// Example: Toggle password visibility
const passwordInput = document.querySelector('#password');
const togglePasswordButton = document.querySelector('#toggle-password');

togglePasswordButton.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});
