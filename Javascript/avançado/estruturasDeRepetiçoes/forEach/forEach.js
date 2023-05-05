

const arrayOBJ = [{nomeProduto: 'chuteira', valorProduto: 90, loja: 'centauro', porcentagem: 40},{nomeProduto: 'camisa', valorProduto: 150, loja: 'internet', porcentagem: 15}, {nomeProduto: 'Short', valorProduto: 60, loja: 'riachuelo', porcentagem: 35}
]


arrayOBJ.forEach((value) => {
    let contaDesconto = value.valorProduto * value.porcentagem
    let totalDesconto = value.valorProduto - contaDesconto
    console.log(` ${value.nomeProduto} O item tem de desconto ${totalDesconto}`)
})

arrayOBJ.forEach((value, indice, array)=>{
    console.log(value)
})

// Calcular um desconto com a porcentagem de cada produto


