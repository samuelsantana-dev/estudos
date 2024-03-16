enum Permissoes {
    Leitura = 1,
    Escrita = 2,
    Execucao = 4,
    Todos = Leitura | Escrita | Execucao
  }
  
  let permissaoUsuario: Permissoes = Permissoes.Leitura | Permissoes.Escrita;
  
  if ((permissaoUsuario & Permissoes.Escrita) === Permissoes.Escrita) {
    console.log("O usuário tem permissão para escrever!");
  }
  