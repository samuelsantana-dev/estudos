// Interface para representar um personagem de Game of Thrones
interface Personagem {
    nomeGameOfThrones: string;
    tituloGameOfThrones: string;
  }
  
  // Classe para representar um personagem de Game of Thrones
  class PersonagemGOT {
    // Shorthand para definir as propriedades no construtor
    constructor(public nomeGameOfThrones: string, public tituloGameOfThrones: string) {}
  
    // Método para exibir informações do personagem
    exibirInfo(): void {
      console.log(`Nome: ${this.nomeGameOfThrones}, Título: ${this.tituloGameOfThrones}`);
    }
  }
  
  // Criando instâncias da classe PersonagemGOT
  const jonSnow = new PersonagemGOT('Jon Snow', 'King in the North');
  const daenerysTargaryen = new PersonagemGOT('Daenerys Targaryen', 'Mother of Dragons');
  const tyrionLannister = new PersonagemGOT('Tyrion Lannister', 'Hand of the Queen');
  
  // Exibindo informações sobre os personagens de Game of Thrones
  jonSnow.exibirInfo();
  daenerysTargaryen.exibirInfo();
  tyrionLannister.exibirInfo();
  