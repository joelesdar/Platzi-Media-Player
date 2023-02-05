// Boolean
let muted: boolean = true;
muted = false;

// Números
let numerador: number = 42;
let denominador: number = 66;
let resultado = numerador / denominador;

// String
let nombre: string = 'Joel';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole"];
// people.push(9000); incorrecto

let peopleAndNumbers: Array<string | number> = [];
// let peopleAndNumbers: Array<string> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(6003);

// Enums
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};

// Object
let someObject: object = {type: 'Wildcard'};
