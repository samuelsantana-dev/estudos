interface CalcularPontuacao {
  (jogador1: number, jogador2: number): string;
}

const calcularPontuacaoSimples: CalcularPontuacao = (jogador1, jogador2) => {
  if (jogador1 >= 11 && jogador1 > jogador2 + 1) {
    return "Jogador 1 venceu!";
  } else if (jogador2 >= 11 && jogador2 > jogador1 + 1) {
    return "Jogador 2 venceu!";
  }
  return "Deuce!";
};

const resultadoMostrar = calcularPontuacaoSimples(10, 9); // "Deuce!"

const calcularPontuacaoVantagem: CalcularPontuacao = (jogador1, jogador2) => {
  if (jogador1 >= 10 && jogador1 > jogador2) {
    return "Vantagem para o jogador 1!";
  } else if (jogador2 >= 10 && jogador2 > jogador1) {
    return "Vantagem para o jogador 2!";
  }
  return "Deuce!";
};

const resultadoVantagem = calcularPontuacaoVantagem(11, 10); // "Vantagem para o jogador 1!"


// ----------------------------------------

interface DeterminarVencedorSet {
  (jogador1: number, jogador2: number): string;
}

const determinarVencedorSetSimples: DeterminarVencedorSet = (jogador1, jogador2) => {
  if (jogador1 >= 11 && jogador1 > jogador2 + 1) {
    return "Jogador 1 venceu o set!";
  } else if (jogador2 >= 11 && jogador2 > jogador1 + 1) {
    return "Jogador 2 venceu o set!";
  }
  return "Set empatado!";
};

const resultadoSetSimples = determinarVencedorSetSimples(10, 9); // "Set empatado!"

const determinarVencedorSetVantagem: DeterminarVencedorSet = (jogador1, jogador2) => {
  if (jogador1 >= 11 && jogador1 > jogador2) {
    return "Jogador 1 venceu o set!";
  } else if (jogador2 >= 11 && jogador2 > jogador1) {
    return "Jogador 2 venceu o set!";
  }
  return "Set empatado!";
};

const resultadoSetVantagem = determinarVencedorSetVantagem(12, 11); // "Jogador 1 venceu o set!"


// --------------------------------------------

