import styled from 'styled-components'

export const Button = styled.button`
    color: white;
    font-size: ${({ theme }) => theme.font.size.xs};
    border: solid blue 4px;
    background-color: transparent;
    width:  18rem;
    height: 5rem;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    ${({ theme }) => theme.mq.desktop}  {
        width:  25rem;
        height: 8rem;
        font-size: ${({ theme }) => theme.font.size.s};
        margin: 0 20px;
    }
`