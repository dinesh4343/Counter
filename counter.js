let counter = 0;

const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const resetButton = document.getElementById('reset');
const counterValue = document.getElementById('counter-value');

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

function updateCounter() {
    counterValue.textContent = counter;
}
