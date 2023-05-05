function salvar(e){
    let input = document.querySelector("input[name='name']").value
    
    let select = document.querySelector("select[name='programa']").value

    alert("Seu nome é: " + input + "\n Voce programa em: " + select)
}