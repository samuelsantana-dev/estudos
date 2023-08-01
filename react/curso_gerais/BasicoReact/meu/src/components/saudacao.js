function Saudacao({ nome }){

    function gerarSaudacao(){
        return(  <p>{`Olá, ${nome} tudo certo com voce?`}</p>)
    }

    return(
        <>
        <p>{nome && gerarSaudacao(nome)}</p>
        </>
    )
}

export default Saudacao