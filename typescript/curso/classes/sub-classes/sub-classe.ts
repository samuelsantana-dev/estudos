class Bicicleta {
  marca: string;
  modelo: string;
  numeroMarchas: number;
  aro: number;

  constructor(marca: string, modelo: string, numeroMarchas: number, aro: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.numeroMarchas = numeroMarchas;
    this.aro = aro;
  }

  apresentar() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Número de marchas: ${this.numeroMarchas}`);
    console.log(`Aro: ${this.aro} polegadas`);
  }
}

// -----------------------------------------
class BicicletaEstrada extends Bicicleta {
  tipoGuidon: string;
  materialQuadro: string;

  constructor(
    marca: string,
    modelo: string,
    numeroMarchas: number,
    aro: number,
    tipoGuidon: string,
    materialQuadro: string
  ) {
    super(marca, modelo, numeroMarchas, aro);
    this.tipoGuidon = tipoGuidon;
    this.materialQuadro = materialQuadro;
  }

  apresentarBicicletaEstrada() {
    super.apresentar();
    console.log(`Tipo de guidão: ${this.tipoGuidon}`);
    console.log(`Material do quadro: ${this.materialQuadro}`);
  }
}


// ------------------------
