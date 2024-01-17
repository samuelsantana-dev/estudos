function novotelefone(){
    let form = document.querySelector('#form')
    let novotelefone = form.children[0].cloneNode(true)
    const posiçaoNumerica = form.children.length + 1
    novotelefone.querySelector('label').innerText = 'telefone' + posiçaoNumerica
    console.log(form.appendChild(novotelefone))

    //O children[0] vai sempre retornar o primeiro elemento ou seja sempre o elemento inicial

    //Sempre usar concatenaçao que pode usar para varias situaçoes o length,era o tamanho do formulario completo foi ele que fez ficar dinamico  de seguir em ordem de um por um
}

function imprimirtelefone(){
    let mensagem = ''
    let todosTelefones = document.querySelectorAll("input[name='input']")
    todosTelefones.forEach((phone,index) => {
        mensagem += "telefone " + (index + 1) + ": " + phone.value + "\n"
    });
    alert(mensagem)
    //Dessa forma vai mostrar o valor de cada input que foi adicionador automaticamente

    //O /n vai adicionar no alert 
}