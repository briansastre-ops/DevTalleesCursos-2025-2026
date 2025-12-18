// Declara una constante con el nombre de pila
const FirstName = "Brian";

// Declara una constante con el apellido (usa comillas dobles porque contiene apóstrofe)
const LastName = "O'neal";

// Utiliza template literal (backticks `) para crear una cadena que interpola variables
// ${FirstName} inserta el valor de la variable FirstName
// ${LastName} inserta el valor de la variable LastName
const FullName = `${FirstName} ${LastName} `;

// Imprime el nombre completo en consola
console.log(FullName); // Salida: Brian O'neal
