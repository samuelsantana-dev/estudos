type NumeroOuStringg = number | string;

let numeross: NumeroOuString = 10;
console.log(numero); // Saída: 10

let textoss: NumeroOuString = "Olá";
console.log(texto); // Saída: Olá

// -----------------------------------
type Ponto2D = { x: number, y: number };
type Ponto3D = { x: number, y: number, z: number };

type Pontos = Ponto2D | Ponto3D;

let ponto2D: Pontos = { x: 10, y: 20 };
console.log(ponto2D); // Saída: { x: 10, y: 20 }

let ponto3D: Pontos = { x: 10, y: 20, z: 30 };
console.log(ponto3D); // Saída: { x: 10, y: 20, z: 30 }



// ----------------------------------
type NumeroOuPonto = number | Ponto2D;

let numerox: NumeroOuPonto = 10;
console.log(numerox); // Saída: 10

let pontox: NumeroOuPonto = { x: 5, y: 8 };
console.log(pontox); // Saída: { x: 5, y: 8 }
