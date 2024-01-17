// Velocidade maxima de ate 70
// a cada 5km acima do limite voce ganhar 1 ponto
//Match floor() -- ajuste de decimal
// caso pontos maior que 12 -> 'carteira suspensa'
/* pod-se criar varios if e elses dentro do primeiro else*/


verificarVelocidade(70); /*é onde recebe o valor.  primordial pro codigo,valor do cliente*/

function verificarVelocidade(Velocidade) { 

    if (Velocidade <= 70) {
        console.log('Tudo ok')
    } else {
        const pontos = Math.floor(((Velocidade - 70 ) / 5 ));
        if (pontos >= 12) {
            console.log('CARTEIRA Suspensa')}
         else {
            console.log('pontos',pontos)
        }
    }
}

/*o parametro velocidade ele fica como valor de veificar velocidade. O verificarVelocidade é o general e o parametro seu soldado so que o parametro velocidade so vale para verificarVelocidade*/

// o parametro é o valor do cliente,onde voce vai usar para fazer os calculos com o que pode e nao pode
