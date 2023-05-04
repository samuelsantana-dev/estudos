// multiplos de 3 - 5,6,9
// Multiplos de 5 -- 5,10
// somar os multiplos

somar(10) 
function somar(limite) {
    multiplosDe3 = 0;
    multiplosDe5 = 0;
    for(i = 0;i <= limite;i++) {
        if(i % 3 === 0) {
            multiplosDe3 += i; 
        } if(i % 5 === 0) {
            multiplosDe5 += i;
        }
    }
    console.log(multiplosDe3 + multiplosDe5)
}
