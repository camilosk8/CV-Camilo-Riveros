const hamburguesa = document.querySelector('.icono-hamburguesa');
const enlaces = document.querySelector('.contenedor-nav');


hamburguesa.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
});