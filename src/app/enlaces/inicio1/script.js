const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // activa/desactiva dark-mode
    if(document.body.classList.contains('dark-mode')){
        button.textContent = 'Modo Claro'; // cambia el texto del botón
    } else {
        button.textContent = 'Modo Oscuro';
    }
});
