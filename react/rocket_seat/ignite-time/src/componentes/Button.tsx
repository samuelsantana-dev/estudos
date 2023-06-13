import { ButtonPai, ButtonCores} from './Button.styles.ts'

//Aqui esta conectando com com onde esta guardedo as cores no outro arquivo
interface buttonPropriedades{
    cores?: ButtonCores
}

export function Button( {cores = 'primary'}: buttonPropriedades){
    return(
        <>
            {/*Aqui esta conectando com o  return `background-color: ${buttonCores[props.cores]}` do outro codigo */}
            <ButtonPai cores={cores}> Enviar</ButtonPai>
        </>
    )
}