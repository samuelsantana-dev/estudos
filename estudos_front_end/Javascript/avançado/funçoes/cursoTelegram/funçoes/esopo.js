//Variave global
/**
 * Pode ser usada em qualquer funçao 
 */

let global = 'global'
function testeUm(){
    let global = 'Global Novo'
    console.log(global)
}
testeUm()

//Variavel Local 
/**
 * So pode ser usada dentro da funçao 
 */
function testeDois(){
    let local = 'Teste'

    if(local === 'Teste'){
    local = 'Teste Atualizado'
    console.log(local)
    }   
    
}

testeDois()

// 
