// A promisse ela é um objeto 

let p = new Promise((resolve, reject) => {
    let soma = 1 + 5
    if(soma == 2){
        resolve('Sucesso')
    } else {
        reject('Erro')
    }
})

p.then((mensagem)=>{
    console.log('A mensagem foi then ' + mensagem)
}).catch((erro)=>{
    console.log('A mensagem foi catch ' + erro)
})
