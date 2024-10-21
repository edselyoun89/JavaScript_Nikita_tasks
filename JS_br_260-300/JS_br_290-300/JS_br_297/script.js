let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

button.addEventListener('click', function() {
    block.classList.add('active');
});

parent.addEventListener('click', function(event) {
    // Проверяем, если клик был не по кнопке
    if (event.target !== button) {
        block.classList.remove('active');
    }
});
