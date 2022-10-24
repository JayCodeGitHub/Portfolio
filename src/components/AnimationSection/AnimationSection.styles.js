import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 2.5rem 0;
      width: 100%;
      font-size: ${({ theme }) => theme.font.size.m};
   }
   p {
      color: ${({ theme }) => theme.grey};
      width: 100%;
      font-size: ${({ theme }) => theme.font.size.s};
   }
   div {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: space-between;
        flex-direction: column;
   }
`

export const SvgWrapper = styled.div`
    svg {
        width: 100%;
    }
`

export const DescriptionWrapper = styled.div`
    width: 50%;
`