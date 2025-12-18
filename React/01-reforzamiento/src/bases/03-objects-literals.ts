// Las interfaces de TypeScript son contratos que definen la forma que deben tener los objetos
// No generan código JavaScript, solo existen para validación en tiempo de desarrollo
// Las interfaces obligan a que un objeto cumpla con una estructura específica

// Interfaz que define la estructura de una Persona con propiedades requeridas
interface Person {
  // Nombre de la persona (requerido, tipo string)
  FirstName: string;
  // Apellido de la persona (requerido, tipo string)
  LastName: string;
  // Edad de la persona (requerido, tipo number)
  Age: number;
  // Propiedad anidada que contiene la dirección (requerida)
  address: Address;
}

// Interfaz que define la estructura de una dirección
interface Address {
  // Código postal de la dirección (requerido)
  postalCode: string;
  // Ciudad de la dirección (requerida)
  city: string;
}

// obejto literal
const Person = {
  FirstName: "Tony",
  LastName: "Stark",
  Age: 45,
  //adress:{
  //   postalCode: 12345,
  //  city: 'new York',
  //}
};
const ironman: Person = {
  FirstName: "Tony",
  LastName: "Stark",
  Age: 45,
  address: {
    postalCode: "ABC-12345",
    city: "New York",
  },
};

console.log(ironman);
//const spiderman: Person = {  //ctrl+ . para que te agregue las propiedas de las interface
//  FirstName: "",
// LastName: "",
//Age: 0,

//} // esto significa que spiderman tiene que tener la misma forma que Person

//const spiderman= {...ironman}// los tres puntos es el operador spread

//const spiderman = structuredClone(ironman);// structuredClone es una funcion que clona objetos
//spiderman.FirstName='Peter';
//spiderman.LastName='Parker';
//spiderman.Age=18;
//spiderman.adress.city='New York';

//console.log(spiderman,spiderman);
