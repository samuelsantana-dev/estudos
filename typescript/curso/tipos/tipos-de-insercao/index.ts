interface Pessoa {
    nome: string;
    idade: number;
  }
  
  let pessoaCinco: Pessoa & { email: string } = {
    nome: "João Silva",
    idade: 30,
    email: "joaosilva@email.com"
  };
  
//   number & string: Representa um valor que deve ser um número e uma string ao mesmo tempo.