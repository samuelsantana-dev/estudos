function calcular1(){
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    let res = document.getElementById('res')

    if( nome !== '' && altura !== '' && peso !== '' ){
        // começa o calculo de tudo
        const calculoIMC = (peso / (altura*altura)).toFixed(2);

        let cliente = '';
        if( calculoIMC < 18.5 ){
            // abaixo do peso
           cliente = 'Você está abaixo do peso' 
        } else if(calculoIMC < 25){
            // peso ideal
            cliente = 'Você está no peso ideal.Parabéns!!'
        } else if(calculoIMC < 30){
            // levemente acima do peso
            cliente = 'Você está um pouco acima do peso,cuide da sua alimentaçao'
        } else if(calculoIMC < 35) {
            // 35 com obesidade grau 1
            cliente = 'Você está com Obesidade grau 1'
        } else if(calculoIMC < 40){
            // 40 com obesidade grau 2
            cliente = 'Você está com obesidade de grau 2,cuide da sua saúde'
        } else {
            // com obesidade grau 3 cuidado!!
            cliente = 'Você está com obesidade grau 3,faça um tratamento urgente!'
        }

        res.innerHTML = `<p>Olá ${nome} o seu IMC é ${calculoIMC}. <br> ${cliente}</p>`
        res.style.textAlign = 'center'
    } else {
        res.innerHTML = 'Cuidado!! Nao pule nenhum passo adicionar todos os valores,corretamente'
    }


}
// pode criar variaveis dentro de if e else.
   /* res.innerHTML = `${nome} voce tem ${altura} de altura e voce pesa ${peso},então voce esta acima do peso `*/