import styled from "styled-components";

export const Wrapper = styled.main`
    padding: 2.5vw;
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 2.5vw 15vw;
    }
`

export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
    }
`

export const StyledImage = styled.img`
    width: 90%;
    aspect-ratio: 1/1;
    border-radius: 1.5rem;
    ${({ theme }) => theme.mq.desktop} {
        width: 75%;
    }
`

export const DescriptionWrapper = styled.div`
    width: 100%;
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
    }
`

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.font.size.s};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.grey};
    width: 90%;
    padding-left: 2rem;
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const StyledTechnologies = styled.ul`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
`

export const Technologie = styled.li`
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.primary};
`
