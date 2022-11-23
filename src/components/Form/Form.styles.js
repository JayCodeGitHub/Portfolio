import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        justify-content: space-around;
        ${({ theme }) => theme.mq.desktop} {        
            height: 22vw;
            width: 100%;
        }
        ${({ theme }) => theme.mq.bigDesktop} {        
            height: 16vw;
        }
        
    }
    input {
        width: 40%;
        height: 4rem;
        border-radius: 0.5rem;
        border: 2px solid white;
        background-color: transparent;
        color: white;
        &::placeholder {
            color: white;
            opacity: 0.5;
        }
    }
    textarea {
        width: 90%;
        border-radius: 0.5rem;
        border: none;
        border: 2px solid white;
        background-color: transparent;
        color: white;
        margin: 4rem 0;
        &::placeholder {
            color: white;
            opacity: 0.5;
        }
        ${({ theme }) => theme.mq.desktop} {        
            margin: 0;
        }
    }
`

export const ButtonWrapper = styled.div`
    margin-left: 5rem;
`