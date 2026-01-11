/* Interactive Quiz JavaScript for PYQ Section */

let score = 0;
let answered = 0;

function checkAnswer(button) {
    // Skip if already answered
    if (button.classList.contains('disabled')) return;

    const questionCard = button.closest('.question-card');
    const options = questionCard.querySelectorAll('.option');
    const explanation = questionCard.querySelector('.explanation');
    const isCorrect = button.getAttribute('data-correct') === 'true';

    // Disable all options
    options.forEach(opt => {
        opt.classList.add('disabled');

        // Highlight correct answer
        if (opt.getAttribute('data-correct') === 'true') {
            opt.classList.add('correct');
        }
    });

    // Mark selected answer
    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }

    answered++;

    // Update score display
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = score;
    }

    // Show explanation
    if (explanation) {
        explanation.style.display = 'block';
        explanation.innerHTML = isCorrect
            ? '✅ Correct! ' + explanation.innerHTML.replace('✅ Correct Answer:', '')
            : '❌ Wrong! ' + explanation.innerHTML;
    }

    // Smooth scroll to next question after delay
    setTimeout(() => {
        const nextCard = questionCard.nextElementSibling;
        if (nextCard && nextCard.classList.contains('question-card')) {
            nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 1000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Set total count
    const totalElement = document.getElementById('total');
    const questionCards = document.querySelectorAll('.question-card');

    if (totalElement) {
        totalElement.textContent = questionCards.length;
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key >= '1' && e.key <= '4') {
            const focusedCard = document.querySelector('.question-card:not(.answered)');
            if (focusedCard) {
                const options = focusedCard.querySelectorAll('.option:not(.disabled)');
                const index = parseInt(e.key) - 1;
                if (options[index]) {
                    options[index].click();
                }
            }
        }
    });
});

// Theme toggle function (uses parent theme-toggle.js if available)
if (typeof toggleTheme === 'undefined') {
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}
