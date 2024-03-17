class Carro {
    marca: string;
    modelo: string;
    ano: number;
  
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    acelerar(): void {
      console.log(`${this.marca} ${this.modelo} está acelerando!`);
    }
  
    parar(): void {
      console.log(`${this.marca} ${this.modelo} parou.`);
    }
  }
  
  // Criando uma instância da classe Carro
  const meuCarro = new Carro('Toyota', 'Corolla', 2022);
  
  // Usando métodos da instância
  meuCarro.acelerar();
  meuCarro.parar();
  