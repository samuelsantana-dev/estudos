import PropTypes from 'prop-types'
/**
 * Dessa forma vai aparecer no li uma do lado da outra
 * Aqui é onde vai acontecer a validação ls nod fragList da parte de baixo 
 */
 
function FragList(props){

    return(
        <>
        <li>{props.marca}  - {props.ano_lancamento}
        </li>
        </>
    )
}
/**
 * O minusculo é apenas para chamar o arquivo o resto tem que ser igual o PropTypes la de cima
 */
FragList.propTypes = {
    marca:PropTypes.string,
    ano_lancamento:PropTypes.number
}
/**
 * Essa forma de valicao tambemm vale usando o default props como sao os exemplos que é ate mais facil
 */
FragList.defaultProps = {
    marca:  'faltou marcar', 
    ano_lancamento: 0
}   

export default FragList