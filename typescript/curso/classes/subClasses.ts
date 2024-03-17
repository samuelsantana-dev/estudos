// Superclasse
class CorpoCeleste {
    nome: string;
    massa: number;
    distanciaDaTerra: number;
  
    constructor(nome: string, massa: number, distanciaDaTerra: number) {
      this.nome = nome;
      this.massa = massa;
      this.distanciaDaTerra = distanciaDaTerra;
    }
  
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Massa: ${this.massa} kg`);
      console.log(`Distância da Terra: ${this.distanciaDaTerra} km`);
    }
  }
  
  // Subclasse Estrela
  class Estrela extends CorpoCeleste {
    tipo: string;
  
    constructor(nome: string, massa: number, distanciaDaTerra: number, tipo: string) {
      super(nome, massa, distanciaDaTerra);
      this.tipo = tipo;
    }
  
    exibirInformacoes(): void {
      super.exibirInformacoes();
      console.log(`Tipo: ${this.tipo}`);
    }
  }
  
  // Subclasse Planeta
  class Planeta extends CorpoCeleste {
    numeroDeLuas: number;
  
    constructor(nome: string, massa: number, distanciaDaTerra: number, numeroDeLuas: number) {
      super(nome, massa, distanciaDaTerra);
      this.numeroDeLuas = numeroDeLuas;
    }
  
    exibirInformacoes(): void {
      super.exibirInformacoes();
      console.log(`Número de Luas: ${this.numeroDeLuas}`);
    }
  }
  
  // Subclasse Satélite
  class Satelite extends CorpoCeleste {
    planetaPrincipal: string;
  
    constructor(nome: string, massa: number, distanciaDaTerra: number, planetaPrincipal: string) {
      super(nome, massa, distanciaDaTerra);
      this.planetaPrincipal = planetaPrincipal;
    }
  
    exibirInformacoes(): void {
      super.exibirInformacoes();
      console.log(`Planeta Principal: ${this.planetaPrincipal}`);
    }
  }
  
  // Criando instâncias das subclasses
  const sol = new Estrela('Sol', 1.989 * Math.pow(10, 30), 0, 'Anã Amarela');
  const terra = new Planeta('Terra', 5.972 * Math.pow(10, 24), 0, 1);
  const lua = new Satelite('Lua', 7.342 * Math.pow(10, 22), 384400, 'Terra');
  
  // Exibindo informações
  sol.exibirInformacoes();
  console.log('-------------------------');
  terra.exibirInformacoes();
  console.log('-------------------------');
  lua.exibirInformacoes();
  