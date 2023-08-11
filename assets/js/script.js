// Seleccionar barra de progreso 
const progress = document.querySelector('progress');

// Mostrar barra de progreso
progress.style.display = 'block'; 

window.addEventListener("DOMContentLoaded", (loadEvent) => {

  // Cargar header y footer
  $("header").load("assets/includes/header.html");
  $("footer").load("assets/includes/footer.html");

  // Ocultar barra de progreso cuando termine la carga
  progress.style.display = 'none';

});