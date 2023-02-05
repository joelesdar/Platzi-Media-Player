// Funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(3, 99);

function createAdder(a: number): (number) => number {
  return function(b: number): number {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName?: string): string { //lastName es opcional y puede ser undefined o string
  return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');
console.log(richard);


function fullNameDiaz(firstName: string, lastName: string = 'Diaz'): string { //lastName tiene un valor por defecto que es Diaz
  return `${firstName} ${lastName}`;
}

const Manny = fullNameDiaz('Manny');
console.log(Manny);
