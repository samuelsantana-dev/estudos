interface User {
    nome: string
    bio: string
    idade: number
}

function somarIdades(users: User[]){
    let sum = 0 

    for( const user of users){
         sum = user.idade
    }

    return sum
}

const somarTodasIdadesDeUsuarios = somarIdades([{
    nome: 'Samuel',
    bio: 'Desenvolvedor Web',
    idade: 19
}])