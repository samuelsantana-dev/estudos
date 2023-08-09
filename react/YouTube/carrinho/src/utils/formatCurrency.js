// Definição da função formatCurrency que formata um valor numérico como uma string de moeda formatada
// A função recebe dois parâmetros: 'value' (valor numérico a ser formatado) e 'currency' (tipo de moeda)
const formatCurrency = (value, currency) => {

  // Utiliza o método toLocaleString para formatar o valor numérico como uma string de moeda formatada
  // O primeiro parâmetro 'pt-br' especifica o local (no caso, Português do Brasil) para formatar a moeda de acordo com as convenções locais
  // O segundo parâmetro é um objeto que configura o estilo como 'currency' (formato de moeda) e a moeda a ser usada
  return value.toLocaleString('pt-br', { style: 'currency', currency });
  
};

// Exporta a função formatCurrency para que possa ser importada e usada em outros módulos
export default formatCurrency;

