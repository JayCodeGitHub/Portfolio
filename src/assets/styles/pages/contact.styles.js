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
        height: 50rem;
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
        width: 50%;
        margin: 0;
    }
`

export const ContactItem = styled.div`
    font-size: ${({ theme }) => theme.font.size.m};
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    border: solid 4px blue;
    border-radius: 2rem;
    margin: 2rem 0;
`