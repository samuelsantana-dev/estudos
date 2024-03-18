// Interface para representar um personagem da Marvel
interface MarvelCharacter {
    name: string;
    alias?: string; // Nome de herói ou codinome (opcional)
    powers: string[]; // Lista de poderes
    appearances: string[]; // Lista de filmes ou séries em que o personagem apareceu
  }
  
  // Interface para representar um filme da Marvel
  interface MarvelMovie {
    title: string;
    releaseYear: number;
    director: string;
    characters: MarvelCharacter[];
  }
  
  // Função para exibir informações sobre um personagem da Marvel
  function displayCharacterInfo(character: MarvelCharacter): void {
    console.log(`Name: ${character.name}`);
    if (character.alias) {
      console.log(`Alias: ${character.alias}`);
    }
    console.log('Powers:');
    character.powers.forEach(power => console.log(`- ${power}`));
    console.log('Appearances:');
    character.appearances.forEach(appearance => console.log(`- ${appearance}`));
    console.log('-------------------------');
  }
  
  // Função para exibir informações sobre um filme da Marvel
  function displayMovieInfo(movie: MarvelMovie): void {
    console.log(`Title: ${movie.title}`);
    console.log(`Release Year: ${movie.releaseYear}`);
    console.log(`Director: ${movie.director}`);
    console.log('Characters:');
    movie.characters.forEach(displayCharacterInfo);
  }
  
  // Definindo um filme da Marvel
  const avengersEndgame: MarvelMovie = {
    title: 'Avengers: Endgame',
    releaseYear: 2019,
    director: 'Anthony Russo, Joe Russo',
    characters: [
      { name: 'Tony Stark', alias: 'Iron Man', powers: ['Genius-level intellect', 'Powered armor suit'], appearances: ['Iron Man', 'The Avengers', 'Avengers: Endgame'] },
      { name: 'Steve Rogers', alias: 'Captain America', powers: ['Superhuman strength', 'Agility', 'Durability'], appearances: ['Captain America: The First Avenger', 'The Avengers', 'Avengers: Endgame'] },
      // Outros personagens
    ],
  };
  
  // Exibindo informações sobre o filme da Marvel
  displayMovieInfo(avengersEndgame);

  
//   ------------------------------------

// Interface para representar um personagem da DC
interface DCCharacter {
    name: string;
    alias?: string; // Nome de herói ou codinome (opcional)
    abilities: string[]; // Lista de habilidades
    appearances: string[]; // Lista de filmes ou séries em que o personagem apareceu
  }
  
  // Interface para representar um filme da DC
  interface DCMovie {
    title: string;
    releaseYear: number;
    director: string;
    characters: DCCharacter[];
  }
  
  // Função para exibir informações sobre um personagem da DC
  function displayCharacterInfoT(character: DCCharacter): void {
    console.log(`Name: ${character.name}`);
    if (character.alias) {
      console.log(`Alias: ${character.alias}`);
    }
    console.log('Abilities:');
    character.abilities.forEach(ability => console.log(`- ${ability}`));
    console.log('Appearances:');
    character.appearances.forEach(appearance => console.log(`- ${appearance}`));
    console.log('-------------------------');
  }
  
  // Função para exibir informações sobre um filme da DC
  function displayMovieeInfo(movie: DCMovie): void {
    console.log(`Title: ${movie.title}`);
    console.log(`Release Year: ${movie.releaseYear}`);
    console.log(`Director: ${movie.director}`);
    console.log('Characters:');
    movie.characters.forEach(displayCharacterInfoT);
  }
  
  // Definindo um filme da DC
  const theDarkKnight: DCMovie = {
    title: 'The Dark Knight',
    releaseYear: 2008,
    director: 'Christopher Nolan',
    characters: [
      { name: 'Bruce Wayne', alias: 'Batman', abilities: ['Genius-level intellect', 'Expert detective skills', 'Peak human physical condition'], appearances: ['Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'] },
      { name: 'The Joker', abilities: ['High intelligence', 'Expert in chemical engineering', 'Master of manipulation'], appearances: ['The Dark Knight'] },
      // Outros personagens
    ],
  };
  
  // Exibindo informações sobre o filme da DC
  displayMovieeInfo(theDarkKnight);
  