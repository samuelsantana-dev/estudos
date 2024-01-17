let nome = 'Brasil'

function conferir(){

    return new Promise((resolve, reject)=>{
        if(nome == 'Brasil' || nome == 'Flamengo'){
            resolve({
                name: 'CORRETO!! Flamengo ou Brasil ',
                mensagem:' Realizado'
            })
        } else {
            reject({
                name: 'Voce escreveu o nome errado ',
                mensagem: ' Qual o melhor time ?'
            })
        }
    })
}

conferir().then((result)=>{
    console.log(result.name + result.mensagem)
}).catch((rejeitado)=>{
    console.log(rejeitado.name + rejeitado.mensagem)
})
