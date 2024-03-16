// Exemplo 1: Definindo um tipo que pode ser número ou null:

type NumeroOuNull = number | null;

// Exemplos de uso do tipo 'NumeroOuNull'
let numerosd: NumeroOuNull = 10;
console.log("Número:", numero); // Saída: Número: 10

numerosd = null;
console.log("Número:", numero); // Saída: Número: null

// -----------------------
// Exemplo 2: Definindo um tipo que pode ser string ou null:
type StringOuNull = string | null;

// Exemplos de uso do tipo 'StringOuNull'
let texto: StringOuNull = "Olá";
console.log("Texto:", texto); // Saída: Texto: Olá

texto = null;
console.log("Texto:", texto); // Saída: Texto: null

// -------------------
// Exemplo 3: Definindo um tipo que pode ser objeto ou null:
type ObjetoOuNull = { chave: string } | null;

// Exemplos de uso do tipo 'ObjetoOuNull'
let objeto: ObjetoOuNull = { chave: "valor" };
console.log("Objeto:", objeto); // Saída: Objeto: { chave: "valor" }

objeto = null;
console.log("Objeto:", objeto); // Saída: Objeto: null


