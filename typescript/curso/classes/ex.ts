interface IdragonBall {
    melhorPersonagem: number
    nome: string
    poderes: string
    treinador: string
}

class DragonBall implements IdragonBall {
    melhorPersonagem: number;
    nome: string;
    poderes: string;
    treinador: string;

    constructor( melhorPersonagem: number, nome: string, poderes: string, treinador: string ) {
        this.melhorPersonagem = melhorPersonagem;
        this.nome = nome;
        this.poderes = poderes;
        this.treinador = treinador;
    }

    mostrar() {
        console.log( this.melhorPersonagem, this.nome, this.poderes, this.treinador );
    }
}

const consoleLog = new DragonBall( 1, 'Goku', 'Super Força', 'Goku' );
consoleLog.mostrar()        