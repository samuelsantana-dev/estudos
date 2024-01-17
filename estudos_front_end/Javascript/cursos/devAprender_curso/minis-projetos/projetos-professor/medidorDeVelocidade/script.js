// Velocidade maxima de ate 70
// a cada 5km acima do limite voce ganhar 1 ponto
//Match floor() -- ajuste de decimal
// caso pontos maior que 12 -> 'carteira suspensa'
/* pod-se criar varios if e elses dentro do primeiro else*/

medidorVelocidade(7080)

function medidorVelocidade(velocidade) {
    const velocidadeMaxima = 70 
    const km = 5
    if ( velocidade <= velocidadeMaxima) {
        console.log('tudo ok')
    } else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima ) / km ));
        if( pontos >= 12) {
                console.log('carteira suspensa')
        } else {
            console.log('pontos',pontos)
        }
    } 
}