import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 2.5vw;
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 15vw;
    }
`