let lista = document.querySelector("#usuarios")

fetch("teste.json")
.then((transformar) => {
    transformar.json().then((usuario) => {
        usuario.usuarios.map((value)=>{
            lista.innerHTML += 
            `
            <li>${value.nome} - ${value.idade} </li>
            `
        })
    })
})