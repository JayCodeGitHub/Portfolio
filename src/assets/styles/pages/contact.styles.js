import styled from 'styled-components'

export const Wrapper = styled.main`
    padding: 2.5vw;
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 15vw;
    }
`

export const ContactWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {  
        height: 45rem;
        flex-direction: row;
    }
`

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.mq.desktop} {        
        width: 50%;
    }
`

export const ContactItemsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    ${({ theme }) => theme.mq.desktop} {        
        width: 100%;
        margin: 0;
        flex-direction: row;
        justify-content: space-around;
    }
`

export const ContactItem = styled.a`
    font-size: ${({ theme }) => theme.font.size.s};
    text-decoration: none;
    display: flex;
    width: 90%;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 6rem;
    border-radius: 2rem;
    border: 2px solid ${({ theme }) => theme.theme};
    margin: 2rem 0;
    color: ${({ theme }) => theme.white};
    transition: color 0.1s ease-in-out;
    ${({ theme }) => theme.mq.desktop} {        
        font-size: ${({ theme }) => theme.font.size.m};
        width: auto;
    }
    &:hover {
        color: ${({ theme }) => theme.grey};
    }
    svg {
        margin: 0 2rem;
    }
`