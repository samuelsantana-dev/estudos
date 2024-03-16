// Definindo um enum chamado "DiasDaSemana"
enum DiasDaSemana {
    Domingo = 1,    // Valor 1
    Segunda,        // Valor 2
    Terça,          // Valor 3
    Quarta,         // Valor 4
    Quinta,         // Valor 5
    Sexta,          // Valor 6
    Sábado          // Valor 7
}

// Usando o enum
let dia: DiasDaSemana = DiasDaSemana.Segunda;
console.log("Hoje é", DiasDaSemana[dia]);

// Exemplo de uma função que usa o enum
function verificarFimDeSemana(dia: DiasDaSemana): boolean {
    return dia === DiasDaSemana.Sábado || dia === DiasDaSemana.Domingo;
}

// Usando a função com um parâmetro do tipo enum
let hoje: DiasDaSemana = DiasDaSemana.Quarta;
if (verificarFimDeSemana(hoje)) {
    console.log("É fim de semana!");
} else {
    console.log("Não é fim de semana.");
}
