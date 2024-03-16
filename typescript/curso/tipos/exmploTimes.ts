interface Time {
    nome: string;
    pais: string;
    liga: string;
    titulos: number;
  }

  
  const flamengo: Time = {
    nome: "Clube de Regatas do Flamengo",
    pais: "Brasil",
    liga: "Campeonato Brasileiro Série A",
    titulos: 7,
  };
  
  const realMadrid: Time = {
    nome: "Real Madrid Club de Fútbol",
    pais: "Espanha",
    liga: "La Liga",
    titulos: 35,
  };

  function timesDaLiga(liga: string): Time[] {
    const times: Time[] = [flamengo, realMadrid];
    return times.filter((time) => time.liga === liga);
  }
  
  const timesBrasileiros = timesDaLiga("Campeonato Brasileiro Série A");
  console.log(timesBrasileiros); // [flamengo]
  
  function compararTitulos(time1: Time, time2: Time): number {
    return time1.titulos - time2.titulos;
  }
  
  const resultado = compararTitulos(flamengo, realMadrid);
  console.log(resultado); // -28
  