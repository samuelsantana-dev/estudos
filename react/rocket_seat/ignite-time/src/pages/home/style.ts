import styled from "styled-components";

export const HomeContainer = styled.main `
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const BaseButton = styled.button`

    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
    font-weight: bold;

    cursor: pointer;

 
    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

  

`

export const StartButton = styled(BaseButton)`
    background: ${(props) => props.theme['green-600']};
    color: ${(props) => props.theme['gray-1400']};

    &:not(:disabled):hover{
        background: ${(props) => props.theme['green-800']};
     }

`

export const PararCicloAtual = styled(BaseButton)`
     background: ${(props) => props.theme['red-900']};
     color: ${(props) => props.theme['white']};

    &:not(:disabled):hover{
        background: ${(props) => props.theme['red-900']};
     }
`