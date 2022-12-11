import styled from "styled-components";

export const OuterWrapper = styled.a`
    display: inline-flex;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
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
        color: #E5E7EB;
    }
`

export const StyledArrow = styled.svg`
    transform: rotate(-90deg);
`

export const StyledCircle = styled.circle`
    stroke-dasharray: 175.929, 175.929;
    transform: rotate(-90deg);
    transform-origin: 30px 30px;
`