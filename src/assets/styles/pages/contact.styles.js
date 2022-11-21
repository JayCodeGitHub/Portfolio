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
    height: 50rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {        
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
    background-color: blue;
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.mq.desktop} {        
        width: 50%;
    }
`