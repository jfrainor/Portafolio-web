// Agregar la clase "loaded" a la etiqueta body una vez que la página haya terminado de cargar
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
  
  // Crear un evento click para cada enlace de proyecto y detener su comportamiento predeterminado
  const enlacesProyectos = document.querySelectorAll(".proyecto .iconos-contenedor a");
  enlacesProyectos.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
  