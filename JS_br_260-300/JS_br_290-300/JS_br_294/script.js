let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращает переход по ссылке
    this.textContent = this.textContent + ' (' + this.href + ')'; // Обновляет текст ссылки
    console.log('Вы не можете перейти по этой ссылке!');
});
