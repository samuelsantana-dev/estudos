function getDataFromAPI(): unknown {
    // ... busca dados de uma API
    return { nome: "João Silva", idade: 30 };
  }
  function getUserInfo() {
    const data = getDataFromAPI() as { nome: string; idade: number }; // Type assertion
    console.log(data.nome); // Agora você pode acessar "nome" com segurança
  }

  function calcularArea(raio: number) {
    // ... lógica de cálculo de área
  }
  
  const entradaUsuario = prompt("Digite o raio do círculo:");
  
  // Risky! Potencial para erros se a entrada não for um número
  
  const raio = calcularArea(entradaUsuario as unknown as number);