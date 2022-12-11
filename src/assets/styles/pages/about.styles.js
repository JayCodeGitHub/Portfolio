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
`

export const ImageWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImage = styled.img`
    width: 75%;
    border-radius: 1.5rem;
`

export const DescriptionWrapper = styled.div`
    width: 50%;
`

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.font.size.m};
`

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.grey};
    width: 90%;
    padding-left: 2rem;
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
