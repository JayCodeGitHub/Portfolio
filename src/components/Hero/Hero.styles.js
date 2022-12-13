import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({secondary}) => (secondary ? 'center' : 'flex-start')};
    border-bottom: solid 2px ${({ theme }) => theme.white};
`

export const Header = styled.header`
    position: absolute;
    z-index: 10;
    width: 100%;
    padding: 5px;
    h1 {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.l};
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: ${({secondary}) => (secondary ? 'center' : 'flex-start')};
    }
    p {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.m};
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 2rem;
        button {
            margin-top: 2rem;
        }
    }
    a {
        text-decoration: none;
    }
    ${({ theme }) => theme.mq.desktop}  {
        padding-left: ${({secondary}) => (secondary ? '0' : '15vw')};
        width: auto;
        h1 {
            font-size: ${({ theme }) => theme.font.size.xxl};
        }
        p {
            font-size: ${({ theme }) => theme.font.size.xl};
        }
        div {
            padding-right: 20%;
            flex-direction: row;
            align-items: center;
            padding: 0;
            button {
                margin-top: 0;
            }
         }
    }
`