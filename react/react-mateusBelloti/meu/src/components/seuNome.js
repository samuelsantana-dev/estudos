function SeuNome({setNome}){

    return(
        <div>
            <input type="text" placeholder="Escreva algo" onChange={(e) => setNome(e.target.value)} />
        </div>
    )
}

export default SeuNome