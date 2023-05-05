fetch('https://jsonplaceholder.typicode.com/users')
 .then(resposta => {
    //Estou mostrando os metodos dele os parametros dele 
    console.log('resposta ', resposta)
    //Aqui eu transformei em objetos 
    return resposta.json()
})
//Aqui eu estou mostrando os usuarios é necessario ter tranformado antes em objeto como no return acima usando o metodo json
 .then(users => {console.log(users)})
 //Aqui eu estou mostrando os erros 
 .catch(error => {console.log(error)})
