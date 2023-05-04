function OutraLista({ lista }){
    return(
        <>
        <h3>Nova Lista</h3>
        {lista.length > 0 ? (lista.map((lista, index) => <p key={index} >{lista}</p>)
        ) : (<p>Nao ha intens na lista:</p>)}
        </>
    )
}
/*
    * Se usa o if e else ternarios 
*/ 

export default OutraLista