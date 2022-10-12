import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    margin-bottom: 150px;
    position: relative;
    gap: 10px;
    align-items: center;
    ${({ theme }) => theme.mq.bigDesktop} {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
`
export const ImageWrapper = styled.div`
    grid-area: ${({ order }) => (order % 2 === 0 ? '1 / 8 / 1 / 1' : '1 / 7 / -1 / -1')};
    position: relative;
    z-index: 1;
    right: 0;
    top: 0;
    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
`

export const ContentWrapper = styled.div`
    grid-area: ${({ order }) => (order % 2 === 0 ? '1 / 7 / -1 / -1' : '1 / 8 / 1 / 1')};
    text-align: right;
    position: relative;
    z-index: 2;
    ul {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
        margin: 25px 0px 10px;
        padding: 0px;
        list-style: none;
        justify-content: ${({ order }) => (order % 2 === 0 ? 'flex-end' : 'flex-start')};
    }
    h3 {
        text-align: left;
        text-align: ${({ order }) => (order % 2 === 0 ? 'right' : 'left')};
    }
    li {
        margin: 0px 0px 5px 20px;
        margin: ${({ order }) => (order % 2 === 0 ? '0px 0px 5px 20px' : '0px 20px 5px 0px')};
        white-space: nowrap;
        color: ${({ theme }) => theme.primary};
    }
    p {
        color: ${({ theme }) => theme.primary};
        margin: 0;
        text-align: ${({ order }) => (order % 2 === 0 ? 'right' : 'left')};
    }
    div p {
        color: ${({ theme }) => theme.white};
        background-color: #1b1b1b;
        padding: 20px;
        border-radius: 5px;
        text-align: ${({ order }) => (order % 2 === 0 ? 'right' : 'left')};
    }
    div {
        text-align: ${({ order }) => (order % 2 === 0 ? 'right' : 'left')};
    }
`

export const IconsWrapper = styled.div`
    svg {
        height: 30px;
        fill: ${({ theme }) => theme.white};
        cursor: pointer;
    }
`