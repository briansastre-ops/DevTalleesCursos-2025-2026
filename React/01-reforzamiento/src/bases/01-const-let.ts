// Declara una constante con tipo explícito string para almacenar el nombre
const FirstName: string = "Brian";

// Declara una constante sin tipo explícito (TypeScript infiere que es string por el valor)
const LastName = "Sastre";

// Imprime en consola el primer nombre y el apellido
console.log(FirstName, LastName); // Salida: Brian Sastre

// Declara una variable con let que puede ser modificada, inicializada con valor 5
let diceNumber = 5;

// Modifica el valor de la variable diceNumber de 5 a 4
diceNumber = 4;

// Declara una constante que almacena el resultado de verificar si 'LastName' contiene la letra 's'
// El método includes() retorna true si encuentra la letra, false si no
const containsLatterS = LastName.includes("s");

// Imprime un objeto con dos propiedades: containsLatterS (true) y diceNumber (4)
console.log({ containsLatterS, diceNumber }); // Salida: { containsLatterS: true, diceNumber: 4 }
