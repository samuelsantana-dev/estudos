interface EstatisticaJogo {
    gols: number;
    assistencias: number;
    finalizacoes: number;
    passesCertos: number;
    faltasCometidas: number;
  }
  
  

  type HistoricoJogos<EstatisticaJogo> = {
    data: Date;
    adversario: string;
    placar: string;
    estatisticas: EstatisticaJogo;
  };
  
  const historicoFlamengo: HistoricoJogos<EstatisticaJogo>[] = [
    {
      data: new Date("2023-11-13"),
      adversario: "Corinthians",
      placar: "2x1",
      estatisticas: {
        gols: 2,
        assistencias: 1,
        finalizacoes: 10,
        passesCertos: 80,
        faltasCometidas: 5,
      },
    },
    // ...
  ];


  
//   5. Tupla para jogadores:

function jogadorComEstatistica(jogador: Jogador, estatistica: EstatisticaJogo): {
    nome: string;
    numero: number;
    posicao: string;
    estatisticas: EstatisticaJogo;
  } {
    return {
      nome: jogador[0],
      numero: jogador[1],
      posicao: jogador[2],
      estatisticas: estatistica,
    };
  }
  
  const gabigolComEstatistica = jogadorComEstatistica(jogadoresFlamengo[0], historicoFlamengo[0].estatisticas);
  console.log(gabigolComEstatistica);

  
  


  