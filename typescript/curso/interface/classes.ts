// Relação entre Classes e Interfaces:

interface Animal {
    nome: string;
    especie: string;
  
    comer(): void;
  }
  
  class Mamifero implements Animal {
    nome: string;
    especie: string;
  
    constructor(nome: string) {
      this.nome = nome;
      this.especie = "Mamífero";
    }
  
    comer() {
      console.log(`O mamífero ${this.nome} está comendo.`);
    }
  }
  
  class Cachorro extends Mamifero {
    latir(): void {
      console.log(`O cachorro ${this.nome} está latindo.`);
    }
  }
  
  const rex = new Cachorro("Rex");
  rex.comer(); // "O mamífero Rex está comendo."
  rex.latir(); // "O cachorro Rex está latindo."


//   -------------------------------

interface Animal {
    nome: string;
    especie: string;
  
    comer(): void;
  }
  
  class Gato implements Animal {
    nome: string;
    especie: string;
  
    constructor(nome: string) {
      this.nome = nome;
      this.especie = "Gato";
    }
  
    comer() {
      console.log(`O Gato ${this.nome} está comendo.`);
    }
  }
  
  const goku = new Gato("Rex");
  goku.comer(); // "O Gato goku está comendo."
  

//   ------------------------
  