// Interface para representar um dispositivo Samsung
interface DispositivoSamsung {
    modelo: string;
    numeroSerie: string;
    preco: number;
  }
  
  // Classe para representar um dispositivo Samsung
  class DispositivoEletronicoSamsung implements DispositivoSamsung {
    constructor(public modelo: string, public numeroSerie: string, public preco: number) {}
  
    ligar(): void {
      console.log(`${this.modelo} Samsung está ligado.`);
    }
  
    desligar(): void {
      console.log(`${this.modelo} Samsung está desligado.`);
    }
  }
  
  // Criando instâncias da classe DispositivoEletronicoSamsung
  const galaxyS21Samsung = new DispositivoEletronicoSamsung('Galaxy S21', 'SN123456', 3500);
  const galaxyTabS7Samsung = new DispositivoEletronicoSamsung('Galaxy Tab S7', 'SN789012', 1500);
  
  // Testando métodos da classe DispositivoEletronicoSamsung
  galaxyS21Samsung.ligar();
  galaxyTabS7Samsung.desligar();
  