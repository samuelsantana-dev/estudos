// Representa um conjunto de valores nomeados.
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Verde"] = 1] = "Verde";
    Cores[Cores["Azul"] = 2] = "Azul";
    Cores[Cores["Amarelo"] = 3] = "Amarelo";
})(Cores || (Cores = {}));
var corFavorita = Cores.Verde;
console.log(corFavorita);
