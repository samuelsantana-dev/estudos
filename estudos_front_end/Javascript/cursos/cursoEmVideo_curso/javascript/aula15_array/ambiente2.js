let num = [5,7,2,9,1,3,4]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor esta na posiçao ${pos}`)
}
