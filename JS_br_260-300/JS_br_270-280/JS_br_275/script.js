let elem = document.querySelector('#elem');
let button = document.querySelector('.btn')

button.addEventListener('click', () => {
    elem.disabled = !elem.disabled
})