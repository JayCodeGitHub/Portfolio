import styled from 'styled-components'

export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column-reverse;
   padding: 2.5rem 0;
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
   img {
      width: 90%;
      aspect-ratio: 1/1;
      border-radius: 15px;
   }
   div {
      width: 90%;
      height: 70%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
   }
   a {
      text-decoration: none;
      margin-left: 2rem;
   }
   ${({ theme }) => theme.mq.desktop} {
      h1 {
      margin: 0;
      font-size: ${({ theme }) => theme.font.size.m};
      }
      p {
        font-size: ${({ theme }) => theme.font.size.s};
      }
      div {
      width: 45%;
      }
      flex-direction: row;
      img {
         width: 30vw;
         aspect-ratio: 1/1;
      }
    }
   ${({ theme }) => theme.mq.bigDesktop} {
      img {
         width: 50rem;
      }
    }
`   