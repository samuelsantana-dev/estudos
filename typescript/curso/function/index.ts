const somarStringNumber = (x: number, y: number): string | number => {
    return x + y
}

console.log(somarStringNumber(1, 2)) //retorna string ou number somar


const somarString = (x: number, y: number): string => {
    return (x + y).toString();
}

console.log(somarString(1, 2)) //retorna string somar

const somar = (x: number, y: number) => {
    return x + y
}

console.log(somar(1, 2)) //retorna number