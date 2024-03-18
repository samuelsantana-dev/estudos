interface BasketballPlayer {
    name: string;
    team: string;
    position: string;
    height: number;
    weight: number;
  }
  
  function displayPlayerInfo(player: BasketballPlayer): void {
    console.log(`${player.name} plays for ${player.team} as a ${player.position}.`);
    console.log(`Height: ${player.height} cm, Weight: ${player.weight} kg`);
  }
  
  const stephCurry: BasketballPlayer = {
    name: 'Stephen Curry',
    team: 'Golden State Warriors',
    position: 'Point Guard',
    height: 191,
    weight: 86,
  };
  
  displayPlayerInfo(stephCurry);
  

//   --------------------------------------------------

interface BasketballGame {
    homeTeam: string;
    awayTeam: string;
    date: Date;
    score: {
      home: number;
      away: number;
    };
  }
  
  function displayGameResult(game: BasketballGame): void {
    console.log(`${game.homeTeam} vs ${game.awayTeam}`);
    console.log(`Date: ${game.date.toDateString()}`);
    console.log(`Score: ${game.score.home} - ${game.score.away}`);
  }
  
  const game1: BasketballGame = {
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Miami Heat',
    date: new Date('2024-03-16'),
    score: {
      home: 110,
      away: 105,
    },
  };
  
  displayGameResult(game1);
  