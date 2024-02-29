//nome

console.log(process.argv)

const argum = process.argv.slice(2)

console.log(argum)

const nome = argum[0].split('=')[1]

console.log(nome)

//idade

const idade = argum[1].split('=')[1]

console.log(idade)

console.log(`Ola meu nome é ${nome} e tenho ${idade} anos`)
