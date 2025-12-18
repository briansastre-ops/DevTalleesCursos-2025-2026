// Importa el archivo de estilos CSS para aplicar los estilos al proyecto
import "./style.css";

// A continuación están comentados los imports de los diferentes módulos de bases que demuestran conceptos de TypeScript y JavaScript
// Estos fueron utilizados para aprender conceptos fundamentales pero ahora se encuentran desactivados
//import './bases/01-variables' // Conceptos: const, let, tipos de datos
//import './bases/02-template-strings' // Conceptos: Template literals con ${}
//import './bases/03-objects-literals' // Conceptos: Objetos, interfaces
//import './bases/04-arrays' // Conceptos: Arrays, spread operator
//import './bases/05-functions' // Conceptos: Funciones, arrow functions
//import './bases/06-obj-destructuring' // Conceptos: Destructuring de objetos
//import './bases/07-array-destructuring' // Conceptos: Destructuring de arrays
//import './bases/08-imp-exp' // Conceptos: Importar y exportar módulos
//import './bases/09-promises' // Conceptos: Promesas, .then(), .catch()

// Importa el módulo 11 que demuestra async/await
import "./bases/11-async-await";

// A continuación están comentados los imports de funciones específicas que serían utilizadas si estuvieran activas
//import { getHeroesByOwner } from './bases/08-imp-exp' // Función para obtener héroes por dueño
//import { Owner } from './bases/data/heroes.data' // Enum que define los dueños (DC, Marvel)

// Selecciona el elemento HTML con id='app' y le asigna contenido HTML
// El '!' operador de TypeScript indica que el elemento siempre existe (non-null assertion)
// Se utiliza template literal para insertar HTML dinámicamente en el DOM
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    {/* Título principal de la aplicación */}
    <h1>Hello World</h1>
  </div>
`;

// Línea comentada que ejecutaría la función getHeroesByOwner con el parámetro Owner.Marvel
// Mostraría todos los héroes de Marvel en la consola
//console.log(getHeroesByOwner(Owner.Marvel))
