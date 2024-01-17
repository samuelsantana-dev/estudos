//Chamar a minha funçao dentro da funçao 
// Video do guanabara

function fatorial(n){
    if(n==1){
        return 1
    } else {
      return  n * fatorial(n-1)
    }
}
console.log(fatorial(19))