import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10rem 0;
    h1 {
        margin: 2.5rem 0;
        width: 100%;
        font-size: ${({ theme }) => theme.font.size.s};
    }
    p {
        color: ${({ theme }) => theme.grey};
        width: 100%;
        font-size: ${({ theme }) => theme.font.size.xs};
    }
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: space-between;
        flex-direction: column;
    }
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        div {
            width: 50%;
        }
        h1 {
        font-size: ${({ theme }) => theme.font.size.m};
    }
    p {
        font-size: ${({ theme }) => theme.font.size.s};
    }
   }
`

export const SvgWrapper = styled.div`
    svg {
        width: 100%;
        height: auto;
    }
`

export const DescriptionWrapper = styled.div`
    width: 50%;
    ${({ theme }) => theme.mq.desktop} {
        width: 100%;
   }
`