import styled from 'styled-components';

//Armazenar o nome das cores
export type ButtonCores = 'primary' | 'secundary' | 'Danger' | 'sucess'


//Guardou as cores e guarda as propriedasdes do botao
interface buttonPaiPropriedades  {

    //As cores do meu button ficam guardadas aqui
    cores: ButtonCores
}

//Esta exportandoo button
export const ButtonPai = styled.button<buttonPaiPropriedades>`

//Esta definindo os estilos do botao
    width: 90px;
    height: 90px;
    margin: 1rem;

    //o theme é o que esta no app.tsx
    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
`
 /*   ${ => {
        return `background-color: ${buttonCores[props.cores]}`
    }}
    */
//No caso no video é variante no meu é cores