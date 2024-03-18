class ChelseaTeam {
    // Propriedades públicas
    public name: string;
    public coach: string;
    public formation: string;
  
    // Propriedades privadas
    private captain: string;
    private stadium: string;
  
    // Propriedades protegidas
    protected totalPlayers: number;
  
    // Construtor
    constructor(name: string, coach: string, formation: string, captain: string, stadium: string) {
      this.name = name;
      this.coach = coach;
      this.formation = formation;
      this.captain = captain;
      this.stadium = stadium;
      this.totalPlayers = 11; // Valor inicial para totalPlayers
    }
  
    // Método público para exibir informações do time
    public displayTeamInfo(): void {
      console.log(`Team Name: ${this.name}`);
      console.log(`Coach: ${this.coach}`);
      console.log(`Formation: ${this.formation}`);
      console.log(`Captain: ${this.captain}`);
      console.log(`Stadium: ${this.stadium}`);
      console.log(`Total Players: ${this.totalPlayers}`);
    }
  
    // Método privado para atualizar total de jogadores
    private updateTotalPlayers(count: number): void {
      this.totalPlayers += count;
    }
  
    // Método protegido para adicionar jogador
    protected addPlayer(): void {
      this.updateTotalPlayers(1);
      console.log('New player added.');
    }
  
    // Método público para permitir acesso a métodos privados ou protegidos
    public modifyTotalPlayers(count: number): void {
      this.updateTotalPlayers(count);
    }
  }
  
  // Criando uma instância da classe ChelseaTeam
  const chelseaFC = new ChelseaTeam('Chelsea FC', 'Thomas Tuchel', '4-3-3', 'César Azpilicueta', 'Stamford Bridge');
  
  // Tentando acessar propriedades públicas diretamente
  console.log(chelseaFC.name); // Chelsea FC
  console.log(chelseaFC.coach); // Thomas Tuchel
  console.log(chelseaFC.formation); // 4-3-3
  
  // Tentando acessar propriedades privadas diretamente
  // console.log(chelseaFC.captain); // Erro: Property 'captain' is private and only accessible within class 'ChelseaTeam'
  // console.log(chelseaFC.stadium); // Erro: Property 'stadium' is private and only accessible within class 'ChelseaTeam'
  
  // Tentando acessar propriedades protegidas diretamente
  // console.log(chelseaFC.totalPlayers); // Erro: Property 'totalPlayers' is protected and only accessible within class 'ChelseaTeam'
  
  // Usando métodos públicos para exibir informações do time e modificar total de jogadores
  chelseaFC.displayTeamInfo();
  // Output:
  // Team Name: Chelsea FC
  // Coach: Thomas Tuchel
  // Formation: 4-3-3
  // Captain: César Azpilicueta
  // Stadium: Stamford Bridge
  // Total Players: 11
  
  chelseaFC.modifyTotalPlayers(1);
  chelseaFC.displayTeamInfo();
  // Output:
  // Team Name: Chelsea FC
  // Coach: Thomas Tuchel
  // Formation: 4-3-3
  // Captain: César Azpilicueta
  // Stadium: Stamford Bridge
  // Total Players: 12
  