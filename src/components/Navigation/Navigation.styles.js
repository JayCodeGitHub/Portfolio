import styled from 'styled-components'

export const NavigationWrapper = styled.nav`
    height: 8rem;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 30;
    background-color: ${({ theme }) => theme.tertiary};
    @media (min-width: 768px) {
        padding: 0;
    }
    @media (min-width: 1280px) {
        padding: 0vw 10vw 0vw 10vw;
    }
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
`

export const NavigationItem = styled.li`
    padding: 0 25px;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const LogoWrapper = styled.div`
    a {
        color: ${({ theme }) => theme.white};
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.size.s};
        span {
            color: ${({ theme }) => theme.primary};
        }
    }
`