import styled from 'styled-components'

export const Button = styled.button`
    font-size: ${({ theme }) => theme.font.size.xs};
    background-color: ${({ theme }) => theme.white};
    border: none;
    font-weight: 500;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 1.2rem;
    cursor: pointer;
    padding: 1.5rem 2.5rem;
    ${({ theme }) => theme.mq.desktop}  {
        font-size: ${({ theme }) => theme.font.size.s};
        margin: 0 20px;
        padding: 2rem 4.5rem;
    }
`

export default Button;