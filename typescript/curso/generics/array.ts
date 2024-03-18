// Interface para representar um imóvel
interface Imovel {
    endereco: string;
    preco: number;
  }
  
  // Classe genérica para representar um fundo imobiliário
  class FundoImobiliario<T extends Imovel> {
    private imoveis: T[];
  
    constructor(imoveis: T[]) {
      this.imoveis = imoveis;
    }
  
    listarImoveis(): void {
      this.imoveis.forEach(imovel => console.log(`Endereço: ${imovel.endereco}, Preço: ${imovel.preco}`));
    }
  
    calcularValorTotal(): number {
      return this.imoveis.reduce((total, imovel) => total + imovel.preco, 0);
    }
  }
  
  // Criando instâncias de fundos imobiliários com diferentes tipos de imóveis
  const fundoResidencial = new FundoImobiliario([
    { endereco: 'Rua A, 123', preco: 200000 },
    { endereco: 'Rua B, 456', preco: 250000 }
  ]);
  
  const fundoComercial = new FundoImobiliario([
    { endereco: 'Av. X, 789', preco: 500000 },
    { endereco: 'Av. Y, 1011', preco: 750000 }
  ]);
  
  // Exibindo informações sobre os fundos imobiliários
  console.log('Fundo Residencial:');
  fundoResidencial.listarImoveis();
  console.log('Valor Total:', fundoResidencial.calcularValorTotal());
  
  console.log('Fundo Comercial:');
  fundoComercial.listarImoveis();
  console.log('Valor Total:', fundoComercial.calcularValorTotal());
  