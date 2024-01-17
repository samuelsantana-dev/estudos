const objetoJson = [
    {
        nome: "Samuel Santana",
        idade: 19,
        verdadeiro: true,
        esportes_praticados: {
            futebol: "2 Vezes na semana",
            jiu_jitsu: "2 vezes na semana"
        },
        hobbies: ["Programar", "correr", "Ler"] 
    },
    {
        nome: "Crisyiano Ronaldo",
        idade: 35,
        verdadeiro_false: true,
        titulos:{
            laliga: 3,
            ligaDosCampeoes: 5
        },
        time: "Al hilal"
    }
]

//Transformar de objeto para json
const objetoPARAjson = JSON.stringify(objetoJson)
console.log(objetoPARAjson)

//Convertr json para objeto
const jsonPARAobjeto = JSON.parse(objetoPARAjson)
console.log(jsonPARAobjeto)
console.log(typeof jsonPARAobjeto)

jsonPARAobjeto.map((pessoa)=>{
    console.log(pessoa.nome)
    console.log(pessoa.titulos)
    console.log(pessoa.esportes_praticados)
})