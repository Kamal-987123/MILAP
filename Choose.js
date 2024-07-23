let selectedGender = '';

function chooseGender(gender) {
    selectedGender = gender;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You have chosen: ${gender.charAt(0).toUpperCase() + gender.slice(1)}`;
    
    const submitButton = document.getElementById('submit-button');
    submitButton.style.display = 'inline-block';
    
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.style.border = 'none';
    });
    
    const selectedChoice = document.getElementById(gender);
    selectedChoice.style.border = '2px solid #007BFF';
}

function submitChoice() {
    if (selectedGender) {
        alert(`You have submitted your choice: ${selectedGender}`);
        if (selectedGender === 'male') {
            window.location.href = 'Shuffle-male.html'; // replace 'male.html' with the URL of your choice
        } else if (selectedGender === 'female') {
            window.location.href = ' Shuffle-female.html'; // replace 'female.html' with the URL of your choice
        }
    } else {
        alert('Please select a gender.');
    }
}
