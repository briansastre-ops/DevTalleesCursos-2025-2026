// Función que configura un contador interactivo en un botón HTML
// Parámetro: element - El elemento botón donde se mostrará el contador
export function setupCounter(element: HTMLButtonElement) {
  // Variable local que almacena el valor actual del contador, inicializada en 0
  let counter = 0;

  // Función flecha que actualiza el valor del contador y actualiza el contenido del botón
  // Parámetro: count - El nuevo valor que tendrá el contador
  const setCounter = (count: number) => {
    // Actualiza la variable counter con el nuevo valor
    counter = count;

    // Actualiza el texto del botón para mostrar el nuevo valor del contador
    element.innerHTML = `count is ${counter}`;
  };

  // Agrega un listener de click al elemento botón
  // Cada vez que se hace click, se llama a setCounter incrementando el contador en 1
  element.addEventListener("click", () => setCounter(counter + 1));

  // Inicializa el contador con setCounter(0) para mostrar "count is 0" en el botón al cargar
  setCounter(0);
}
