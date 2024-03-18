function somarArray(numeros: number[]): number {
    let soma: number = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
}

let numerosTeste: number[] = [1, 2, 3, 4, 5];
console.log(somarArray(numeros)); // Saída: 15

function encontrarMaior(numeros: number[]): number {
    let maior: number = numeros[0];
    for (let numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }
    return maior;
}

let numberss: number[] = [10, 5, 20, 8, 15];
console.log(encontrarMaior(numeros)); // Saída: 20

function filtrarPares(numeros: number[]): number[] {
    return numeros.filter(numero => numero % 2 === 0);
}

let number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros)); // Saída: [2, 4, 6, 8, 10]

function dobrarNumeros(numeros: number[]): number[] {
    return numeros.map(numero => numero * 2);
}

let numerosArray: number[] = [1, 2, 3, 4, 5];
console.log(dobrarNumeros(numeros)); // Saída: [2, 4, 6, 8, 10]
