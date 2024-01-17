let valor = 'teste'

function calculadora(numero1, operador, numero2){
    
    let resultado

    switch (operador) {
        case  "+":
            resultado = numero1 + numero2
            break;
        case  "-": 
            resultado = numero1 - numero2
            break;
        case  "*":
            resultado = numero1 * numero2
            break;
        case "/":
            resultado = numero1 / numero2
            break
        default:
            //Erro nao apareceu 
            console.log('Coloque os valores corretamente')
            break;
    }

    return resultado
}

console.log(calculadora(5, '*', 10))