//Chamar minha APIs
fetch('https://jsonplaceholder.typicode.com/users')
//Mostrar os parametros dela com o metodo then()
    .then(response => {console.log('Resposta', response)
    //Transformar em objetos usando o return e o json()
    return response.json()
})
//Mostrar os usuarios dela com o metodo then()
    .then(users => {console.log(users)})
//Mostrar algo caso de um erro 
    .catch(erro => {console.log("Deu erro")})