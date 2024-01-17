//1 Passo localizar os valores de cada um

function botao() {
     let inputNome = document.querySelector('#nome').value
     let selectCor = document.querySelector("select[id='selecionar'] option:checked").text
     let checkedNs = document.querySelector("div[id='programar'] input:checked").text
     let conhecimento = document.querySelectorAll("div[id='res'] input:checked").value

    alert( 'teste  '  + inputNome + ' ' + selectCor + ' ' +  checkedNs + ' ' + conhecimento)
}

//Olhar a forma que o guanabara fez para localizxar no curso dele 
//Essa aula esta em 01;01 do curso do telegram 

