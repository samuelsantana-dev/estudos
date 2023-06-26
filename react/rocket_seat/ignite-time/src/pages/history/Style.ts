import styled from 'styled-components'

export const HistoryContainer = styled.main`

    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
    }

`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th{
            background: ${(props) => props.theme['gray-1600']};
            padding: 1rem;
            text-align: left;
            color: ${(props) => props.theme['gray-100']};
            line-height: 1.6;
                // font-size: 0.075rem; Esse tira os nomes e deixa o -
               // font-size: 0.075rem;

            &:first-child{
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
             }

            &:last-child{
                border-top-right-radius: 8px;
                padding-left: 1.5rem;
            }
        }

       

        td{
            background-color: ${(props) => props.theme['gray-1700']};
            border-top: 4px solid ${(props) => props.theme['gray-1400']};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

        &:first-child{
            padding-left: 1.5rem;
        }

        &:last-child{
            padding-right: 1.5rem;
        }

        }


    }
`