//A contagem sempre começa do 0


//getElementById('')
function funçao(){
    let element = document.getElementById('text').value
    console.log(element)
}

//getElementsByName('') olhar o detalhe do s
function funçao1(){

    let elements = document.getElementsByName('celular')
   // console.log(elements)
    console.log(elements[0].value)

    //Consegue pegar varios elementos de uma vez mas retornando o valor de um por um ate o momento
}

//querySelectorAll('')
  function funçao2(){
    let elements = document.querySelectorAll("div#input input[name=celular]")
    console.log(elements)
}   

//getElementsByTagName
function funçao3(){
    let tag = document.getElementsByTagName('input')
    console.log(tag)
    //Ele pega varios inputs ao mesmo tempo,ele pegou todos que estavam no html mas da para separar pela div tambem
}