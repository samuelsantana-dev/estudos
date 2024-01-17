function propsDois({ foto, pessoa, idade, pais}){
     /**
      * São {} que se usa no lugar props na function
      * Dessa forma não precisa usar props.nome por exemplo
      * 
      */
    return(
        <div>
            <img src={foto} />
            <p>
                Ola {pessoa}
            </p>
            <p>
                voce tem {idade} anos de vida
            </p>
            <p>
                E nasceu no {pais}
            </p>

        </div>
    )

}
export default propsDois