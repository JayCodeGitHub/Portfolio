import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: 10rem 0;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 0;
`

export const ProjectsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Project = styled.div`
    width: 25%;
    height: 100%;
    img {
        width: 100%;
        border-radius: 15px;
    }
`

export const IconsWrapper = styled.div`
    svg {
        height: 30px;
        fill: ${({ theme }) => theme.white};
        cursor: pointer;
    }
`