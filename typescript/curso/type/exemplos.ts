type Ponto = {
    x: number;
    y: number;
};

// Exemplo de uso do tipo 'Ponto'
let ponto: Ponto = { x: 10, y: 20 };
console.log("Coordenadas do ponto:", ponto);


type Usuario = {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
};

// Exemplo de uso do tipo 'Usuario'
let usuario: Usuario = { nome: "Ana", idade: 30 };
console.log("Informações do usuário:", usuario);

type NumeroOuString = number | string;

// Função que recebe um parâmetro do tipo 'NumeroOuString'
function imprimirValor(valor: NumeroOuString): void {
    console.log("Valor:", valor);
}

// Exemplos de uso da função 'imprimirValor'
imprimirValor(10);       // Saída: Valor: 10
imprimirValor("Olá");    // Saída: Valor: Olá


