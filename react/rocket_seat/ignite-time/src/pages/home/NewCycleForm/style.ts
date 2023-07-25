const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-1500']};
    font-weight: bold;
    font-size:1.125rem;
    padding: 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus{
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }

    &::placeholder{
        color: ${(props) => props.theme['gray-400']}
    }
`

export const Minutes = styled(BaseInput)`
    //O flex ele é um atalho para algumas propriedades do flex
    flex: 1;
`


export const TaskInput = styled(BaseInput)`
    // width: 4rem; no video esta assim mas no meu esta dando erro  
    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['green-700']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`