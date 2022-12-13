import styled from 'styled-components'
import { Link } from 'gatsby';

export const OuterWrapper = styled.nav`
    height: 8rem;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ isDown, theme }) => (isDown ? theme.tertiary : 'transparent')};
    border-bottom: ${({ isDown, theme }) => (isDown ? `solid ${theme.white} 2px` : 'solid transparent 2px')};
    padding: 0 5vw;
    transition: background-color 0.2s 0s ease-in-out, border-bottom 0.2s 0s ease-in-out;
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.desktop} {
        padding: 0vw 10vw;
    }
`

export const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`

export const LogoWrapper = styled.div`
    z-index: 10;
    a {
        color: inherit;
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.size.s};
        span {
            color: ${({ theme }) => theme.primary};
        }
    }
`

export const StyledNavigation = styled.ul`
    display: none;
    ${({ theme }) => theme.mq.desktop} {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        list-style: none;
        height: 60%;
        padding: 0;
        flex-direction: row;
        width: 500px;
    }
`

export const NavigationItem = styled(Link)`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.s};
    text-decoration: none;
    position: relative;
    &.active {
        color: ${({ theme }) => theme.primary};
    }
    &::before {
        content: '';
        width: 120%;
        height: 4px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.primary};
        position: absolute;
        top: 110%;
        left: -10%;
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition: transform 0.2s ease-in-out;
    }
    &:hover::before {
        transform: scaleX(1);
    }
    ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const HamburgerWrapper = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    z-index: 10;
    ${({ theme }) => theme.mq.desktop} {
        display: none;
    }
`;

export const Hamburger = styled.div`
    transition: background-color .15s .05s ease-in-out;
    background-color: ${({ isOpen, theme }) => (isOpen ? 'transparent' : theme.white)};
    width: 3rem;
    height: 0.2rem;
    border: none;
    padding: 0;
    &:before {
        content: '';
        width: 3rem;
        height: 0.2rem;
        background-color: white;
        display: block;
        transition: transform .15s .05s ease-in-out;
        transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-1rem')}) rotate(${({ isOpen }) => (isOpen ? '45deg' : '0deg')});
    }
    &:after {
        content: '';
        width: 3rem;
        height: 0.2rem;
        background-color: white;
        display: block;
        transition: transform .15s .05s ease-in-out;
        transform: translateY(${({ isOpen }) => (isOpen ? '-0.2rem' : '0.8rem')}) rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0deg')});
    }
`;

export const StyledMobileNavigation = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.tertiary};
    padding: 20vh 0 0 0;
    transition: transform 0.1s ease-in-out;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '+100%')});
    ul {
        padding: 0;
        width: 100%;
        height: 70%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
`