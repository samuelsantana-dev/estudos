interface UserInterface {
    name: string;
    age: number;
}

interface AuthorInterface {
    books: string[];
}

interface TimeInterface {
    nome: string;
    pais: string;
    liga: string;
    titulos: number;
}

const userinterface: UserInterface = {
    name: "Alice",
    age: 25
};

const timeinterface: TimeInterface = {
    nome: "Clube de Regatas do Flamengo",
    pais: "Brasil",
    liga: "Campeonato Brasileiro Série A",
    titulos: 7
}

const juntou: UserInterface & AuthorInterface = {
    name: 'Samuel',
    age: 25,
    books: ['book 1', 'book 2']
}

// -----------------------------------------
console.log(juntou)

// -----------------------------------------
console.log(userinterface && timeinterface)