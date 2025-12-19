const current = document.querySelector('#count-display');
const decrease = document.querySelector('#decrement');
const increase = document.querySelector('#increment');
const reset = document.querySelector('#reset');

let count = 0;

increase.addEventListener('click', () => {
    count++;
    current.textContent = count;
});

decrease.addEventListener('click', () => {
    count--;
    current.textContent = count;
});

reset.addEventListener('click', () => {
    count = 0;
    current.textContent = count;
});