import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: 15rem 0;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin: 5rem 0;
    h1 {
        margin-bottom: 2rem;
        font-size: ${({ theme }) => theme.font.size.s};
    }
    ${({ theme }) => theme.mq.desktop} {
        align-items: center;
        flex-direction: row;
        h1 {
            font-size: ${({ theme }) => theme.font.size.m};
        }
    }
`

export const ProjectsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Project = styled.div`
    height: 100%;
    width: 90%;
    margin: 5rem 0;
    img {
        width: 100%;
        aspect-ratio: 20/41;
        border-radius: 15px;
        box-shadow: 0 0 10px ${({ theme }) => theme.white};
    }
    h2 {
        font-size: ${({ theme }) => theme.font.size.m};
    }
    ${({ theme }) => theme.mq.desktop} {
        width: 25%;
        margin: 0;
    }
`

export const IconsWrapper = styled.div`
    svg {
        height: 30px;
        fill: ${({ theme }) => theme.white};
        cursor: pointer;
    }
`