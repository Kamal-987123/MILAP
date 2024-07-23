const cards = document.querySelectorAll('.card');
let currentIndex = 0;

const showCards = () => {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'left', 'right');
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('right');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('left');
        }
    });
}

const nextCard = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCards();
}



document.getElementById('nextBtn').addEventListener('click', nextCard);

showCards();
