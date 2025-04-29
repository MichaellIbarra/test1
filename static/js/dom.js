document.getElementById("cambiar").addEventListener("click",()=>{
  const p = document.getElementById("texto");
    p.innerHTML = "Texto cambiado desde el DOM";
});

const titulo = document.getElementById('titulo');
const boton = document.getElementById('estilizar');

boton.addEventListener('click', () => {
  // Estilos en línea (overriden sobre Tailwind)
  titulo.style.color = "blue"; // texto azul (inline)
  titulo.style.fontSize = "24px"; // cambia el tamaño

  // Manipulación de clases con Tailwind
  titulo.classList.add("text-red-500");     // añade color rojo desde Tailwind
  titulo.classList.remove("hidden");        // muestra el h1 si estaba oculto
  titulo.classList.toggle("bg-gray-200");   // alterna fondo gris claro
});