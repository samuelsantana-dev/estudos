// Definindo um enum chamado "TamanhoCamisa"
enum TamanhoCamisa {
    Pequeno = "P",
    Médio = "M",
    Grande = "G"
}

// Função que converte uma string para o tipo TamanhoCamisa usando type assertion
function validarTamanho(tamanho: string): TamanhoCamisa {
    // Convertendo para o tipo TamanhoCamisa usando type assertion
    return tamanho as TamanhoCamisa;
}

// Exemplo de uso da função com type assertion
let tamanho: string = "M";
let tamanhoCamisa: TamanhoCamisa = validarTamanho(tamanho);

console.log("O tamanho da camisa é:", tamanhoCamisa);
