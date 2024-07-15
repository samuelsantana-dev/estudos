/* letiaveis do input*/
let res = document.getElementById('res')


let form = document.getElementById('form')
form.addEventListener("submit", (e) => {
    e.preventDefault()

        let nome = document.getElementById('nome').value
        let altura = document.getElementById('altura').value
        let peso = document.getElementById('peso').value
        
        let alturaMetros = altura / 100
        const calculoImc = (peso / (alturaMetros*alturaMetros)).toFixed(2)
         
        if(nome !== '' && altura !== '' && peso !== ''){

        let cliente = '';
        if( calculoImc < 18.5 ){
            // abaixo do peso
           cliente = 'Você esta abaixo do peso'
        } else if(calculoImc >= 18.6 && calculoImc <= 24.9){
            // peso ideal
            cliente = 'Parabéns você esta no peso ideal'
        } else if(calculoImc >= 25.5 && calculoImc <= 29.9){
            // levemente acima do peso
            cliente = 'Você está levemente acima do peso'
        }  else if(calculoImc >= 30 && calculoImc <= 39.9 ){
              // 35 com obesidade grau 1
              cliente = 'Você está com obesidade grau 1'
        } else if(calculoImc >= 40 ){
            // 40 com obesidade grau 2
            cliente = 'Você está com obesidade grau 2'
        }  else {
            // com obesidade grau 3 cuidado!!
            cliente = 'Cuide-se você esta com obesidade grau 3,procure se cuidar urgentemente'
        } 
        res.innerHTML = `<p>Olá ${nome} o seu calculo imc é ${calculoImc}. <br> ${cliente}</p>`

     } else {
            alert('Preencha os campos corretamente')
        }
            limpar(form, res)
    })

    function limpar(form){
    let limpar = document.querySelector('#limpar')
    limpar.addEventListener('click', function(){

        form.reset()
        res.innerHTML = ''
    })
}


