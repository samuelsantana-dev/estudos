

//Localizar o button
const button = document.getElementById("button")

//Criar o addEventListener
button.addEventListener("click", function(){

    //Guardar Valores do input
    let nome = document.getElementById("nome").value
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

    //Localizar div que vou mostrar o resultado final
    let divResposta = document.getElementById("resposta")

    if(nome !== '' && altura !== '' && peso !== ''){

        //Calculo imc
        const calculo = (peso / (altura * altura)).toFixed(1)

        let texto = '';

        if(calculo < 18.5){
            texto = 'abaixo do peso.';
        } else if(calculo < 25 ){
            texto = 'com peso ideal. Parabéns!!!';
        } else if(calculo < 30){
            texto = 'levemente acima do peso.';
        } else if(calculo < 35){
            texto = 'com obesidade grau I.';
        }else if (calculo < 40){
            texto = 'com obesidade grau II';
        }else {
            texto = 'com obesidade grau III. Cuidado!!';
        }
    
        divResposta.textContent = `${nome} o seu calculo é ${calculo} e sua classificaçao é ${texto}`

    }else{
        divResposta.textContent = "preencha todo os campos"
    }
    
}
)

//"NaN" significa "Not a Number"


