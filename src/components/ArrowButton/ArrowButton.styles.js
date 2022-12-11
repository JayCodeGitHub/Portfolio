import styled from "styled-components";

export const OuterWrapper = styled.a`
    display: inline-flex;
    transition-property: color, fill, stroke;
    transition: color 0.2s ease-in-out;
    font-weight: 500;
    text-align: left;
    align-items: center;
    cursor: pointer;
    span {
        margin-right: 3.5rem;
        font-size: ${({ theme }) => theme.font.size.s};
        line-height: 2.5rem;
        font-weight: 500;
    }
    &:hover{
        color: ${({ theme }) => theme.grey};
    }
`

export const Wrapper = styled.div`
    display: inline-flex;
    position: relative;
    padding: 0.25rem;
    flex: none;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    span {
        transform: none;
        margin: 0;
    }
    div {
        position: absolute;
    }
`

export const StyledArrow = styled.svg`
    transform: rotate(-90deg);
`