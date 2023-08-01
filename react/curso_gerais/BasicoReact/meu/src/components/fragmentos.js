import FragList from './fragList'

/**
 * Se as alteraçoes daqui estiverem erradas e diferentes daqui estao na fragList.js o DevTolls tem que reclamar
 * Aqui recebe o arquivo fragList o <li> de lá
 */
function Fragmento(){
    return(
        <>
         <h2>Nova lista</h2>
            <ul>
        <FragList marca="celta" ano_lancamento={858}  />
        <FragList marca={585} ano_lancamento="tempo" />
        <FragList marca="Moto" ano_lancamento={2022} />
            </ul>
        </>

    )
}

export default Fragmento